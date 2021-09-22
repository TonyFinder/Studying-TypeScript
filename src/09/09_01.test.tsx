function increaseAge(u: userPropsType) {
    u.age++
}

type userPropsType = {
    name: string
    age: number
    city: cityPropsType
}

type cityPropsType = {
    title: string
}

test('Reference type test 3. Object in Object', () => {

    const city: cityPropsType = {
        title: 'Minsk'
    }

    const user1: userPropsType = {
        name: 'Dimych',
        age: 32,
        city: city
    }

    const user2: userPropsType = {
        name: 'Igor',
        age: 35,
        city: city
    }

    const users = [user1, user2, {name: 'Vanya', age: 12, city: city}]
    const admins = [user1, user2]

    users[1].city.title = 'Kursk'

    expect(user1.city.title).toBe("Kursk")
    expect(admins[1].city.title).toBe("Kursk")
})

// Здесь типизацию нужно поменять, чтобы работали тесты. Изменил для работы с тестами выше
/*
test('Reference type test 2. Object in Object', () => {

    let city: cityPropsType = {
        title: "Minsk"
    }

    let user1: userPropsType = {
        name: 'Dimych',
        age: 32,
        city: city
    }

    let user2: userPropsType = {
        name: 'Igor',
        age: 35,
        city: city
    }

    city.title = "Moscow"

    expect(user1.city?.title).toBe("Moscow")
    expect(user1.city?.title).toBe(user2.city?.title)

})


test('Reference type test', () => {

    let user: userPropsType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user)

    let student = user
    student.age = 1000

    expect(user.age).toBe(1000)
})

test('Array test', () => {

    let users: userPropsType[] = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    let students = users

    students.push({name: "Victor", age: 14})

    expect(users[2]).toEqual({name: "Victor", age: 14})

})
*/

test('Copy array', () => {
    const letters = [ "b", "c", "a", "d"]
    passportist(letters)

    expect(letters).toEqual([ "b", "c", "a", "d"])

})

function passportist (arr: string[]) {
    const copyLetters = [...arr].sort()
}