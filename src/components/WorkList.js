import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import {Col, Row, Container} from 'react-bootstrap';
import WorkArticle from './WorkArticle';

const WorkList = observer(() => {
    const {work} = useContext(Context)
    return (
        <Container fluid="md">
            <Row>
                <Col>
                    {work.works.map(work =>
                        <WorkArticle key={work.id} work={work}/>   
                        )}
                </Col>
            </Row>
        </Container>
    );
});

export default WorkList;