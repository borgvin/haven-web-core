export = Filter;
/**
 * Base filter.
 *
 * @private
 */
declare class Filter {
    /**
     * Returns a new array comprised of elements from the given array that meet
     * the filter's criteria.
     *
     * @param filter implements meetsCriteria(elem) to filter the given array
     * @param array is the array to apply the filter to
     * @return the new array of filtered elements
     */
    static apply(filter: any, array: any): any;
    /**
     * Indicates if the given value meets the criteria of this filter.
     *
     * @param val is the value to test
     * @return true if the value meets the criteria of this filter, false otherwise
     */
    meetsCriteria(val: any): void;
}
