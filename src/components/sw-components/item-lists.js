import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService, compose, withChildFunction} from '../hoc-helpers';

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPeople }
};
const PersonList = compose(
    withSwapiService(mapPersonsMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const mapPlanetsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPlanets }
};
const PlanetList = compose(
    withSwapiService(mapPlanetsMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const mapStarshipsMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllStarships }
};
const StarshipList = compose(
    withSwapiService(mapStarshipsMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}