export declare class WeightedRandomHelper {
    /**
     * Gets a tplId from a weighted dictionary
     * @param {tplId: weighting[]} itemArray
     * @returns tplId
     */
    getWeightedInventoryItem(itemArray: {
        [tplId: string]: unknown;
    } | ArrayLike<unknown>): string;
    /**
     * Picks the random item based on its weight.
     * The items with higher weight will be picked more often (with a higher probability).
     *
     * For example:
     * - items = ['banana', 'orange', 'apple']
     * - weights = [0, 0.2, 0.8]
     * - weightedRandom(items, weights) in 80% of cases will return 'apple', in 20% of cases will return
     * 'orange' and it will never return 'banana' (because probability of picking the banana is 0%)
     *
     * @param {any[]} items
     * @param {number[]} weights
     * @returns {{item: any, index: number}}
     */
    weightedRandom(items: string | any[], weights: string | any[]): {
        item: any;
        index: number;
    };
}
