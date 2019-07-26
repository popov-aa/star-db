import React from 'react';
import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService
const {
    getPerson,
    getPersonImage,
    getStarship,
    getStarshipImage,
    getPlanet,
    getPlanetImage
} = swapiService

const PersonDatails = ({itemId}) => {
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

const PlanetDatails = ({itemId}) => {
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
};

const StarshipDatails = ({itemId}) => {
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
};

export {
    PersonDatails,
    PlanetDatails,
    StarshipDatails
}