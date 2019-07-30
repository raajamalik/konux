import React, { Component, Dispatch } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import AppState from '../../../AppState';
import DatePicker from '../../../components/dateTime/DatePicker.component';
import { AddTrainFrequency } from '../types/AddTrainFrequency';
import { addFrequenciesActionCreator, clearTrainFrequenciesActionCreator } from '../actions/ActionCreator';
import { connect } from 'react-redux';
import { MessageComponent } from '../../../components/message/Message.component';

/**
 * dispatch is added, just to make TypeScript happy.
 */
interface Props {
    addTrainFrequency: AddTrainFrequency,
    clearFrequency: Function,
    addFrequency: Function,
}

interface State {
    addTrainFrequency: AddTrainFrequency,
}
/**
 * Add train frequency is for allowing user to add a point/frequency. Though, it is not saved
 * but if it gets saved then graph can be used to render newly added point
 * just by dispatching TrainFrequencyActionTypes.ADD_FREQUENCY_ACTION
 */
export class AddTrainFrequencyComponent extends Component<Props, State>{
    private date: Date = new Date();
    private frequency: any = '0';
    private visible: boolean = false;

    constructor(props: Props) {
        super(props);
        this.frequency = React.createRef();
        this.addFrequency = this.addFrequency.bind(this);
    }

    /**
     * A callback to updated date on datetime picker.
     */
    updateDate = (updatedDate: Date) => {
        this.date = updatedDate;
    }

    /**
     * A callback called when selection is made on datetime picker.
     */
    selectDate = (selectedDate: Date) => {
        this.date = selectedDate;
    }

    /**
     * Calls action creator for add frequency with selected date and frequency value.
     */
    addFrequency = () => {
        this.props.addFrequency({
            trainFrequency: {
                x: this.date,
                y: this.frequency.value
            }
        });
    }

    /**
     * Call action creator for clearing input values
      */
    clearData = () => {
        this.props.clearFrequency();
    }

    render() {
        return (
            <>
                <Row className='konux-action-header'>
                    <strong>Add Train Frequency</strong>
                </Row>
                <Row>
                    <Col sm={3}>
                        <label>
                            <span className='form-label-text'>Date:</span>
                        </label>
                    </Col>
                    <Col sm={9}>
                        <DatePicker
                            date={this.props.addTrainFrequency.trainFrequency.date || new Date()}
                            dateFormat={'dd.MM.yyyy'}
                            onSelect={this.selectDate}
                            onChange={this.updateDate}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <label>
                            <span className='form-label-text'>Frequency:</span>
                        </label>
                    </Col>
                    <Col sm={9}>
                        <input type="text"
                            className="newPoint"
                            defaultValue={this.props.addTrainFrequency.trainFrequency.y.toString()}
                            ref={(frequency) => this.frequency = frequency} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={this.addFrequency}
                            className="addPointBtn">
                            Add Frequency
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MessageComponent
                            visible={this.props.addTrainFrequency.message.visible}
                            type={this.props.addTrainFrequency.message.type}
                            text={this.props.addTrainFrequency.message.text} />
                    </Col>
                </Row>
                <Row>
                </Row>
            </>
        )
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        addTrainFrequency: store.addTrainFrequency.addTrainFrequency
    };
};


const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        addFrequency: (addTrainFrequency: AddTrainFrequency) => { dispatch(addFrequenciesActionCreator(addTrainFrequency)) },
        clearFrequency: () => { dispatch(clearTrainFrequenciesActionCreator()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrainFrequencyComponent);
