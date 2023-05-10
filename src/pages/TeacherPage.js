import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import TeacherList from '../components/TeacherList';
import { Context } from '..';
import { fetchTeacher } from '../http/teacherAPI';

const TeacherPage = observer(() => {
    const {teacher} = useContext(Context)

    useEffect(() => {
        fetchTeacher().then(data => teacher.setTeachers(data))
    }, [])

    return (
        <TeacherList></TeacherList>
    );
});

export default TeacherPage;