import { Action } from 'redux';
import { Timeframe } from './Timeframe';
import { TimeframeState } from "./TimeframeState";

/**
* Two action types for timeframe component are LOAD_ALL_TIMEFRAMES and CHANGE_TIMEFRAME
*/
export enum TimeframeActionTypes {
    LOAD_ALL_TIMEFRAMES = 'LOAD_ALL_TIMEFRAMES',
	CHANGE_TIMEFRAME ='CHANGE_TIMEFRAME',
}

/*
* Get all timeframes.
*/
export interface LoadAllTimeframes extends Action<TimeframeActionTypes.LOAD_ALL_TIMEFRAMES> {
	timeframes: TimeframeState;	
}

/*
* Update timeframe as per newly selected.
*/
export interface ChangeTimeframeAction extends Action<TimeframeActionTypes.CHANGE_TIMEFRAME> {
	timeframe: Timeframe;	
}

/**
* All possible Train Frequency Actions.
*/
export type TimeframeActions = 
| LoadAllTimeframes 
| ChangeTimeframeAction;