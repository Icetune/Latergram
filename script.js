let posts = [

    {
        'username': 'Icetune',
        'image': 'img/post/pexels-polina-chistyakova-13421007.jpg',
        'caption': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        'profilePic': 'img/profile/Steven.PNG'
    },
    {
        'username': 'username1',
        'image': 'img/post/pexels-aubin-kirch-13406218.jpg',
        'caption': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        'profilePic': 'img/profile/pexels-andrea-piacquadio-774909.jpg'
    },
    {
        'username': 'username2',
        'image': 'img/post/pexels-blue-arauz-13527050.jpg',
        'caption': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        'profilePic': 'img/profile/pexels-andrew-personal-training-697509.jpg'
    },
    {
        'username': 'username3',
        'image': 'img/post/pexels-eberhard-grossgasteiger-12527034.jpg',
        'caption': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        'profilePic': 'img/profile/pexels-juliana-stein-1898555.jpg'
    },
    {
        'username': 'username4',
        'image': 'img/post/pexels-lucas-andreatta-13348025.jpg',
        'caption': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        'profilePic': 'img/profile/pexels-pixabay-220453.jpg'
    },
    {
        'username': 'username5',
        'image': 'img/post/pexels-mati-mango-5215483.jpg',
        'caption': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
        'profilePic': 'img/profile/pexels-pixabay-415829.jpg'
    },

];



function show() {

    document.getElementById('all-posts').innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const post = posts[i];

        createAPost(post);
        
    }
}


