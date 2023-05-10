import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Row } from 'react-bootstrap';
import AudienceItem from './AudienceItem';

const AudienceList = observer(() => {
    const {audience} = useContext(Context)
    return (
        <Row>
            {audience.audiences.map(audience => 
                <AudienceItem key={audience.id} audience={audience}/>
                )}
        </Row>
    );
});

export default AudienceList;