export type StreetType = {
    title: string
}

export type AddressType = {
    street: StreetType
}

export type Title2Type = {
    title: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type TitleType = {
    title: string
}

export type NumberType = {
    number: number
    street: TitleType
}

export type HouseType = {
    id?: number
    builtAt: number
    repaired: boolean
    address: NumberType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<Title2Type>
    citizensNumber: number
}