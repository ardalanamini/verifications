export interface Bank {
    name: string;
    alias: string;
    website: string;
}
/**
 *
 * @see http://www.aliarash.com/article/creditcart/credit-debit-cart.htm
 */
export declare function verify(code: string): boolean;
export declare function identify(code: string): {
    valid: boolean;
    type: string | undefined;
    bank: Bank | undefined;
};
