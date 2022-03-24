/*const deleteUserAC = (userID) => {
    const action = {
        type: "DELETE_USER",
        payload: {
            user: userID
        }
    }
    return action

const action1 = deleteUserAC("11111")
const action2 = deleteUserAC("22222")

console.log(action1)
console.log(action2)
}*/

function helloWorld() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const deleteUser = (name) => {
    const user = {
        name: name,
        site: 'IT-Incubator',
        birthday: new Date(),
        hello: helloWorld
    }
    return user
}


const user1 = deleteUser('Anton')
const user2 = deleteUser('Anna')

user1.hello()