import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '..';
import { fetchPlan } from '../http/planAPI';
import PlanList from '../components/PlanList';

const PlansPage = observer(() => {
    const {plan} = useContext(Context)

    useEffect(() => {
        fetchPlan().then(data => plan.setPlans(data))
    }, [])
    return (
        <PlanList></PlanList>
    );
});

export default PlansPage;