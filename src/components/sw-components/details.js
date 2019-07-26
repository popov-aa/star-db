import React from 'react';
import ItemDetails, {Record} from "../item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDatails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    )
};

const PlanetDatails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}
                            itemId={itemId}
                        >
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation period"/>
                            <Record field="diameter" label="Diameter"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

const StarshipDatails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                (getStarship, getStarshipImage) => {
                    return (
                        <ItemDetails
                            getData={getStarship}
                            getImageUrl={getStarshipImage}
                            itemId={itemId}
                        >
                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="costInCredits" label="Cost"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

export {
    PersonDatails,
    PlanetDatails,
    StarshipDatails
}