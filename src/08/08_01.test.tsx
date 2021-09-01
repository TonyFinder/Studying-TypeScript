type usersType = {
    [key: string]: {id: number, name: string}
}

let users: usersType

beforeEach( () => {
    users = {
        "101": {id: 101, name: "Dimych"},
        "3232312": {id: 3232312, name: "Natasha"},
        "1212": {id: 1212, name: "Valera"},
        "1": {id: 1, name: "Katya"}
    }
})

test('Check updates in Array', () => {
    users["1"].name = "Ekaterina"

    expect(users['1'].name).toBe("Ekaterina")
    expect(users["1"]).toEqual({id: 1, name: "Ekaterina"})
})

test('Check if element had been deleted', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})