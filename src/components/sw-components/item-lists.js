import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

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
const PersonList = withData(withChildFunction(ItemList, renderName), swapiService.getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderName), swapiService.getAllStarships);
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), swapiService.getAllStarships);
export {
    PersonList,
    PlanetList,
    StarshipList
}