const comments = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        text
        : "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
]


const commentsSection = document.querySelector(".comments");

function displayComments(comments) {
    const comment = document.createElement("div");
    comment.classList.add("comment");
    commentsSection.appendChild(comment);

    const commentsImg = document.createElement("img");
    commentsImg.classList.add("comment__image");
    commentsImg.setAttribute("src", " ");
    commentsSection.appendChild(commentsImg);

    const commentSection = document.createElement("div");
    commentSection.classList.add("comment__section")
    commentsSection.appendChild(commentSection);

    const commentTitle = document.createElement("div");
    commentTitle.classList.add("comment__title");
    commentSection.appendChild(commentTitle);

    const commentName = document.createElement("p");
    commentName.classList.add("comment__name");
    commentName.innerText = comments.name;
    commentTitle.appendChild(commentName);

    const commentDate = document.createElement("p");
    commentDate.classList.add("comment__date");
    commentDate.innerText = comments.date;
    commentTitle.appendChild(commentDate);

    const commentBody =document.createElement("div");
    commentBody.classList.add("comment__body");
    commentSection.appendChild(commentBody);

    const commentText =document.createElement("p");
    commentText.innerText=comments.text;
    commentBody.appendChild(commentText);

    return comment;

};



function renderComments(){
    const commentsEl =document.querySelector(".comments");
    commentsEl.innerHTML="";

    comments.forEach((comment)=>{
        const commentCard=displayComments(comment);
        commentsEl.appendChild(commentCard);
    });    

}

function handleFormSubmit(e){
    e.preventDefault();

    const commentSubmission ={
        name: e.target.name.value,
        text: e.target.name.value,
        time: new Date().toLocaleDateString(),

    };

    comments.unshift(commentSubmission);
    renderComments();
}




// comments.forEach((comment)=>{
//     displayComments(comment);
// }
// )