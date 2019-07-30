import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TrainFrequencyState } from "../types/TrainFrequencyState";
import { GetTrainFrequenciesAction, TrainFrequencyActionTypes, FilterFrequenciesAction, AddTrainFrequencyAction, ClearTrainFrequencyAction, AddTrainFrequencyActionTypes } from './Actions';
import { Timeframe } from '../../../components/dateTime/Timeframe';
import { MessageType } from '../../../components/message/MessageType';
import { AddTrainFrequencyState } from '../types/AddTrainFrequencyState';
import axios from 'axios';
import { AddTrainFrequency } from '../types/AddTrainFrequency';
import * as _ from 'lodash';


/**
 * Used to get all data at the start of application.
 */
export const getTrainFrequenciesActionCreator: ActionCreator<
	ThunkAction<Promise<any>, TrainFrequencyState, null, GetTrainFrequenciesAction>> 
		= () => {
		  return async (dispatch: Dispatch) => {
		    try {
		      const response = await axios.get('http://konuxdata.getsandbox.com/data');
		      dispatch({
		        trainFrequencies: response.data,
		        type: TrainFrequencyActionTypes.GET_TRAIN_FREQUENCIES,
		      });
		    } catch (err) {
		      //better logging is required. Console.error just to log error.
		      console.error("Error getting data from server: ", err);
		    }
		  };
};

/**
 * Used to filter data after every sbusiquent selection of timeframe
 * with the use of TimeframeComponent.
 * 
 * @param selectedTimeframe an object of type Timeframe
 */
export const filterFrequenciesActionCreator: ActionCreator<
ThunkAction<Promise<any>, TrainFrequencyState, null, FilterFrequenciesAction>> 
	= (selectedTimeframe: Timeframe) => {
	  return async (dispatch) => {
		try {
		  const response = await axios.get('http://konuxdata.getsandbox.com/data');
		  dispatch({
			trainFrequencies: response.data,
			type: TrainFrequencyActionTypes.FILTER_FREQUENCIES,
		  });
		} catch (err) {
		  //better logging is required. Console.error just to log error.
		  console.error("Error filtering data from server: ", err);
		}
	  };
}

/**
 * Adds Frequency via a POST API. API only returns 200 ok if success.
 * Data is not stored. 
 * @param trainFrequency contains x as date and y as number
 */
export const addFrequenciesActionCreator: ActionCreator<
ThunkAction<Promise<void>, AddTrainFrequencyState, null, AddTrainFrequencyAction>> 
	= (addTrainFrequency: AddTrainFrequency) => {
	  return async (dispatch: Dispatch) => {
		try {
			const tf = addTrainFrequency.trainFrequency;
			
			const checkForZero = (n:number) => {
				const ZERO = 0;
				return n.toString() === ZERO.toString()
			}

			if(_.isNil(tf.x) || _.isNil(tf.y) || _.isEmpty(tf.y) || checkForZero(tf.y)){
				//Throw Validaiton message with dispatch.
				dispatch({
					addTrainFrequency: {
						trainFrequency: tf,
						message: {
							type: MessageType.ERROR,
							text: 'Please enter date and frequency both.',
							visible: true, 
						},
					},
					type: AddTrainFrequencyActionTypes.VALIDATE_TRAIN_FREQUENCY,
				});	

			}else {
				
				await axios.post('http://konuxdata.getsandbox.com/points', {
                	x: addTrainFrequency.trainFrequency.x,
                	y: addTrainFrequency.trainFrequency.y
				});
				dispatch({
					addTrainFrequency: {
						trainFrequency: {
							x: new Date(),
							y: 0
						},
						message: {
							type: MessageType.SUCCESS,
							text: 'Saved Successfully',
							visible: true, 
						},
					},
					type: AddTrainFrequencyActionTypes.ADD_TRAIN_FREQUENCY,
				});
			}
		} catch (err) {
		  //better logging is required. Console.error just to log error.
		  console.error("Error filtering data from server: ", err);
		}
	  };
}

/**
 * Adds Frequency via a POST API. API only returns 200 ok if success.
 * Data is not stored. 
 * @param trainFrequency contains x as date and y as number
 */
export const clearTrainFrequenciesActionCreator: ActionCreator<
ThunkAction<Promise<void>, AddTrainFrequencyState, null, ClearTrainFrequencyAction>> 
	= () => {
	  return async (dispatch: Dispatch) => {
		try {
			dispatch({
				addTrainFrequency: {
					trainFrequency: {
						x: new Date(),
						y: 0
					},
					message: {
						type: MessageType.INFO,
						text: 'Cleared Data',
						visible: false 
					},
				},
				type: AddTrainFrequencyActionTypes.CLEAR_TRAIN_FREQUENCY,
		  });
		} catch (err) {
		  //better logging is required. Console.error just to log error.
		  console.error("Error filtering data from server: ", err);
		}
	  };
}