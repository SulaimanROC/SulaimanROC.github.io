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
};




fetch("../data/aboutme.json")
.then(myData => myData.json())
.then(jsonData => ShowinWebpage(jsonData));

function ShowinWebpage(jsonData) {
    const name1 = document.querySelector('.name')

    console.log(jsonData);
    name1.innerText = jsonData.age



}


