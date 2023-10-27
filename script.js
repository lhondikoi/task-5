// Question 1

let user = {
    firstName: "John",
    lastName: "Allen",
    age: 27,
    occupation: "Investment Banker",
    address: "No. 3, Downtown Avenue, Washington DC"
}

let userKeys = Object.keys(user)

for (let i=0; i<userKeys.length; i++) {
    console.log(user[userKeys[i]])
}

for (let key in user) {
    console.log(user[key])
}

for (let key of Object.keys(user)) {
    console.log(user[key])
}

userKeys.forEach(key=>console.log(user[key]))


// Question 2

let myResume = {
    name: "Laxminandan Handique",
    contact: {
        email: "l.hondikoi@gmail.com",
        address: "Dibrugarh, Assam, India",
        mobile: "+91-8761076132",
        linkedin: "http://www.linkedin.com/in/laxminandan-handique",
        github: "https://github.com/lhondikoi"
    },
    qualifications: [
        {
            'qualification': "BS in Data Science & Applications (Diploma in Programming)",
            'institution': "IIT Madras",
            'year_of_passing': 2022,
            'cgpa': 8.9
        },
        {
            'qualification': "BS in Data Science & Applications (Foundational)",
            'institution': "IIT Madras",
            'year_of_passing': 2022,
            'cgpa': 8.8
        },
        {
            'qualification': "BSc in Chemistry",
            'institution': "DHSK College",
            'year_of_passing': 2019,
            'division': 'First'
        },
    ],
    relevant_skills: [
        {
            languages: ["Python", "JavaScript", "SQL"],
            frameworks: ["Flask", "Vue.js"],
            other: ["OpenAPI", "Bash scripting"]
        }
    ],
    projects: [
        {
            name: "MyKanban",
            description: "A full stack kanban application with API using Flask, SQLite & Bootstrap as part of the Modern Application Development-I in 2nd year of BS in Data Science & Applications programme.",
            grade: "S",
            score: "94.5"
        },
        {
            name: "MyKanbanV2",
            description: "A full stack kanban application with backend API built using Flask-RESTful, SQLite as the database, and VueJS for the frontend as part of the Modern Application Development-II in 2nd year of BS in Data Science & Applications programme.",
            grade: "S",
            score: "90.0"
        }
    ],
    work_experience: [
        {
            designation: "Microsoft Azure Community Mentor",
            description: "Guided peer students in taking Microsoft Azure Fundamental Certifications like AZ-900, DP900 etc.",
            duration: "March 2023 - June 2023"
        },
        {
            designation: "Teaching Assistant",
            description: "Teaching Assistant for Modern Application Development I course of the BS in Data Science & Applications programme.",
            duration: "September 2022 - December 2022"
        },
    ],
    certifications: ['AZ900', 'DP900', 'SC900', 'AI900', 'PL900', 'MS900', 'MB920']
}