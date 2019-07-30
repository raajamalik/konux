import { Action } from 'redux';
import { TrainFrequency } from '../types/TrainFrequency';
import { TrainFrequencyState } from "../types/TrainFrequencyState";

/**
* Enum type to hold all possible actions which can be performed on Train Frequency page. 
* There are two types of actions:
*
* - Get train frequencies - Get all train frequencies from API. 	
* - Filter frequencies - Filter frequencies based on some timeframe.
*/
export enum TrainFrequencyActionTypes {
	GET_TRAIN_FREQUENCIES ='GET_TRAIN_FREQUENCIES',
	FILTER_FREQUENCIES = 'FILTER_FREQUENCIES',
}

/*
* Returns all the train frequencies without any filter.
*/
export interface GetTrainFrequenciesAction extends Action<TrainFrequencyActionTypes.GET_TRAIN_FREQUENCIES> {
	trainFrequencies: TrainFrequencyState;	
}


/**
* Filters train frequencies for any given timeframe.
*/
export interface FilterFrequenciesAction extends Action<TrainFrequencyActionTypes.FILTER_FREQUENCIES> {
	trainFrequencies: TrainFrequencyState;	
}


/**
 * Actions for add frequency components. We can only add a frequency and clear 
 * the current state.
 */
export enum AddTrainFrequencyActionTypes {
	ADD_TRAIN_FREQUENCY = 'ADD_TRAIN_FREQUENCY',
	CLEAR_TRAIN_FREQUENCY = 'CLEAR_TRAIN_FREQUENCY',
	VALIDATE_TRAIN_FREQUENCY = 'VALIDATE_TRAIN_FREQUENCY',
}

/**
* Adds a new frequency for any given date.
*/
export interface AddTrainFrequencyAction extends Action<AddTrainFrequencyActionTypes.ADD_TRAIN_FREQUENCY> {
	trainFrequency: TrainFrequency;
}


/**
* Clears frequency state.
*/
export interface ClearTrainFrequencyAction extends Action<AddTrainFrequencyActionTypes.CLEAR_TRAIN_FREQUENCY> {
	trainFrequency: TrainFrequency;
}

/**
* Validate train frequency state.
*/
export interface ValidateTrainFrequencyAction extends Action<AddTrainFrequencyActionTypes.VALIDATE_TRAIN_FREQUENCY> {
	trainFrequency: TrainFrequency;
}

/**
* All possible Train Frequency Actions.
*/
export type TrainFrequencyActions = 
| GetTrainFrequenciesAction 
| AddTrainFrequencyAction
| FilterFrequenciesAction;

/**
 * All possible actions for add train frequency.
 */
export type AddTrainFrequencyActions = 
| AddTrainFrequencyAction
| ClearTrainFrequencyAction
| ValidateTrainFrequencyAction;