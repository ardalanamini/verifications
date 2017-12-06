export default class Verifications {
    private locale;
    constructor(locale: string);
    setLocale(locale: string): void;
    readonly nationalCode: Object;
    readonly creditCard: Object;
}
