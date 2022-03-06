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

/*const getRandom = () => new Promise((res, rej) => setTimeout(() => res(Math.random()), 2000))

getRandom().then(res => console.log(res))
getRandom().then(res => console.log(res))*/

// #4. Примеры с Local storage

//1. Синхронный код

/*const localActions = {
    save(data: string) {
        try {
            localStorage.setItem('init-info', data)
        } catch(err) {
            return false
        }
        return true
    }
}
localActions.save("Anton") ? console.log("Saved") : console.warn("Not saved")*/

//2. Синхронный код + Асинхронный

/*const localActions = {
    save(data: string) {
        try {
            localStorage.setItem('init-info', data)
        } catch (err) {
            return false
        }
        return true
    },
    saveAsync(data: string) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem('init-info', data)
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }
}

localActions.saveAsync("Anton using async")
    .then(response => console.log("Saved", response))
    .catch(err => console.warn("Not saved", err))*/

//3. Синхронный код + Асинхронный c async / await

/*
const localActions = {
    save(data: string) {
        try {
            localStorage.setItem('init-info', data)
        } catch (err) {
            return false
        }
        return true
    },
    saveAsync(data: string) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem('init-info', data)
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    }
}

const run = async () => {
    await localActions.saveAsync("Anton with async")
    console.log("Saved again")
}
run()
*/

//4. Синхронный код + Асинхронный c async / await. Добавляем чтение данных

/*const localActions = {
    save(data: string) {
        try {
            localStorage.setItem('init-info', data)
        } catch (err) {
            return false
        }
        return true
    },
    saveAsync(data: string) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem('init-info', data)
                resolve(true)
            } catch (err) {
                reject(err)
            }
        })
    },
    readAsync() {
        return new Promise(((resolve, reject) => {
            localStorage.getItem('init-info')
                ? resolve(localStorage.getItem('init-info'))
                : resolve(null)
        }))
    }
}

const run = async () => {
    await localActions.saveAsync('Anton with async')
    console.log('Saved again')
    const data = await localActions.readAsync()
    console.log(data)
}
run()*/

//5. Синхронный код + Асинхронный c async / await. Таймер, чтобы показывал через секунду 1,2,3..

//Мой код
/*const num = 1

const localActions = {
    timer(num: number) {
        if (num < 6) {
            setTimeout(() => {
                console.log(num)
                num++
                run(num)
            }, 1000)
        } else return
    }
}

const run = (num: number) => {
    localActions.timer(num)
}
run(num)*/

//С урока

/*const wait = (ms: number) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(true)
        }, ms)
    })
}

const run = async () => {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}
run()*/

//6. Задачка

const api = {
    save() {

    },
    read() {
        return Promise.resolve({name: "Anton's read message"})
    }
}

const run = async () => {
    await api.save()
    console.log("I was saved")
    let reading = await api.read()
    console.log(reading)
}
run()

























export default () => {
}