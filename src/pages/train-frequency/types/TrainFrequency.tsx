
/**
* TrainFrequency is a type to contain two properties x and y. 
* x denotes the date and y denotes frequency on date x
* @param x date, of train being run 
* @param y number of times the trains runs on that date(represented by [[x]]). 
*/
export interface TrainFrequency {
	x: string;
	y: number;
	date?: Date;
}

