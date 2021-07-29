import { CityType } from "../02/02_02";
import {addMoneyToBudget, fireStaff, hireStaff, messageForCitizens, repairHouse} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                builtAt: 2012, repaired: false, address:
                    {
                        number: 100, street: {
                            title: "White street"
                        }
                    }
            },
            {
                builtAt: 2008, repaired: false, address:
                    {
                        number: 100, street: {
                            title: "Happy street"
                        }
                    }
            },
            {
                builtAt: 2020, repaired: false, address:
                    {
                        number: 101, street: {
                            title: "Happy street"
                        }
                    }
            }
        ],
        governmentBuildings: [
            {
                title: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                title: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('Staff have to be fired', () => {
    fireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('Staff have to be hires', () => {
    hireStaff(city.governmentBuildings[0], 50)
    expect(city.governmentBuildings[0].staffCount).toBe(250)
})

test("Greetings message should be correct for city", () => {
    const message = messageForCitizens(city);
    expect(message).toBe("Hello New York citizens. I want you to be happy. All 1000000")
})