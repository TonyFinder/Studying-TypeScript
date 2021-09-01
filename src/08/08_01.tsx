export const usersObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}

type usersType = {
    [key: string]: {id: number, name: string}
}

export const users: usersType = {
    "101": {id: 101, name: "Dimych"},
    "3232312": {id: 3232312, name: "Natasha"},
    "1212": {id: 1212, name: "Valera"},
    "1": {id: 1, name: "Katya"}
}

let user = { id: 100500, name: "Igor"}

// Пример доставания из ассоциативного массива
// users[1]
// Пример добавления в асс массив
//users[user.id] = user
// Пример удаления в асс массив
//delete users[user.id]

export const usersArray = [
    { id: 181, name: "Dimych"},
    { id: 3232312, name: "Natasha"},
    { id: 1212, name: "Valera"},
    { id: 1, name: "Katya"}
]

// Пример доставания из массива
// usersArray.find( u => u.id === 1)
// Пример добавления в массив
//var userCopy = [...usersArray.filter(), user]
// Пример удаления в массиве
//var usersArray = usersArray.filter( u => u.id !== user.id)