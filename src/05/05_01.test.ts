import {createGreetingMessages, peoplePropsType} from './05_01';

let people: Array<peoplePropsType> = [];

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 32},
        {name: 'Anton Rozdobudko', age: 20},
        {name: 'Alexey Grigoriev', age: 43}
    ]
})

test ("should get array of greeting messages", () => {
    let messages = createGreetingMessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Привет, Andrew! Добро пожаловать в инкубатор!")
    expect(messages[1]).toBe("Привет, Anton! Добро пожаловать в инкубатор!")
    expect(messages[2]).toBe("Привет, Alexey! Добро пожаловать в инкубатор!")

})