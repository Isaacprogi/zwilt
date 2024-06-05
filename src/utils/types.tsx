export interface UserCard {
    id:string;
    name:string;
    avatar:string;
    details:{
        location:string;
        experience:string;
    },
    color:string;
}

export type Job = {
    id: string;
    jobTitle: string;
};

export type JobCategories = {
    ITandDevelopment: Job[];
    DesignandCreative: Job[];
};

export interface EvaluationUser {
    id:string;
    avatar:string;
    marked:boolean;
    color:string
}