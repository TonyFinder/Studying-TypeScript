import {StudentType} from "../02/02";
import {addSkill, liveInCity, makeActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Victor",
        age: 42,
        isActive: false,
        city: {
            title: "Minsk",
            country: "Belarus"
        },
        technologies: [
            {
                id: 1,
                nameTech: "CSS"
            },
            {
                id: 2,
                nameTech: "JS"
            }
        ]
    }
})

test('New skill should be added', () => {
    expect(student.technologies.length).toBe(2)
    addSkill(student, "React")
    expect(student.technologies.length).toBe(3)
    expect(student.technologies[2].nameTech).toBe("React")
    expect(student.technologies[2].id).toBeDefined()
})

test('Make student Active', () => {
    expect(student.isActive).toBe(false)
    makeActive(student)
    expect(student.isActive).toBe(true)
})

test('Does student live in city', () => {
    let result1 = liveInCity(student, "Moscow")
    let result2 = liveInCity(student, "Minsk")
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})