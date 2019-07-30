import { Message } from "./Message";

/**
 * A state of every message displayed on application. It has three fields
 * type(info, warning, success and error), message string and visibility.
 */
export interface MessageState {
	message: Message
}