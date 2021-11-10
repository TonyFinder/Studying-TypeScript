export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType = { id: number, company: string };
export type WithCompaniesType = {companies: Array<CompanyType>}

//Чистая фукнция - не изменяет исходный объект.
//Если не планируем менять что-то во вложенных объектах, то и глубокую копию их делать не имеет смысла.
export function hairdresser(u: UserType, power: number) {
    return {...u, hair: u.hair / 2}
}

export function moveAddress(u: UserWithLaptopType, newCity: string) {
    // Первый вариант изменения адреса
    /*let copy = {...u}
    copy.address = {...u.address, city: newCity}
    return copy*/

    // Второй вариант изменения адреса
    return {
        ...u,
        address: {
            ...u.address,
            city: newCity
        }
    }
}

export const upgradeLaptop = (user: UserWithLaptopType, laptop: string) => {
    return {
        ...user,
        laptop: {...user.laptop, title: laptop}
    }
}
export const upgradeHouse = (user: UserWithLaptopType & UserWithBooksType, newHouse: number) => {
    return {...user, address: {...user.address, house: newHouse}}
}
export const addNewBook = (user: UserWithLaptopType & UserWithBooksType, newBooks: string[]) => {
    return {
        ...user,
        books: [...user.books, ...newBooks]
    }
}
export const updateBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    // Первый вариант
    /*const newUser = {...user,
        books: [...user.books]
    }
    newUser.books[newUser.books.indexOf(oldBook)] = newBook
    return newUser*/

    // Второй вариант. Map возвращает новый массив, поэтому ... не нужны.
    return {
        ...user,
        books: user.books.map(m => m === oldBook ? newBook : m)
    }
}
export const removeBook = (user: UserWithLaptopType & UserWithBooksType, removedBook: string) => ({
    ...user,
    books: user.books.filter(f => f !== removedBook)
})
export const addNewCompany = (user: UserWithLaptopType & WithCompaniesType, newCompany: {id: number, company: string}) => ({
    ...user,
    companies: [...user.companies, newCompany]
})
export const updateCompanyName = (user: WithCompaniesType, incorrectId: number, correctName: string) => ({
    ...user,
    companies: user.companies.map(m => m.id === incorrectId ? {...m, company: correctName} : m)
})

// Пример типизации и работы с ассоциативным массивом
export const updateCompanyName2 = (companies: {[key: string]: Array<CompanyType>}, name: string, id: number, correctName: string) => {
    const newCompanies = {...companies}
    newCompanies[name] = newCompanies[name].map(m => m.id === id ? {...m, company: correctName} : m)
    return newCompanies
}