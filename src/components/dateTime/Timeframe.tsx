import { Option } from '../html/Option';

/**
 *  Timeframe type is used in Timeframe component.
 *
 * - id - used as a key in select dropdown
 * - label - used for display
 * - unit - as string denoting the type of value attribute
 * - value - is a number
*/
export interface Timeframe{
	
		id: number, 
		value: number, 
		unit: String, 
		label: string, 
}