const link = "https://project-1-api.herokuapp.com/comments/?api_key=8aea4b4e-d06b-4881-8fad-48c753b022f1";

const commentsSection = document.querySelector(".postSection");

function displayComments(comments) {
  commentsSection.innerHTML = "";

  comments.sort((a, b) => b.timestamp - a.timestamp);

  comments.forEach(post => {
    const name = post.name;
    const body = post.comment;
    const timestamp = post.timestamp;

    const commentCard = document.createElement("div");
    commentCard.classList.add("post");
    commentsSection.appendChild(commentCard);

    const commentsImg = document.createElement("img");
    commentsImg.classList.add("post__image");
    commentsImg.setAttribute("src", "");
    commentCard.appendChild(commentsImg);

    const commentSection = document.createElement("div");
    commentSection.classList.add("post__text");
    commentCard.appendChild(commentSection);

    const commentTitle = document.createElement("div");
    commentTitle.classList.add("post__title");
    commentSection.appendChild(commentTitle);

    const commentName = document.createElement("p");
    commentName.classList.add("post__name");
    commentName.textContent = name;
    commentTitle.appendChild(commentName);

    const commentDate = document.createElement("p");
    commentDate.classList.add("post__date");
    commentDate.textContent = new Date(timestamp).toLocaleString();
    commentTitle.appendChild(commentDate);

    const commentBody = document.createElement("div");
    commentBody.classList.add("post__body");
    commentSection.appendChild(commentBody);

    const commentText = document.createElement("p");
    commentText.textContent = body;
    commentText.classList.add("post__body-text");
    commentBody.appendChild(commentText);
  });
}

axios.get(link)
  .then(response => {
    const data = response.data;
    displayComments(data);
  })
  .catch(error => console.error(error));

const form = document.querySelector(".form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const nameInput = document.querySelector(".form__info-container-name--input");
  const commentInput = document.querySelector(".form__info-container-comment--textarea");
  const newName = nameInput.value;
  const newComment = commentInput.value;

  if (newName === "" || newComment === "") {
    alert("Please enter your name and comment.");
    return;
  }

  const requestBody = {
    name: newName,
    comment: newComment
  };

  axios.post(link, requestBody)
    .then(response => {
      axios.get(link)
        .then(response => {
          const data = response.data;
          displayComments(data);
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));

  nameInput.value = "";
  commentInput.value = "";
});
// const link = "https://project-1-api.herokuapp.com/comments/?api_key=8aea4b4e-d06b-4881-8fad-48c753b022f1";

// const commentsSection = document.querySelector(".postSection");
// function displayComments(comments) {

//   commentsSection.innerHTML = "";

//   comments.sort((a, b) => b.timestamp - a.timestamp);

//   comments.forEach(post => {
//     const name = post.name;
//     const body = post.comment;
//     const timestamp = post.timestamp;

//     const commentCard = document.createElement("div");
//     commentCard.classList.add("post");
//     commentsSection.appendChild(commentCard);

//     const commentsImg = document.createElement("img");
//     commentsImg.classList.add("post__image");
//     commentsImg.setAttribute("src", "");
//     commentCard.appendChild(commentsImg);

//     const commentSection = document.createElement("div");
//     commentSection.classList.add("post__text");
//     commentCard.appendChild(commentSection);

//     const commentTitle = document.createElement("div");
//     commentTitle.classList.add("post__title");
//     commentSection.appendChild(commentTitle);

//     const commentName = document.createElement("p");
//     commentName.classList.add("post__name");
//     commentName.textContent = name;
//     commentTitle.appendChild(commentName);

//     const commentDate = document.createElement("p");
//     commentDate.classList.add("post__date");
//     commentDate.textContent = new Date(timestamp).toLocaleString();
//     commentTitle.appendChild(commentDate);

//     const commentBody = document.createElement("div");
//     commentBody.classList.add("post__body");
//     commentSection.appendChild(commentBody);

//     const commentText = document.createElement("p");
//     commentText.textContent = body;
//     commentText.classList.add("post__body-text");
//     commentBody.appendChild(commentText);
//   });
// }

// axios.get(link)
//   .then(response => {
//     const data = response.data;
//     displayComments(data);
//   })
//   .catch(error => console.error(error));

// const form = document.querySelector(".form");
// form.addEventListener("submit", event => {
//   event.preventDefault();
//   const nameInput = document.querySelector(".form__info-container-name--input");
//   const commentInput = document.querySelector(".form__info-container-comment--textarea");
//   const newName = nameInput.value;
//   const newComment = commentInput.value;
  
//   if (newName === "" || newComment === "") {
//     alert("Please enter your name and comment.");
//     return;
//   }

//   const requestBody = {
//     name: newName,
//     comment: newComment
//   };

//   axios.post(link, requestBody)
//     .then(response => {
//       // const newComment = response.data;
//       axios.get(link)
//         .then(response => {
//           const data = response.data;
//           displayComments(data);
//         })
//         .catch(error => console.error(error));
//     })
//     .catch(error => console.error(error));

//   nameInput.value = "";
//   commentInput.value = "";
// });






// const link = "https://project-1-api.herokuapp.com/comments/?api_key=8aea4b4e-d06b-4881-8fad-48c753b022f1";

// axios.get(link)
//       .then(response => {
//       const data = response.data;
//       const commentsSection = document.querySelector(".postSection");
//       data.forEach(post => {
//       const name = post.name;
//       const body = post.comment;
//       const timestamp = post.timestamp;

//       console.log(`Name: ${name}`);
//       console.log(`Comment: ${body}`);
//       console.log(`Timestamp: ${timestamp}`);
     
//       const commentCard = document.createElement("div");
//       commentCard.classList.add("post");
//       commentsSection.appendChild(commentCard);
      
//       const commentsImg = document.createElement("img");
//       commentsImg.classList.add("post__image");
//       commentsImg.setAttribute("src", "");
//       commentCard.appendChild(commentsImg);

//       const commentSection = document.createElement("div");
//       commentSection.classList.add("post__text");
//       commentCard.appendChild(commentSection);

//       const commentTitle = document.createElement("div");
//       commentTitle.classList.add("post__title");
//       commentSection.appendChild(commentTitle);
      
//       const commentName = document.createElement("p");
//       commentName.classList.add("post__name");
//       commentName.textContent = name;
//       commentTitle.appendChild(commentName);

//       const commentDate = document.createElement("p");
//       commentDate.classList.add("post__date");
//       commentDate.textContent = new Date(timestamp).toLocaleString();
//       commentTitle.appendChild(commentDate);

//       const commentBody = document.createElement("div");
//       commentBody.classList.add("post__body");
//       commentSection.appendChild(commentBody);

//       const commentText = document.createElement("p");
//       commentText.textContent = body;
//       commentText.classList.add("post__body-text");
//       commentBody.appendChild(commentText);

//       });
//     })
//     .catch(error => console.error(error));

/////////////////////////////////////////////////////////////////////////////////








//   function displayComments(post) {
//     const commentCard = document.createElement("div");
//     commentCard.classList.add("post");
    
//     const commentsImg = document.createElement("img");
//     commentsImg.classList.add("post__image");
//     commentsImg.setAttribute("src", "https://via.placeholder.com");
//     commentCard.appendChild(commentsImg);

//     const commentSection = document.createElement("div");
//     commentSection.classList.add("post__text");
//     commentCard.appendChild(commentSection);

//     const commentTitle = document.createElement("div");
//     commentTitle.classList.add("post__title");
//     commentSection.appendChild(commentTitle);

//     const commentName = document.createElement("p");
//     commentName.classList.add("post__name");
//     commentName.innerText = post.name;
//     commentTitle.appendChild(commentName);

//     const commentDate = document.createElement("p");
//     commentDate.classList.add("post__date");
//     commentDate.innerText = post.timestamp;
//     commentTitle.appendChild(commentDate);

//     const commentBody = document.createElement("div");
//     commentBody.classList.add("post__body");
//     commentSection.appendChild(commentBody);

//     const commentText = document.createElement("p");
//     commentText.innerText = post.comment;
//     commentText.classList.add("post__body-text");
//     commentBody.appendChild(commentText);

//   return commentCard;
// }



// function showCommentsList() {
//   const getComments = axios.get(link);
//   getComments.then((res) => {
//     const commentsData = res.data;
//     const commentsArrey = commentsData.sort(
//       (a, b) => b.timestamp - a.timestamp
//     );
//     commentsList.innerHTML = "";
//     commentsArrey.forEach((post) => {
//       displayComment(post);

//     });
//   });
// }

// const form = document.querySelector(".form");
// const commentsList = document.querySelector(".posts__list");
// showCommentsList();
// //add comment once the submit button is clicked
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const submittedName = event.target.newName;
//   const submittedComment = event.target.newComment;
//   if (formValidation(submittedName,submittedComment)) {
//     const postedComment = {
//       name: submittedName.value,
//       comment: submittedComment.value,
//     };
//     const addComment = axios.post(link, postedComment);
//     addComment.then((res) => {
//       event.target.reset();
//       showCommentsList();
//     });
//   }
// });

// function formValidation (nameField, commentField) {
//   const re = /^[a-zA-Z]/
//   if (!re.test(nameField.value)) {
//     nameField.focus();
//     nameField.value = "";
//     nameField.classList.add("form__input--error");
//     return false

//   } else if (!re.test(commentField.value)) {
//       commentField.focus();
//       commentField.value = ""
//       commentField.classList.add("form__input--error");
//       return false
//   } else {
//     return true
//   }}


// function renderComments() {
//   const commentsEl = document.querySelector(".postSection");
//   commentsEl.innerHTML = "";

//   comments.forEach((post) => {
//     const commentCard = displayComments(post);
//     commentsEl.appendChild(commentCard);
//   });
// }

// function handleFormSubmit(e) {
//   e.preventDefault();

//   const commentSubmission = {
//     name: e.target.name.value,
//     timestamp: new Date().toLocaleDateString(),
//     comment: e.target.newComment.value,
//   };

//   comments.unshift(commentSubmission);

//   renderComments();
// }

// const form = document.querySelector("form");
// form.addEventListener("submit", handleFormSubmit);

// renderComments();

// e.target.name.value = "";
// e.target.newComment.value = "";







// const comments = [
//   {
//     name: "Connor Walton",
//     timestamp: "02/17/2021",
//     comment:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Emilie Beach",
//     timestamp: "01/09/2021",
//     comment:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Miles Acosta",
//     timestamp: "12/20/2020",
//     comment:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },
// ];

//
  
  // const commentsSection = document.querySelector(".comments");
  
  // function displayComments(comment) {
  //   const commentCard = document.createElement("div");
  //   commentCard.classList.add("comment");
    
  //   const commentsImg = document.createElement("img");
  //   commentsImg.classList.add("comment__image");
  //   commentsImg.setAttribute("src", "https://via.placeholder.com");
  //   commentCard.appendChild(commentsImg);
  
  //   const commentSection = document.createElement("div");
  //   commentSection.classList.add("comment__section");
  //   commentCard.appendChild(commentSection);
  
  //   const commentTitle = document.createElement("div");
  //   commentTitle.classList.add("comment__title");
  //   commentSection.appendChild(commentTitle);
  
  //   const commentName = document.createElement("p");
  //   commentName.classList.add("comment__name");
  //   commentName.innerText = comment.name;
  //   commentTitle.appendChild(commentName);
  
  //   const commentDate = document.createElement("p");
  //   commentDate.classList.add("comment__date");
  //   commentDate.innerText = comment.timestamp;
  //   commentTitle.appendChild(commentDate);
  
  //   const commentBody = document.createElement("div");
  //   commentBody.classList.add("comment__body");
  //   commentSection.appendChild(commentBody);
  
  //   const commentText = document.createElement("p");
  //   commentText.innerText = comment.text;
  //   commentText.classList.add("comment__body-text");
  //   commentBody.appendChild(commentText);
  
  //   return commentCard;
  // }
  
  // function renderComments() {
  //   const commentsEl = document.querySelector(".comments");
  //   commentsEl.innerHTML = "";
  
  //   comments.forEach((comment) => {
  //     const commentCard = displayComments(comment);
  //     commentsEl.appendChild(commentCard);
  //   });
  // }
  
  // function handleFormSubmit(e) {
  //   e.preventDefault();
  
  //   const commentSubmission = {
  //     name: e.target.name.value,
  //     date: new Date().toLocaleDateString(),
  //     text: e.target.newComment.value,
  //   };
  
  //   comments.unshift(commentSubmission);

  //   renderComments();
  // }
  
  // const form = document.querySelector("form");
  // form.addEventListener("submit", handleFormSubmit);
  
  // renderComments();

  // e.target.name.value = "";
  // e.target.newComment.value = "";
  


