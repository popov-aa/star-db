import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const PersonList = withData(ItemList, swapiService.getAllPeople);
const PlanetList = withData(ItemList, swapiService.getAllStarships);
const StarshipList = withData(ItemList, swapiService.getAllStarships);
export {
    PersonList,
    PlanetList,
    StarshipList
}