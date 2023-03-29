import { Priorities } from "../services/values/priorities.enum";

export interface KMessageDTO {
    id:number;
    creation:number;
    title:string;
    content:string;
    priority:Priorities;
}

export interface KMessageNEW extends Omit<KMessageDTO,'id'> {}

