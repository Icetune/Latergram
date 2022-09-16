function createAPost(post) {
    
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
                            Gefällt 28,010 Mal
                        </h3>

                        <span>
                            <p class="post-description">
                                <b>${post['username']}</b>
                                ${post['caption']}
                            </p>
                        </span>

                        <p class="post-all-comments">
                            Alle 193 Kommentare ansehen
                        </p>

                        <span>
                            <p class="post-upload">
                                GESTERN
                                <b class="post-translation">Übersetzung anzeigen</b>
                            </p>
                        </span>

                    </div>

                </div>

                <comment class="comment-container dpf">
                    <div class="comment-input-container dpf">
                        <img class="emoji-icon" src="icon/icons8-glücklich-32.png">
                        <input class="post-comment-input" type="text" placeholder="Kommentieren ...">
                    </div>
                    <p class="post-comment-btn">
                        Posten
                    </p>
                </comment>

            </post>

        <post>

    `;

}