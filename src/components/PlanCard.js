import React from 'react';
import {Card, Image} from 'react-bootstrap'

const PlanCard = ({plan}) => {
    return (
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>{plan.title}</Card.Title>
                <Image  src={process.env.REACT_APP_API_URL + plan.img} fluid/>
            </Card.Body>
        </Card>
    );
};

export default PlanCard;