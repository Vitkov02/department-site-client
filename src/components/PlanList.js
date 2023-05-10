import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import {Row, Col, Container} from 'react-bootstrap'
import PlanCard from './PlanCard';

const PlanList = observer(() => {
    const {plan} = useContext(Context)
    return (
        <Container fluid="md">
            <Row>
                <Col>
                    {plan.plans.map(plan => 
                    <PlanCard key={plan.id} plan={plan}/>
                        )}
                </Col>
            </Row>
        </Container>
    );
});

export default PlanList;