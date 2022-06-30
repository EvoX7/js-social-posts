const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://i.imgflip.com/6lc49z.jpg",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked": true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked": false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked": true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked": false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "is_liked": false,
        "created": "2022-03-05"

    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
        "is_liked": true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
        "is_liked": false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80",
        "author": {
            "name": "Mario Di Nio",
            "image": "null"
        },
        "likes": 95,
        "is_liked": true,
        "created": "2021-12-11"
    }
];

// * Output HTML

const outputHtml = document.getElementById('output-post');

let isLiked = false;

// ? Creating a loop to generate a post
for (let i = 0; i < posts.length; i++) {
    const visualPosts = posts[i];
    console.log("Post id " + `${visualPosts.id}`);
    


 // !Formatting date 
 let date = new Date();
 let dateString = date.toLocaleString("it-IT", {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    });
    console.log(dateString);

 dateString = `${dateString}`;
 

    //* Creating a new (div) element
    
    const newPost = document.createElement('div');
    newPost.innerHTML =
        `<div class="post">
                <div class="post__header">
                    <div class="post-meta">
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${visualPosts.author['image']}" alt="${visualPosts.author['name']}">
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${visualPosts.author['name']}</div>
                            <div class="post-meta__time">${dateString}</div>
                        </div>
                    </div>
                </div>
                <div class="post__text">${visualPosts.content}</div>
                <div class="post__image">
                    <img src="${visualPosts.media}" alt="image">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="/#" data-postid="${visualPosts.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${visualPosts.likes}</b> persone
                        </div>
                    </div>
                </div>
            </div>`;
    outputHtml.append(newPost);
}

//? Selecting like buttons 

const likesBtn = document.querySelectorAll('.like-button');
let postLikes = document.querySelectorAll('.js-likes-counter');

for (let i = 0; i < likesBtn.length; i++) {
    likesBtn[i].addEventListener('click', function () {

        if (isLiked === false) {
            likesBtn[i].classList.add('like-button--liked');
            postLikes[i].innerHTML = (Number(postLikes[i].innerHTML) + 1);

        } else

            if (isLiked === true) {
                likesBtn[i].classList.remove('like-button--liked');
                postLikes[i].innerHTML = (Number(postLikes[i].innerHTML) - 1);

            
            }
    }
    );
}
























