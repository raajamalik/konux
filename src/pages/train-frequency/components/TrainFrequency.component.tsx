import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { TrainFrequency } from '../types/TrainFrequency';
import { LineGraphComponent } from '../../../components/charts/LineGraph.component';
import { Margin } from '../../../components/charts/types/Margin';
import TimeframeComponent from '../../../components/dateTime/Timeframe.component';
import DateRangeComponent from '../../../components/dateTime/DateRange.component';
import AddTrainFrequencyComponent from './AddFrequency.component';
import AppState from '../../../AppState';



/**
 * trainFrequency props to hold all data with type TrainFrequency. 
 */
interface Props {
    trainFrequencies: TrainFrequency[],
}

/**
 * Train Frequency component is used to study how frequent trains have been 
 * in past one month. It renders a line graph for the frequency. With serveral other 
 * components like timeframe selector, date range and add frequency components, this page can 
 * be useful to study some pattern of the trains running each day.
 */
export class TrainFrequencyComponent extends Component<Props>{
    
    /**
     * Line chart specific configurations.
     */
    private margin: Margin = { top: 20, right: 5, bottom: 20, left: 35 };
    private width: number = 700 - this.margin.left - this.margin.right;
    private height: number = 500 - this.margin.top - this.margin.bottom;
    private stroke: string = "#88aaff";
    private fill: string = "none";
    private strokeWidth: number = 1;

    /**
     * Date Range specific configuration.
     */
    private startDate: string = '';
    private endDate: any = '';
    private sortedTrainFrequencies: TrainFrequency[] = []; 

    render() {

        /**
         * We want to sort data by x property, so that they can be passed to Line Chart and
         * date range component.
         */
        this.sortedTrainFrequencies = this.props.trainFrequencies.sort((a: TrainFrequency, b: TrainFrequency) => {
            if (new Date(a.x) < new Date(b.x)) {
                return -1;
            } else if (new Date(a.x) > new Date(b.x)) {
                return 1;
            } else {
                return 0;
            }
        });

        /**
         * Assigning startDate and endDate for use of DateRange component.
         */
        if (this.props.trainFrequencies.length) {
            this.startDate = this.props.trainFrequencies[0].x;
            this.endDate = this.props.trainFrequencies[this.props.trainFrequencies.length - 1].x;
        }

        return (
            <div className="line-graph-container">
                <Container>
                    <Row>
                        <Col xs sm={8} md={8}>
                            <Row>
                                <LineGraphComponent
                                    width={this.width}
                                    height={this.height}
                                    margin={this.margin}
                                    stroke={this.stroke}
                                    strokeWidth={this.strokeWidth}
                                    fill={this.fill}
                                    data={this.sortedTrainFrequencies} />
                            </Row>
                        </Col>
                        <Col xs={12} sm={4} md={4}>
                            <Row>
                                <Col sm={12}>
                                    <div className='add-train-frequency-section '>
                                        <Row className='konux-action-header'>
                                            <h6>View And Add Train Frequencies</h6>
                                        </Row>
                                        <DateRangeComponent
                                            startDate={this.startDate}
                                            endDate={this.endDate}
                                            format="DD.MM.YYYY">
                                        </DateRangeComponent>

                                        <TimeframeComponent/>

                                        <AddTrainFrequencyComponent/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        trainFrequencies: store.trainFrequencies.trainFrequencies
    };
};

export default connect(mapStateToProps)(TrainFrequencyComponent);
