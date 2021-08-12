import {CityType, Title2Type} from '../02/02_02';

export const demolishHousedOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => !(h.address.street.title === street))
}

export function getBuildingsWithStaffCountGreaterThen(arr: Array<Title2Type>, num: number) {
    return arr.filter(h => h.staffCount > num);
}
