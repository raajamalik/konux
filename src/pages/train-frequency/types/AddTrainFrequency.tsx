import { TrainFrequency } from "./TrainFrequency";
import { Message } from "../../../components/message/Message";

/**
 * State for Add Train Frequency component. 
 *
 * -trainFrequency - Holds the fields value for date and frequency number.
 * -message - to show the success or failure of the add operation.
 */
export interface AddTrainFrequency {
    trainFrequency: TrainFrequency,
    message: Message
}