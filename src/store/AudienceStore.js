import {makeAutoObservable} from 'mobx';

export default class AudienceStore {
    constructor() {
        this._audiences = []
        makeAutoObservable(this)
    }

    setAudiences(audiences) {
        this._audiences = audiences 
    }

    get audiences() {
        return this._audiences
    }
}