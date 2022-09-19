let posts = [

    {
        'name': 'Steven Munk',
        'username': 'Icetune',
        'image': 'img/post/pexels-polina-chistyakova-13421007.jpg',
        'caption': 'Ignoriert man den Mercedes auf der linken Seite des Bildes, oder schneidet ihn mittels PS aus dem Bild raus, könnt man denken dass das ein sehr hoch aufgelöstes Bild aus RDR2 ist :D',
        'profilePic': 'img/profile/Steven.PNG'
    },
    {
        'name': 'Sandra Armani',
        'username': 'Sandra3105',
        'image': 'img/post/pexels-aubin-kirch-13406218.jpg',
        'caption': 'Hallo meine Lieben :) Ihr wisst ja ich werde demnächst aufs Land ziehen und werde mein Fahrrad nicht mehr brauchen, bei Intresse bitte melden. Das Fahrrad steht zum Verkauf!',
        'profilePic': 'img/profile/pexels-andrea-piacquadio-774909.jpg'
    },
    {
        'name': 'Philipp Bruns',
        'username': 'Einfach_Phil',
        'image': 'img/post/pexels-blue-arauz-13527050.jpg',
        'caption': 'Heute einen erfolgreichen Geschäftstag im Theather in Chicago gehabt, um was es ging? Dazu mehr in ein paar Wochen wenn das Ding steht!',
        'profilePic': 'img/profile/pexels-andrew-personal-training-697509.jpg'
    },
    {
        'name': 'Josefine Rolof',
        'username': 'Josieeeeee',
        'image': 'img/post/pexels-eberhard-grossgasteiger-12527034.jpg',
        'caption': 'Ich habe gehört in diesem Haus soll Batman wohnen?! Kleiner Spas am Rande, aber mal ernsthaft, IST DAS NICHT EIN HAMMER BILD OMG!!!',
        'profilePic': 'img/profile/pexels-juliana-stein-1898555.jpg'
    },
    {
        'name': 'Thomas Murr',
        'username': 'Xx_Thomas_xX',
        'image': 'img/post/pexels-lucas-andreatta-13348025.jpg',
        'caption': '"Strand an, Kopf aus..." - Ich selber.  Es ist schön für ein paar Tage aus dem Alltagsstress rauszukommen und den kantigen Verstand durch das glättende Wasser zu ziehen...',
        'profilePic': 'img/profile/pexels-pixabay-220453.jpg'
    },
    {
        'name': 'Tara Schwarz',
        'username': 'Tara0101',
        'image': 'img/post/pexels-mati-mango-5215483.jpg',
        'caption': 'Ich liebe Flugzeuge ja und heute, JA HEUTE, habe ich das legendäre Flugzeug von Captain Balu zu sehen bekommen!!! Balu und seine Crew!!!',
        'profilePic': 'img/profile/pexels-pixabay-415829.jpg'
    },

];



function renderPage() {

    document.getElementById('all-posts').innerHTML = '';
    document.getElementById('all-stories').innerHTML = '';
    document.getElementById('sugesstions').innerHTML = '';
    document.getElementById('looged-in-user').innerHTML = '';

    postNumber = 0;

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        let randomLikes = Math.floor(Math.random() * 1000);
        let randomComments = Math.floor(Math.random() * 500);

        createOneStory(post);
        createAPost(post, randomLikes, randomComments, postNumber);

        postNumber++;
        
    }

    createLoggedInUser();

    for (let i = 1; i < posts.length; i++) {
        const post = posts[i];

        createASuggestion(post);
        
    }

}



function createAComment(postNumber) {

    let x = document.getElementById(`comment${postNumber}`).value;

    document.getElementById(`add-comment${postNumber}`).innerHTML += `
    
    <div class="comment-space-b dpf">
    <p class="comment-text"><b class="comment-username">Du </b>
    ${x}</p>

    <img class="little-like" src="icon/icons8-herzen-32.png">
    </div>
    
    `;

}