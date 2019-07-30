import { TrainFrequencyActionTypes, AddTrainFrequencyActionTypes } from '../actions/Actions';
import { TrainFrequencyState } from "../types/TrainFrequencyState";
import { Reducer } from 'redux';
import { AddTrainFrequencyState } from '../types/AddTrainFrequencyState';
import { MessageType } from '../../../components/message/MessageType';

const initialState: TrainFrequencyState = {
	trainFrequencies: []
}

/**
 * A reducer for TrainFrequency component. Actions which are taken care are from the 
 * actions file Action.tsx. Returns current state by default.
 * 
 * @param state - current state, all trainFrequency items
 * @param action - action containing the data
 */
export const trainFrequencyReducer:Reducer = (state:any = initialState, action:any) => {

	switch (action.type) {
		case TrainFrequencyActionTypes.GET_TRAIN_FREQUENCIES:
			return {
				...state,
				trainFrequencies: action.trainFrequencies
			};
		
		case TrainFrequencyActionTypes.FILTER_FREQUENCIES:
			return {
				...state,
				trainFrequencies: action.filteredFrequencies
			};
			
		default: return state;
	}
}

const initialAddTrainState: AddTrainFrequencyState = {
	addTrainFrequency: {
		trainFrequency: {
			x: new Date().toDateString(),
			y: 0,
		},
		message: {
			type: MessageType.INFO,
			text: '',
			visible: false,
		}
	}
}

/**
 * A reducer for AddTrainFrequency Component. Actions which are taken care are from the 
 * actions file AddTrainFrequencyActionTypes in Action.tsx. Returns current state by default.
 * 
 * @param state - current state, trainFrequency and message
 * @param action - action containing the data
 */
export const addTrainFrequencyReducer:Reducer = (state:any = initialAddTrainState, action:any) => {

	switch (action.type) {
		case AddTrainFrequencyActionTypes.ADD_TRAIN_FREQUENCY:
			return {
				...state,
				addTrainFrequency: action.addTrainFrequency,
			};
		
		case AddTrainFrequencyActionTypes.CLEAR_TRAIN_FREQUENCY:
			return {
				...state,
				addTrainFrequency: action.addTrainFrequency
			};
		
		case AddTrainFrequencyActionTypes.VALIDATE_TRAIN_FREQUENCY:
			return {
				...state,
				addTrainFrequency: action.addTrainFrequency
			};
			
		default: return state;
	}
}