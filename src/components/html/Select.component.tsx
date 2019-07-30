import React, { Component } from 'react';
import { Timeframe } from '../../components/dateTime/Timeframe';

/**
 * Props from parent component for Select component wrapper.
 * 
 * -options - the array of options having id, value, label
 * -changedData - select component change status handler.
 */
interface Props {
    options: Timeframe[],
    changedData: Function
}

/**
 * A wrapper over HTML select drop down. Takes two inputs:
 * 
 * - options - An array of items to display in dropdown
 * - changedData - a function callback to handle the updated selection
 */
export default class SelectComponent extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
 
    /**
     * Handles the change of select dropdown and passes the selected items'
     * information to parent component.
     * @param event 
     */
    private handleChange(event: React.FormEvent<HTMLSelectElement>) {
        let selectedItem:Timeframe[] = this.props.options.filter(i => i.value.toString() === event.currentTarget.value);
        this.props.changedData(selectedItem[0]);
    }

    render() {
        return (
            <div className="select-component">
                <select onChange={this.handleChange}>
                    {this.props.options.map(value => (
                        <option key={value.id} value={value.value}>{value.label}</option>
                    ))}
                </select>
            </div>
        )
    }
}
