import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { fetchWork } from '../http/workAPI';
import WorkList from '../components/WorkList';

const WorksPage = observer(() => {
    const {work} = useContext(Context)

    useEffect(() => {
        fetchWork().then(data => work.setWorks(data))
    }, [])
    return (
        <WorkList></WorkList>
    );
});

export default WorksPage;