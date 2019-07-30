import { TimeframeActionTypes } from './TimeframeActions';
import { TimeframeState } from "./TimeframeState";
import { Reducer } from 'redux';

const initialState: TimeframeState = {
	timeframes: [] 
}

/**
 * A reducer for Timeframe component. Actions which are taken care are from the 
 * actions file TimeframeAction.tsx. Returns current state by default.
 * 
 * @param state - current state, all timeframes
 * @param action - action containing the data
 */
export const timeframeReducer:Reducer = (
	state:any = initialState, action:any) => { 

	switch (action.type) {
		case TimeframeActionTypes.LOAD_ALL_TIMEFRAMES:
			return {
				...state,
				timeframes: action.timeframes
			};
		
		case TimeframeActionTypes.CHANGE_TIMEFRAME:
			return {
				...state,
				timeframe: action.timeframe
			};
			
		default: return state;
	}
}

