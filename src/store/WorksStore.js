import {makeAutoObservable} from 'mobx';

export default class WorksStore {
    constructor() {
        this._works = []
        makeAutoObservable(this)
    }

    setWorks(works) {
        this._works = works 
    }

    get works() {
        return this._works
    }
}