import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {... props}>
                {fn}
            </Wrapped>
        )
    }
}


const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPeople }
};
const PersonList = withSwapiService(mapPersonsMethodsToProps)(
    withData(
        withChildFunction(renderName)(ItemList)
    )
);

const mapPlanetsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPlanets }
};
const PlanetList = withSwapiService(mapPlanetsMethodsToProps)(
    withData(
        withChildFunction(renderName)(ItemList)
    )
);

const mapStarshipsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllStarships }
};
const StarshipList = withSwapiService(mapStarshipsMethodsToProps)(
    withData(withChildFunction(renderModelAndName)(ItemList)
    )
);

export {
    PersonList,
    PlanetList,
    StarshipList
}