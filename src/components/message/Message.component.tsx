import React, { Component, Dispatch } from 'react';
import { MessageType } from './MessageType';
import { showMessageActionCreator } from './ActionCreator';
import { connect } from 'react-redux';

interface Props {
	type:MessageType,
	text:string,
	visible: boolean,
}

/**
 * Message displays a confirmation message on screen in response to some
 * user action. There are four types of message which can be displayed, these are 
 * defined in MessageType class. These are info, warning, error and success. 
 * 
 * This takes following input:
 * - typs - The type of message to display. Valid types are defined in MessageType.
 * - text - The messege string to display
 * - visible - a boolean flag to control the visibility of the message on screen.
 */
export class MessageComponent extends Component<Props>{

	render(){
		if(!this.props.visible){
			return (<></>)
		}

		switch (this.props.type) {
			case MessageType.INFO:
				return (
					<div className="message">
						<span className="message-info">{this.props.text}</span>
					</div>
				)
			case MessageType.WARNING:
				return (
					<div className="message">
						<span className="message-warning">{this.props.text}</span>
					</div>
				)
			case MessageType.SUCCESS:
				return (
					<div className="message">
						<span className="message-success">{this.props.text}</span>
					</div>
				)
			case MessageType.ERROR:
				return (
					<div className="message">
						<span className="message-error">{this.props.text}</span>
					</div>
				)
			default:
				return (
					<div className="message">
						<span>Unknown message type</span>
					</div>
				)
		}
	}
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        showMessage: () => {dispatch(showMessageActionCreator())},
    }
}

export default connect(null,mapDispatchToProps)(MessageComponent);