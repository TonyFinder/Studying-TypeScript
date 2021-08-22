import {CityType, HouseType} from '../02/02_02';

export const titlesOfBuildings = (list: CityType) => {
    return list.governmentBuildings.map(h => h.address.street.title)
}

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    let callbackfn = (h: HouseType) => `Hello guys from ${h.address.street.title}`;
    return houses.map(callbackfn)
}