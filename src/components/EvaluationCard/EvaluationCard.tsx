import React from 'react';
import { EvaluationUser } from '../../utils/types';
import Good from '../../assets/vector-good.svg'

export interface EvaluationCardProps {
    user: EvaluationUser;
}

const EvaluationCard: React.FC<EvaluationCardProps> = ({ user}) => {
    return (
        <div className='w-full flex p-[1rem] relative flex-col bg-white w-full min-w-[220px] sm:w-[220px] rounded-[21px] h-[292.88px] shadow-md'>
            {
                user.marked && <img className='w-[60px] absolute bottom-[-1rem] right-[-1rem] h-[60px]' src={Good} alt="" />
            }
            <div className="flex items-center gap-[1rem]">
                <div style={{ borderColor: user.color }} className="w-[76.13px] border-4  h-[76.13px] rounded-full overflow-hidden">
                    <img className='w-full h-full object-cover' src={user.avatar} alt="user image" />
                </div>
                <div className='flex-1'>
                    <div style={{ backgroundColor: user.color}} className='w-full max-w-[66.05px] h-[10.08px] rounded-full'></div>
                    <div style={{ backgroundColor: user.color }} className='w-full mt-[.4rem] max-w-[84.05px] h-[10.08px] rounded-full'></div>
                </div>
            </div>
            <div className="w-full mt-[2rem] rounded-full flex gap-[1rem] flex-col">
                <div className="flex flex-col gap-[.5rem] ">
                    <div className="w-full max-w-[90%] rounded-full h-[.5rem] bg-[#F6F6F6]">

                    </div>
                    <div className="w-full  rounded-full h-[.5rem] bg-[#F6F6F6]">

                    </div>
                </div>
                <div className="flex flex-col gap-[.5rem] ">
                    <div className="w-full max-w-[90%] rounded-full h-[.5rem] bg-[#F6F6F6]">

                    </div>
                    <div className="w-full  rounded-full h-[.5rem] bg-[#F6F6F6]">

                    </div>
                </div>
                <div className="flex flex-col gap-[.5rem] ">
                    <div className="w-full max-w-[90%] rounded-full h-[.5rem] bg-[#F6F6F6]">

                    </div>
                    <div className="w-full  rounded-full h-[.5rem] bg-[#F6F6F6]">

                    </div>
                </div>


            </div>

        </div>
    );
}

export default EvaluationCard;
