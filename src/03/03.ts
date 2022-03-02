import {StudentType} from '../02/02';
import {CityType, HouseType, Title2Type} from '../02/02_02';

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        nameTech: skill
    })
}

export const makeActive = (s: StudentType) => {
    s.isActive = true
}

export const liveInCity = (st: StudentType, city: string) => {
    return st.city.title === city
}

export const addMoneyToBudget = (building: Title2Type, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const fireStaff = (c: Title2Type, toFire: number) => {
    c.staffCount -= toFire;
}

export const hireStaff = (cit: Title2Type, toHire: number) => {
    cit.staffCount += toHire;
}

export const messageForCitizens = (props: CityType) => {
    //return "Hello " + props.title + " citizens. I want you to be happy. All " + props.citizensNumber;
    return `Hello ${props.title} citizens. I want you to be happy. All ${props.citizensNumber}`;
}