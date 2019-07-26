import React from 'react';
import ItemDetails, {Record} from "../item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";
import {withSwapiService} from '../hoc-helpers'

const PersonDetails = ({itemId, swapiService}) => {
    const {getPerson, getPersonImage} = swapiService
    return (
        <ItemDetails
            getData={getPerson}
            getImageUrl={getPersonImage}
            itemId={itemId}
        >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye color"/>
        </ItemDetails>
    )
};
export default withSwapiService(PersonDetails)