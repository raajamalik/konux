import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    date: Date,
    dateFormat?: string,
    onSelect: Function,
    onChange: Function
}

interface State {
  date: Date
}

/**
 * @author Raja Malik
 * 
 * A simple date picker component which wraps react-datepicker. There are many inputs which 
 * react-datepicker takes and we have not exposed all of them. 
 * Please refer the link https://reactdatepicker.com/
 * 
 * It takes following attributes:
 * - date - a JavaScript date object
 * - dateFormat - a date format
 * - onSelect - a handler for date selection
 * - onChange - a handler for date change
 * 
 */
export default class DatePickerComponent extends Component<Props, State> {
    
  constructor(props:Props) {
    super(props);
    this.state = {
      date: this.props.date
    };
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  /**
   * Handles the changes in Date picker. The change handler is passed as part of props 
   * from parent component.
   */
  onChange = (date:Date) => {
    this.setState({
      date: date
    });
    this.props.onChange(date)
  }

  /**
   * Handles the selection in Date picker. The selection handler is passed as part of props 
   * from parent component.
   */
  onSelect = (date:Date) => {
    this.props.onSelect(date);
  }
  
  render() {
    return (
      <DatePicker
      selected={this.state.date}
      onChange={this.onChange}
      dateFormat={this.props.dateFormat}
      />
    );
  }
  }
