import { MessageType } from "./MessageType";

export interface Message {
    type: MessageType,
    text: string,
    visible: boolean, 
}