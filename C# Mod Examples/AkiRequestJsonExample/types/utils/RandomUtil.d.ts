import { ILogger } from "../models/spt/utils/ILogger";
import { JsonUtil } from "./JsonUtil";
import { MathUtil } from "./MathUtil";
/**
     * Array of ProbabilityObjectArray which allow to randomly draw of the contained objects
     * based on the relative probability of each of its elements.
     * The probabilities of the contained element is not required to be normalized.
     *
     * Example:
     *   po = new ProbabilityObjectArray(
     *          new ProbabilityObject("a", 5),
     *          new ProbabilityObject("b", 1),
     *          new ProbabilityObject("c", 1)
     *   );
     *   res = po.draw(10000);
     *   // count the elements which should be distributed according to the relative probabilities
     *   res.filter(x => x==="b").reduce((sum, x) => sum + 1 , 0)
     */
export declare class ProbabilityObjectArray<K, V = undefined> extends Array<ProbabilityObject<K, V>> {
    private mathUtil;
    constructor(mathUtil: MathUtil, ...items: ProbabilityObject<K, V>[]);
    filter(callbackfn: (value: ProbabilityObject<K, V>, index: number, array: ProbabilityObject<K, V>[]) => any): ProbabilityObjectArray<K, V>;
    /**
     * Calculates the normalized cumulative probability of the ProbabilityObjectArray's elements normalized to 1
     * @param       {array}                         probValues              The relative probability values of which to calculate the normalized cumulative sum
     * @returns     {array}                                                 Cumulative Sum normalized to 1
     */
    cumulativeProbability(probValues: number[]): number[];
    /**
     * Clone this ProbabilitObjectArray
     * @returns     {ProbabilityObjectArray}                                Deep Copy of this ProbabilityObjectArray
     */
    clone(): ProbabilityObjectArray<K, V>;
    /**
     * Drop an element from the ProbabilityObjectArray
     *
     * @param       {string}                        key                     The key of the element to drop
     * @returns     {ProbabilityObjectArray}                                ProbabilityObjectArray without the dropped element
     */
    drop(key: K): ProbabilityObjectArray<K, V>;
    /**
     * Return the data field of a element of the ProbabilityObjectArray
     * @param       {string}                        key                     The key of the element whose data shall be retrieved
     * @returns     {object}                                                The data object
     */
    data(key: K): V;
    /**
     * Get the relative probability of an element by its key
     *
     * Example:
     *  po = new ProbabilityObjectArray(new ProbabilityObject("a", 5), new ProbabilityObject("b", 1))
     *  po.maxProbability() // returns 5
     *
     * @param       {string}                        key                     The key of the element whose relative probability shall be retrieved
     * @return      {number}                                                The relative probability
     */
    probability(key: K): number;
    /**
     * Get the maximum relative probability out of a ProbabilityObjectArray
     *
     * Example:
     *  po = new ProbabilityObjectArray(new ProbabilityObject("a", 5), new ProbabilityObject("b", 1))
     *  po.maxProbability() // returns 5
     *
     * @return      {number}                                                the maximum value of all relative probabilities in this ProbabilityObjectArray
     */
    maxProbability(): number;
    /**
     * Get the minimum relative probability out of a ProbabilityObjectArray
     *
     * Example:
     *  po = new ProbabilityObjectArray(new ProbabilityObject("a", 5), new ProbabilityObject("b", 1))
     *  po.minProbability() // returns 1
     *
     * @return      {number}                                                the minimum value of all relative probabilities in this ProbabilityObjectArray
     */
    minProbability(): number;
    /**
     * Draw random element of the ProbabilityObject N times to return an array of N keys.
     * Drawing can be with or without replacement
     *
     * @param       {integer}                       count                   The number of times we want to draw
     * @param       {boolean}                       replacement             Draw with or without replacement from the input dict
     * @param       {array}                         locklist                list keys which shall be replaced even if drawing without replacement
     * @return      {array}                                                 Array consisting of N random keys for this ProbabilityObjectArray
     */
    draw(count?: number, replacement?: boolean, locklist?: Array<K>): K[];
}
/**
     * A ProbabilityObject which is use as an element to the ProbabilityObjectArray array
     * It contains a key, the relative probability as well as optional data.
     */
export declare class ProbabilityObject<K, V = undefined> {
    key: K;
    relativeProbability: number;
    data: V;
    /**
      * Constructor for the ProbabilityObject
      * @param       {string}                        key                         The key of the element
      * @param       {number}                        relativeProbability         The relative probability of this element
      * @param       {any}                           data                        Optional data attached to the element
      */
    constructor(key: K, relativeProbability: number, data?: V);
}
export declare class RandomUtil {
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    constructor(jsonUtil: JsonUtil, logger: ILogger);
    getInt(min: number, max: number): number;
    getIntEx(max: number): number;
    getFloat(min: number, max: number): number;
    getBool(): boolean;
    getStringArrayValue(arr: string[]): string;
    getArrayValue<T>(arr: T[]): T;
    getKey(node: any): string;
    getKeyValue(node: {
        [x: string]: any;
    }): any;
    /**
     * Draw from normal distribution
     * @param   {number}    mu      Mean of the normal distribution
     * @param   {number}    sigma   Standard deviation of the normal distribution
     * @returns {number}            The value drawn
     */
    randn(mu: number, sigma: number): number;
    /**
     * Draw Random integer low inclusive, high exclusive
     * if high is not set we draw from 0 to low (exclusive)
     * @param   {integer}   low     Lower bound inclusive, when high is not set, this is high
     * @param   {integer}   high    Higher bound exclusive
     * @returns {integer}           The random integer in [low, high)
     */
    randInt(low: number, high?: number): number;
    /**
     * Draw a random element of the provided list N times to return an array of N random elements
     * Drawing can be with or without replacement
     * @param   {array}     list            The array we want to draw randomly from
     * @param   {integer}   count               The number of times we want to draw
     * @param   {boolean}   replacement     Draw with ot without replacement from the input array
     * @return  {array}                     Array consisting of N random elements
     */
    drawRandomFromList<T>(list: Array<T>, count?: number, replacement?: boolean): Array<T>;
    /**
     * Draw a random (top level) element of the provided dictionary N times to return an array of N random dictionary keys
     * Drawing can be with or without replacement
     * @param   {any}       dict            The dictionary we want to draw randomly from
     * @param   {integer}   count           The number of times we want to draw
     * @param   {boolean}   replacement     Draw with ot without replacement from the input dict
     * @return  {array}                     Array consisting of N random keys of the dictionary
     */
    drawRandomFromDict(dict: any, count?: number, replacement?: boolean): any[];
    getBiasedRandomNumber(min: number, max: number, shift: number, n: number): number;
}
