const resumeData = {
    name: "John Doe",
    linkedinId: "Your LinkedIn Id",
    address: "123 Main Street, Anytown, CA 12345",
    phone: "123-456-7890",
    email: "john.doe@abc.com",
    role: "Full Stack Developer",
    roleDescription: "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",
    education: [
        {
            schoolName: "University of Colorado Boulder",
            specialization: "Bachelor of Science in Computer Science",
            monthOfPassing: "May",
            yearOfPassing: "2013",
            achievements: "Some Achievements"
        },
        {
            schoolName: "University of Colorado Boulder",
            specialization: "Masters of Science in Computer Science",
            monthOfPassing: "May",
            yearOfPassing: "2017",
            achievements: "Some Achievements"
        }],
    work: [{
        companyName: "ABC Company",
        role: "Software Engineer",
        summary: "Some summary ABC",
        monthOfStarting: "Jan",
        yearOfStarting: "2013",
        monthOfLeaving: "Jan",
        yearOfLeaving: "2014",
        achievements: "Some Achievements",
        presentEmployer: false

    },
    {
        companyName: "DEF Company",
        role: "Software Engineer",
        summary: "Some summary DEF",
        monthOfStarting: "Feb",
        yearOfStarting: "2014",
        monthOfLeaving: "",
        yearOfLeaving: "",
        achievements: "Some Achievements",
        presentEmployer: true
    }],
    skills: [
        { skillname: "HTML5", yearsOfExperience: 2 },
        { skillname: "CSS", yearsOfExperience: 2 },
        { skillname: "Reactjs", yearsOfExperience: 1 }],
    references: [
        { name: "Larry Jones", description: "Friend", email: "abc@def.com", phone: "123-456-7890" },
        { name: "Tony Smith", description: "Supervisor", email: "zzz@def.com", phone: "123-555-8888" }
    ]
}

export default resumeData;