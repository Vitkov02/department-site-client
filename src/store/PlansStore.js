import {makeAutoObservable} from 'mobx';

export default class PlansStore {
    constructor() {
        this._plans = []
        makeAutoObservable(this)
    }

    setPlans(plans) {
        this._plans = plans 
    }

    get plans() {
        return this._plans
    }
}