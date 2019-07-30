import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

interface Props {
    startDate: string,
    endDate: string,
    format: string,
}

/**
 * @author Raja Malik
 * 
 * DateRange Components displays the start and the end date. Both start and end date are passed
 * from parent component as part of the props. You can also configure the format of the date
 * you want to display by passing format in the props. 
 * 
 * The format in which range is displayed is: {startDate} - {endDate}
 */
export default class DateRangeComponent extends Component<Props>{
    private defaultFormat: string = 'DD.MM.YYYY';
    startDate: string;
    endDate: string;

    constructor(props:Props){
        super(props)

        this.startDate = '';
        this.endDate = '';
    }

    componentDidMount() {
        if(this.props.startDate && this.props.endDate){
            this.startDate = moment(this.props.startDate).format(this.props.format || this.defaultFormat);
            this.endDate = moment(this.props.endDate).format(this.props.format || this.defaultFormat);   
        }
    }

    render() {
        if(this.props.startDate && this.props.endDate){
            this.startDate = moment(this.props.startDate).format(this.props.format || this.defaultFormat);
            this.endDate = moment(this.props.endDate).format(this.props.format || this.defaultFormat);   
        }
        return (
            <>
                <Row className='konux-action-header'>
                    <strong>Date Range</strong>
                </Row>
                <Row>
                    <Col xs={6}>
                            <span className='form-label-text startDate'>{this.startDate}</span>
                            <span className='date-range-seperator'>-</span>
                            <span className='form-label-text endDate'>{this.endDate}</span>
                    </Col>
                </Row>
            </>
        )
    }
}