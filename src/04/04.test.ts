test ("Selection of men who is older 90", () => {
    const ages = [31, 3, 100, 42, 54, 23];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test ("Selection of courses less then 160", () => {

    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]

    const cheapCourses = courses.filter(courses => courses.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("REACT");
})

test ("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sugar', isDone: false},
        {id: 4, title: 'Water', isDone: true},
    ]

    const completedTasks = tasks.filter( task => task.isDone );

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[1].title).toBe("Water");
})

test ("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sugar', isDone: false},
        {id: 4, title: 'Water', isDone: true},
    ]

    const unCompletedTasks = tasks.filter( task => !task.isDone );

    expect(unCompletedTasks.length).toBe(2);
    expect(unCompletedTasks[0].title).toBe("Bread");
})