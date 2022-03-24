/*
function DeleteUserAction(userID) {
    this.type = "DELETE_USER"
    this.payload = {user: userID}
}

const action = new DeleteUserAction("999")

console.log(action)*/

function CreateUserAction(user, site, birthday) {
    this.name = user
    this.site = site
    this.birthday = birthday
}

CreateUserAction.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const user1 = new CreateUserAction("Anton", "IT-Incubator", new Date())
const user2 = new CreateUserAction("Anna", "pedicure-cabinet", new Date())

user1.hello()
user2.hello()