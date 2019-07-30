import React, { Component, Dispatch } from 'react';
import { Timeframe } from './Timeframe';
import { Row, Col } from 'react-bootstrap';
import { changeTimeframesActionCreator, loadTimeframesActionCreator } from './TimeframeActionCreator';
import { connect } from 'react-redux';
import  SelectComponent  from '../html/Select.component';
import AppSate from '../../AppState';

interface Props {
    timeframes: Timeframe[],
    loadTimeframes: Function,
    changeTimeframe: Function,
}

/**
 * Timeframe component is used for providing filter criteria based on some date range. Some of the 
 * date ranges which can be applied like last 2 days, last 2 weeks, last month etc. 
 * 
 * The filter options, items must be an array where each item in the array contains an object having 
 * id, value, unit and label. 
 * 
 * - id - used as a key in select dropdown
 * - label - used for display
 * - unit - as string denoting the type of value attribute
 * - value - is a number
 */
export class TimeframeComponent extends Component<Props> {
    private items:Timeframe[] = [];

    chnageTimeframeData = (selectedTimeframe: Timeframe) => {
        this.props.changeTimeframe(selectedTimeframe);
    }

    componentDidMount(){
        this.props.loadTimeframes();
    }

    render() {
        return (
            <>
                <Row className='konux-action-header'>
                    <strong>Change Timeframe</strong>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="timeframe">
                            <SelectComponent
                                options={this.props.timeframes}
                                changedData={this.chnageTimeframeData} />
                        </div>
                    </Col>
                </Row>
            </>
            
        );
    }
}

const mapStateToProps = (store: AppSate) => {
    return {
        timeframes: store.timeframes.timeframes,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        loadTimeframes: () => {dispatch(loadTimeframesActionCreator())},
        changeTimeframe: (timeframe:Timeframe) => { dispatch(changeTimeframesActionCreator(timeframe))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeframeComponent);