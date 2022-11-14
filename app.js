
const profiles = [
    {
        username: "LebronJames6",
        image: "lebron-profile-img.png",
        upload: "lebron-post.jpg",
        comment: "Get Dunked On!",
        dots: 123,
        dotsClicked: false
    },
    {
        username: "RonaldoSui7",
        image: "ronaldo-profile-img.png",
        upload: "ronaldo-post.jpg",
        comment: "Suiiii",
        dots: 421,
        dotsClicked: false
    }
]

document.addEventListener("click", function(e) {
    
    if(e.target.dataset.dots) {
        dotsClicked = !dotsClicked;
        render()
    }


})


function getHtmlFeed() {
    let htmlString = ''

    profiles.forEach(function(post) {

        let dotChangeColor = ''
        if (post.dotsClicked) {
            dotChangeColor = "grey"
        }

        htmlString += `
        <div class="feed-top">
            <div class="feed-profile-desc">
                <img class="feed-profile-img" src="img\\${post.image}">
                <p class="feed-profile-username">${post.username}</p>
            </div>
            <i class="fa-solid fa-ellipsis ${dotChangeColor}" data-dots="${post.dots}"></i>
        </div>
        <div class="feed-post">
            <img src="img\\${post.upload}">
            <p>${post.username} ${post.comment}</p>
        </div>`
    
    })

    console.log(htmlString)
    return htmlString
}

function render() {
    document.getElementById('feed').innerHTML = getHtmlFeed()
}

render()