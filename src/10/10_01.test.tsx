import {
    addNewBook, addNewCompany,
    hairdresser,
    moveAddress, removeBook, updateBook, updateCompanyName, updateCompanyName2,
    upgradeHouse,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('Reference type test', () => {
    let user: UserType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const newHair = hairdresser(user, 2)

    expect(user.hair).toBe(32)
    expect(newHair.hair).toBe(16)
    expect(newHair.address).toBe(user.address)
})

test('Change address', () => {
    let user: UserWithLaptopType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const movedUser = moveAddress(user, "Moscow")

    expect(movedUser).not.toBe(user)
    expect(movedUser.address.city).toBe("Moscow")
    expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Moscow',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    })
    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    })
})

test('Upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const userWithUpgradedLaptop = upgradeLaptop(user, "Macbook")

    expect(user).not.toBe(userWithUpgradedLaptop)
    expect(userWithUpgradedLaptop.laptop.title).toBe("Macbook")
    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    })
    expect(userWithUpgradedLaptop).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Macbook"
        }
    })
})

test('Move user to another house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userWithChangedAddress = upgradeHouse(user, 50)

    expect(user).not.toBe(userWithChangedAddress)
    expect(user.laptop).toBe(userWithChangedAddress.laptop)
    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    })
    expect(userWithChangedAddress).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 50
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    })
})

test('Add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userWithAddedBook = addNewBook(user, ["redux", "rest api"])

    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    })
    expect(userWithAddedBook).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react", "redux", "rest api"]
    })
})

test('Update js to ts book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userWithUpdatedBook = updateBook(user, "js", "ts")

    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    })
    expect(userWithUpdatedBook).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "ts", "react"]
    })
})

test('Remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userWithRemovedBook = removeBook(user, "js")

    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "js", "react"]
    })
    expect(userWithRemovedBook).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        books: ["css", "html", "react"]
    })
})

test('Add a new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, company: "DT"}, {id: 2, company: "DNS"}]
    }

    const userWithAddedCompany = addNewCompany(user, {id: 3, company: "EPAM"})

    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, company: "DT"}, {id: 2, company: "DNS"}]
    })
    expect(userWithAddedCompany).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, company: "DT"}, {id: 2, company: "DNS"}, {id: 3, company: "EPAM"}]
    })
})

test('Update company name', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, company: "DTAS"}, {id: 2, company: "DNS"}]
    }

    const userWithUpdatedCompany = updateCompanyName(user, 1, "DT")

    expect(user).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, company: "DTAS"}, {id: 2, company: "DNS"}]
    })
    expect(userWithUpdatedCompany).toEqual({
        name: 'Anton',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: "Zenbook"
        },
        companies: [{id: 1, company: "DT"}, {id: 2, company: "DNS"}]
    })
    expect(user).not.toBe(userWithUpdatedCompany)
    expect(user.companies).not.toBe(userWithUpdatedCompany.companies)
})

test('Update company name. #2', () => {
    let companies = {
        "Anton" : [{id: 1, company: "DTAS"}, {id: 2, company: "DNS"}],
        "Roman" : [{id: 1, company: "DNS"}]
    }

    const userWithUpdatedCompany2 = updateCompanyName2(companies, "Anton", 1, "DT")

    expect(companies).toEqual({
        "Anton" : [{id: 1, company: "DTAS"}, {id: 2, company: "DNS"}],
        "Roman" : [{id: 1, company: "DNS"}]
    })
    expect(userWithUpdatedCompany2).toEqual({
        "Anton" : [{id: 1, company: "DT"}, {id: 2, company: "DNS"}],
        "Roman" : [{id: 1, company: "DNS"}]
    })
})