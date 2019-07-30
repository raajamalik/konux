import { Action } from 'redux';
import { MessageState } from "./MessageState";

/**
* Enum type to hold all possible actions for Message Component.
* Possible actions are show and hide.
*/
export enum MessageActionTypes {

	SHOW_MESSAGE = 'SHOW_MESSAGE',
	HIDE_MESSAGE = 'HIDE_MESSAGE'
	
}

/*
* Displays message on screen
*/
export interface ShowMessageAction extends Action<MessageActionTypes.SHOW_MESSAGE> {
	message: MessageState;	  
}

/*
* Hides message on screen
*/
export interface HideMessageAction extends Action<MessageActionTypes.HIDE_MESSAGE> {
	message: MessageState;	
}

/**
* All possible Message Actions.
*/
export type MessageActions = 
| ShowMessageAction
| HideMessageAction;