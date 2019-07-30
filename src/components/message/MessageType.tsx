/**
 * MessageType is used by Message component. Valid message types can be:
 * 
 * - Info - Displays infomration to user.
 * - warning - Warns user of potential issues.
 * - success - Displays message for succesfull operations.
 * - error - Displays message for error conditions.
 */
export enum MessageType {
	ERROR,
	WARNING,
	INFO,
	SUCCESS,
}