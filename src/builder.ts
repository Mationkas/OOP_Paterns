// Product
export type IAirlineTripFaceClass = 'economy' | 'premium_economy' | 'first';

export interface IAirlineTripOptions {
    fromDate: string | null;
    toDate: string | null;
    from: string | null;
    to: string | null;
    class: IAirlineTripFaceClass;
}

// Builder interface
export interface IAirlineTripBuilder {
    buildFrom(from: string): void;
    buildTo(to: string): void;
    buildClass(travelClass: IAirlineTripFaceClass): void;
    buildFromDate(date: Date): void;
    buildToDate(date: Date): void;
    getResult(): IAirlineTripOptions;
}

// Concrete builder for a standard trip
export class StandardAirlineTripBuilder implements IAirlineTripBuilder {
    private airlineOptions: IAirlineTripOptions;

    constructor() {
        this.airlineOptions = {
            fromDate: new Date().toLocaleString(),
            toDate: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString(),
            from: null,
            to: null,
            class: 'economy',
        };
    }

    buildFrom(from: string): void {
        this.airlineOptions.from = from;
    }

    buildTo(to: string): void {
        this.airlineOptions.to = to;
    }

    buildClass(travelClass: IAirlineTripFaceClass): void {
        this.airlineOptions.class = travelClass;
    }

    buildFromDate(date: Date): void {
        this.airlineOptions.fromDate = date.toLocaleString();
    }

    buildToDate(date: Date): void {
        this.airlineOptions.toDate = date.toLocaleString();
    }

    getResult(): IAirlineTripOptions {
        return this.airlineOptions;
    }
}

// Director
export class AirlineTripDirector {

    constructTripToVilnius(): IAirlineTripOptions {
        const builder = new StandardAirlineTripBuilder();
        builder.buildFrom('Klaipeda');
        builder.buildTo('Vilnius');
        builder.buildClass('economy');
        return builder.getResult();
    }

    constructTripToKaunas(): IAirlineTripOptions {
        const builder = new StandardAirlineTripBuilder();
        builder.buildFrom('Klaipeda');
        builder.buildTo('Kaunas');
        builder.buildClass('premium_economy');
        builder.buildToDate(new Date('2024/10/21 19:23'))
        return builder.getResult();
    }
}
