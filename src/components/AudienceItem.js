import React from 'react';
import {Col, Card, Image, Container} from 'react-bootstrap'

const AudienceItem = ({audience}) => {
    return (
        <Col className='mt-3'  md={3}>
            <Card className="mx-auto h-100" style={{ width: '18rem'}}>
                <Image   src={process.env.REACT_APP_API_URL + audience.img} fluid />
                <Card.Body>
                    <Card.Title>{audience.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AudienceItem;    