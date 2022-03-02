console.log('14 lesson. Promise')
// #1
// const promiseResolved = Promise.resolve("I was resolved")
// const promiseRejected = Promise.reject("I was rejected")
//
// promiseResolved
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//
// promiseRejected
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

// #2
//     const API = {
//         getPromise() {
//             return Promise.resolve([{name: 'Anna'}, {name: 'Anton'}])
//         },
//         tryLogin(login: string, password: string) {
//             return login === '123' && password === '123'
//                 ? Promise.resolve({name: 'Tony', age: 23})
//                 : Promise.reject({message: 'Login or Password is not correct. Please try again'})
//         }
//     }
//
//     API.getPromise()
//         .then(data => {
//             console.log(data.map(m => m.name))
//         })
//
//     API.tryLogin('123', '123')
//         .then(data => console.log(data))
//         .catch(err => console.warn(err.message))

// #3. Промисификация

//1
/*function getRandom () {
    return Promise.resolve(Math.random())
}*/

//2
/*function getRandom () {
    return new Promise((resolve, reject) => {
        resolve(Math.random())
    })
}*/

//3 Два примера, захотел в одну строчку сделать))
/*function getRandom () {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(Math.random())
        },2000)
    })
    return promise
}*/

const getRandom = () => new Promise((res, rej) => setTimeout(() => res(Math.random()), 2000))

getRandom().then(res => console.log(res))
getRandom().then(res => console.log(res))



export default ()=>{}