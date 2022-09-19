function createAPost(post, randomLikes, randomComments) {
    
    document.getElementById('all-posts').innerHTML += `

        <post>

            <post-head class="post-head dpf">

                <div class="post-profile dpf">

                    <div class="post-profile-pic-outline dpf">
                        <img class="post-profile-pic" src="${post['profilePic']}">
                    </div>

                    <h3 class="post-username">${post['username']}</h3>

                </div>
                <img class="post-settings" src="icon/icons8-mehr-32.png">
            
            </post-head>

            <img class="post-img" src="${post['image']}">

            <div class="post-caption dpf">

                <div class="post-caption-margin dpf">

                    <div class="post-icons dpf">

                        <div>
                            <img class="post-single-icon" src="icon/icons8-herzen-32.png">
                            <img class="post-single-icon" src="icon/icons8-sprechblase-32.png">
                            <img class="post-single-icon" src="icon/icons8-in-meiner-nähe-32.png">
                        </div>
                        <img class="post-single-icon" src="icon/icons8-lesezeichen-32.png">

                    </div>

                    <h3 class="post-likes">
                        Gefällt ${randomLikes} Mal
                    </h3>

                    <span>
                        <p class="post-description">
                            <b>${post['username']}</b>
                            ${post['caption']}
                        </p>
                    </span>

                    <p class="post-all-comments">
                        Alle ${randomComments} Kommentare ansehen
                    </p>

                    <span id="add-comment" class="whole-comment dpf">
                    </span>

                    <span>
                        <p class="post-upload">
                            GESTERN
                            <b class="post-translation">Übersetzung anzeigen</b>
                        </p>
                    </span>

                </div>

            </div>

            <form class="comment-container dpf" onsubmit="createAComment(); return false;">
                <div class="comment-input-container dpf">
                    <img class="emoji-icon" src="icon/icons8-glücklich-32.png">
                    <input required id="comment" class="post-comment-input" type="text" placeholder="Kommentieren ..." required>
                </div>
                <input value="Posten" type="submit" class="post-comment-btn">
            </form>

            

        <post>

    `;

}



function createOneStory(post) {

    document.getElementById('all-stories').innerHTML += `
    
    <story class="story dpf">
        <div class="story-profile-pic-outline dpf">
            <img class="story-profile-pic" src="${post['profilePic']}">
        </div>
        <p class="story-profile-name">${post['username']}</p>
    </story>
    
    `;

}



function createASuggestion(post) {

    document.getElementById('sugesstions').innerHTML += `
    
    <div class="logged-in-profile dpf">

        <div class="logged-in-left dpf">

            <img class="logged-in-stranger-profile-pic" src="${post['profilePic']}">

            <div>
                <p class="logged-in-username">${post['username']}</p>
                <p class="logged-in-real-name">${post['name']}</p>
            </div>

        </div>

        <p class="logged-in-change-follow-btn">Folgen</p>

    </div>
    
    `;

}



function createLoggedInUser() {

    const post = posts[0];

    document.getElementById('looged-in-user').innerHTML = `
    
    <img class="logged-in-profile-pic" src="${post['profilePic']}">

    <div>
        <p class="logged-in-username">${post['username']}</p>
        <p class="logged-in-real-name">${post['name']}</p>
    </div>
    
    `;

}