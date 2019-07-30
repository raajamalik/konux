import { TrainFrequencyState } from "./pages/train-frequency/types/TrainFrequencyState";
import { TimeframeState } from "./components/dateTime/TimeframeState";
import { MessageState } from "./components/message/MessageState";
import { AddTrainFrequencyState } from "./pages/train-frequency/types/AddTrainFrequencyState";

export default interface AppSate {
	trainFrequencies: TrainFrequencyState,
	timeframes: TimeframeState,
	messages: MessageState,
	addTrainFrequency: AddTrainFrequencyState,
}