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
    // const name1 = document.querySelector('.name')
    // const SchoolEmail = document.querySelector('.SchoolMail')
    // const PersonalEmail = document.querySelector('.PersonalMail')
    // const PhoneNumber = document.querySelector('.PhoneNumber')


    const aboutMeElem = document.querySelector('.about-me');
    aboutMeElem.innerHTML += createTableFromObject(jsonData.info);

    const contactElem = document.querySelector('.contact');
    contactElem.innerHTML += createTableFromObject(jsonData.contact);

    // console.log(jsonData);
    // name1.innerText = jsonData.age
    // SchoolEmail.innerText = jsonData.SchoolEmail
    // PersonalEmail.innerText = jsonData.PersonalEmail
    // PhoneNumber.innerHTML = jsonData.PhoneNumber
}


function createTableFromObject(obj) {

    let html = '\
        <table class="table-responsive">\
            <tbody>\
    ';
    for (key in obj) {
        html += `                 
            <tr class="">
                <td>${key}:</td>
                <td>${obj[key]}</td>
            </tr>
            
      `;        
    }
    html += ' </tbody></table>';
    return html;
}