/*class DeleteUserAction {
    constructor(userID) {
        this.type = "DELETE_USER"
        this.payload = {user: userID}
    }
}

const action = new DeleteUserAction("777")

console.log(action)*/

class CreateUserAction {
    constructor(user, site, birthday) {
        this.name = user
        this.site = site
        this.birthday = birthday
    }
    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const user1 = new CreateUserAction("Anton", "IT-Incubator", new Date())
const user2 = new CreateUserAction("Anna", "pedicure-cabinet", new Date())

user1.hello()
user2.hello()