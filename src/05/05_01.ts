export type peoplePropsType = {
    name: string
    age: number
}

export const people: Array<peoplePropsType> = [
    {name: 'Andrew Ivanov', age: 32},
    {name: 'Anton Rozdobudko', age: 20},
    {name: 'Alexey Grigoriev', age: 43}
]

const dimychTransformator = (man: peoplePropsType) => ({
    stack: ['css', 'html', 'js', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

// Делаем приветственное сообщение.

export const createGreetingMessages = (peop: Array<peoplePropsType>) => {
    return peop.map(h => `Привет, ${h.name.split(" ")[0]}! Добро пожаловать в инкубатор!`)
}