const profielKenmerken = {
    EmailAdress: 'Sulaiman@gmail.com',
    UserName: 'SulaimanROC',
    BirthDate: '2005 27 september',
    ProfilePicture: 'empty',
    Biografy: 'I live in the Hague and go to ROC mondriaan following the software development study.',
    Projects: 'Hoger lager, Boter Kaas eieren, web catalogus',
    Study: 'Software Development',
    Abilities: 'Coding, reading and fluent in english',
    Banner: 'black',
    SocialMedia: 'Instagram: Sulaiman, Twitter: Sulaiman123'
};

for (key in profielKenmerken) {
    console.log(key);
    console.log(profielKenmerken[key]);
}




fetch("../data/aboutme.json")
    .then(myData => myData.json())
    .then(jsonData => showinWebpage(jsonData));

function showinWebpage(jsonData) {
    const name1 = document.querySelector('.name')
    const SchoolEmail = document.querySelector('.SchoolMail')
    const PersonalEmail = document.querySelector('.PersonalMail')
    const PhoneNumber = document.querySelector('.PhoneNumber')

    console.log(jsonData);
    name1.innerText = jsonData.age
    SchoolEmail.innerText = jsonData.SchoolEmail
    PersonalEmail.innerText = jsonData.PersonalEmail
    PhoneNumber.innerHTML = jsonData.PhoneNumber
}


