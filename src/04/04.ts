const ages = [31, 3, 100, 42, 54, 23];

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100];

type coursesPropsType = {
    title: string,
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]

const cheapPredicate = (courses: coursesPropsType) => {
    return courses.price < 160;
}