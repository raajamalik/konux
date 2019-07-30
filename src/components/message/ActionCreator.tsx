import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { MessageState } from "./MessageState";
import { MessageActionTypes, ShowMessageAction } from './Actions';
import { MessageType } from './MessageType';


export const showMessageActionCreator: ActionCreator<
	ThunkAction<Promise<void>, MessageState, null, ShowMessageAction>> 
		= () => {
		  return async (dispatch: Dispatch) => {
		    try {
		      dispatch({
		        type: MessageActionTypes.SHOW_MESSAGE,
				message: {
                    type: MessageType.SUCCESS,
                    text: 'Saved Successfully',
                    visible: true 
                },
		      });
		    } catch (err) {
		      //better logging is required. Console.error just to log error.
		      console.error("Error creating show message action creator: ", err);
		    }
		  };
};