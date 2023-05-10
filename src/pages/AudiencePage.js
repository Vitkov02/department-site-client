import React, { useEffect, useContext } from 'react';
import { Context } from '..';
import { fetchAudience } from '../http/audienceAPI';
import AudienceList from '../components/AudienceList';

const AudiencePage = () => {
    const {audience} = useContext(Context)

    useEffect(() => {
        fetchAudience().then(data => audience.setAudiences(data))
    }, [])
    return (
        <AudienceList></AudienceList>
    );
};

export default AudiencePage;