export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    city: CityType
    technologies: Array<TechType>
}

type CityType = {
    title: string
    country: string
}

type TechType = {
    id: number
    nameTech: string
}

export const student: StudentType = {
    id: 1,
    name: "Victor",
    age: 42,
    isActive: false,
    city: {
        title: "Minsk",
        country: "Belarus"
    },
    technologies: [
        {
            id: 1,
            nameTech: "CSS"
        },
        {
            id: 2,
            nameTech: "JS"
        }
    ]
}
