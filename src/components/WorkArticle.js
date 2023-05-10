import React from 'react';
import {Button, Card} from 'react-bootstrap'

const WorkArticle = ({work}) => {
    return (
        <Card className='mt-3'>
            <Card.Header>{work.author}</Card.Header>
            <Card.Body>
                <Card.Title>{work.title}</Card.Title>
                <Card.Text>
                    {work.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WorkArticle;