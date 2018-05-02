export class Data {
    //id: number;
    //observed_on: string;
    //observed_on_string: string;
    //taxon: Array<any>;
    //name: string;

    private _observed_on: any[] = [];
    private _observed_on_string: any[] = [];
    private _id: any[] = [];

    public constructor() { };

    get observed_on(): any {
        return this._observed_on;
    }

    set observed_on(observed_on: any) {
        this._observed_on.push(observed_on);
    }

    get observed_on_string(): any {
        return this._observed_on_string;
    }

    set observed_on_string(observed_on_string: any) {
        this._observed_on_string.push(observed_on_string);
    }

    get id(): any {
        return this._id;
    }

    set id(id: any) {
        this._id.push(id);
    }
}