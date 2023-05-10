import {makeAutoObservable} from 'mobx';

export default class TeacherStore {
    constructor() {
        this._teachers = []
        makeAutoObservable(this)
    }

    setTeachers(teachers) {
        this._teachers = teachers 
    }

    get teachers() {
        return this._teachers
    }
}