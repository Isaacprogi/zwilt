import { JobCategories,EvaluationUser } from "../utils/types";
import ShopifyDeveloper from '../assets/shopify.svg'
import MagnetoDeveloper from '../assets/magneto.svg'
import DataScientist from '../assets/data-scientist.svg'
import Webflow from '../assets/webflow.svg'
import DotNet from '../assets/dot-net.svg'
import UxDesigner from '../assets/ux-designer.svg'
import GraphicsDesigner from '../assets/graphics.svg'
import IllustrationArtist from '../assets/illustration-artist.svg'
import UnrealEnginer from '../assets/unreal-engine.svg'
import Cinema from '../assets/cinema.svg'
import AnnieMarrie from '../assets/annie-marie.svg'


export const jobCategories: JobCategories = {
    ITandDevelopment: [
        { id: '1', jobTitle: 'Python Developer' },
        { id: '2', jobTitle: 'Shopify Developer' },
        { id: '3', jobTitle: 'Mern stack Developer' },
        { id: '4', jobTitle: 'Fullstack Developer' },
        { id: '5', jobTitle: 'Data Scientist' },
        { id: '6', jobTitle: 'Front End Developer' },
        { id: '7', jobTitle: 'Shopify Developer' },
        { id: '8', jobTitle: 'Python Developer' },
        { id: '9', jobTitle: 'Shopify Developer' },
        { id: '10', jobTitle: 'Python Developer' },
        { id: '11', jobTitle: 'Fullstack Developer' }
    ],
    DesignandCreative: [
        { id: '1', jobTitle: 'Graphic Designer' },
        { id: '2', jobTitle: 'UI/UX Designer' },
        { id: '3', jobTitle: 'Creative Director' },
        { id: '4', jobTitle: 'Art Director' },
        { id: '5', jobTitle: 'Motion Graphics Designer' },
        { id: '6', jobTitle: 'Web Designer' },
        { id: '7', jobTitle: 'Game Designer' },
        { id: '8', jobTitle: 'Fashion Designer' },
        { id: '9', jobTitle: 'Illustrator' },
        { id: '10', jobTitle: 'Interior Designer' }
    ]
};

export const developers = [
    { id: 1, value: 'ShopifyDeveloper', icon: ShopifyDeveloper },
    { id: 2, value: 'MagnetoDeveloper', icon: MagnetoDeveloper },
    { id: 3, value: 'DataScientist', icon: DataScientist },
    { id: 4, value: 'Webflow', icon: Webflow },
    { id: 5, value: 'DotNet', icon: DotNet },
];

export const designers = [
    { id: 1, value: 'UxDesigner', icon: UxDesigner },
    { id: 2, value: 'GraphicsDesigner', icon: GraphicsDesigner },
    { id: 3, value: 'IllustrationArtist', icon: IllustrationArtist },
    { id: 4, value: 'UnrealEnginer', icon: UnrealEnginer },
    { id: 5, value: 'Cinema', icon: Cinema },
];


export const evaluationUsers: EvaluationUser[] = [
    {
        id: "1",
        avatar: AnnieMarrie,
        marked:true,
        color:'#D8D2FF'
    },
    {
        id: "2",
        avatar: AnnieMarrie,
        marked:false,
        color:'#C8EFC4'
    },
    {
        id: "3",
        avatar: AnnieMarrie,
        marked:false,
        color:'#FDDD8B'
    },
]


export const frequestlyAskedQuestions = [
    {
        "id": "1",
        "question": "I want to work part-time, is that possible?",
        "answer": "Our return policy allows returns within 30 days of purchase for a full refund.",
        "general": true,
        "joiningProcess": false
    },
    {
        "id": "2",
        "question": "How long are the average projects?",
        "answer": "You can track your order by logging into your account on our website and checking the 'Order Status' section.",
        "general": false,
        "joiningProcess": false
    },
    {
        "id": "3",
        "question": "How does the payment works?",
        "answer": "Yes, we offer international shipping to most countries. Shipping fees may apply.",
        "general": false,
        "joiningProcess": false
    },
    {
        "id": "4",
        "question": "How does the payment works?",
        "answer": "We accept Visa, MasterCard, American Express, PayPal, and bank transfer.",
        "general": true,
        "joiningProcess": true
    },
    {
        "id": "5",
        "question": "How much can I earn?",
        "answer": "Yes, we have a referral program that rewards both the referrer and the referred. Contact our customer support for more details.",
        "general": false,
        "joiningProcess": false
    },
    {
        "id": "6",
        "question": "I want to work part-time, is that possible",
        "answer": "For the joining process, you need to provide a copy of your ID, proof of address, and your resume.",
        "general": false,
        "joiningProcess": false
    },
    {
        "id": "7",
        "question": "How long are the average projects?",
        "answer": "The joining process typically takes 1-2 weeks from the time we receive all required documents.",
        "general": false,
        "joiningProcess": false
    },
    {
        "id": "8",
        "question": "How long are the average projects?",
        "answer": "Yes, there is a probation period of 3 months after joining.",
        "general": false,
        "joiningProcess": false
    }
]
