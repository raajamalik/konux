import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TimeframeState } from "./TimeframeState";
import { Timeframe } from "./Timeframe";
import { LoadAllTimeframes, TimeframeActionTypes } from './TimeframeActions';
import { TrainFrequency } from '../../pages/train-frequency/types/TrainFrequency';
import { TrainFrequencyActionTypes } from '../../pages/train-frequency/actions/Actions';
import { TimeFrameConstants } from '../../pages/train-frequency/constants';
import timeframes from "../../config/timeframes.json";
import axios from 'axios';
import moment from 'moment';

/**
 * Load all timeframes from config/db and dispatch LOAD_ALL_TIMEFRAMES event.
 */
export const loadTimeframesActionCreator: ActionCreator<ThunkAction<Promise<any>, TimeframeState, null, LoadAllTimeframes>> 
		= () => {
		  return async (dispatch: Dispatch) => {
		    try {
                dispatch({
                    type: TimeframeActionTypes.LOAD_ALL_TIMEFRAMES,
                    timeframes,
                })
		    } catch (err) {
		      //better logging is required. Console.error just to log error.
		      console.error("Error getting data from server: ", err);
		    }
		  };
};

/**
 * Based on changed timeframe, filter the data and then fire FILTER_FREQUENCIES action. 
 */
export const changeTimeframesActionCreator: ActionCreator<ThunkAction<Promise<any>, TimeframeState, null, LoadAllTimeframes>> 
		= (timeframe:Timeframe) => {
		  return async (dispatch: Dispatch) => {
		    try {
                const response = await axios.get('http://konuxdata.getsandbox.com/data');
                
                /**
                 * All data is first saved and this server for the scenario where All days are selected as timeframe.
                 */
                let filteredFrequencies: TrainFrequency[] = response.data;

                /**
                 * Object to be passed in dispatch function. Later we just need to update filteredFrequencies
                 */
                let dispatchObj = {
                    type: TrainFrequencyActionTypes.FILTER_FREQUENCIES,
                    filteredFrequencies,
                }
                
                /**
                 * All data timeframe is not selected. Now, filter the data based on the selected 
                 * timeframe and update dispatch object with updated data.
                 */
                if (timeframe.value !== TimeFrameConstants.TIME_FRAME_ALL_DATA) {
                    //@ts-ignore - Ideally we should be using moment.duraton(value, type of duration)
                    //but it is not taking type of duration as string which I have stored in selectedTimeframe.unit.
                    const newStartDate = moment().subtract(timeframe.value, timeframe.unit);
                    dispatchObj.filteredFrequencies = response.data.filter((fd: TrainFrequency) => {
                        return moment(fd.x) > newStartDate;
                    });
                }
                
                dispatch(dispatchObj);

                
		    } catch (err) {
		      //better logging is required. Console.error just to log error.
		      console.error("Error getting data from server: ", err);
		    }
		  };
};

