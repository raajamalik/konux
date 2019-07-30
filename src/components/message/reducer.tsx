import { MessageActionTypes } from './Actions';
import { MessageState } from './MessageState';
import { MessageType } from './MessageType';

const initialState: MessageState = {
    message: {
		type: MessageType.INFO,
		text: 'Everything is cool',
		visible: false,
	}
}
 
export const messageReducer:any = (state:any = initialState, action:any) => {

	switch (action.type) {
		case MessageActionTypes.SHOW_MESSAGE:
			return {
				...state,
				message: action.message
			};
		
		case MessageActionTypes.HIDE_MESSAGE:
			return {
				...state,
				message: action.message
			};
			
		default: return state;
	}
}

