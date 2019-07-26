import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
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
}
const PersonList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPersonsMethodsToProps
)

const mapPlanetsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPlanets }
}
const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList, renderName)),
    mapPlanetsMethodsToProps
)

const mapStarshipsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllStarships }
}
const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderModelAndName)),
    mapStarshipsMethodsToProps
)

export {
    PersonList,
    PlanetList,
    StarshipList
}