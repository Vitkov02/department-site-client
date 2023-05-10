import React from 'react';
import {Card} from 'react-bootstrap'

const PlanCard = ({plan}) => {
    return (
        <Card className='mt-3 h-75'>
            <Card.Body>
                <Card.Title>{plan.title}</Card.Title>
                <Card.Text>*</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PlanCard;