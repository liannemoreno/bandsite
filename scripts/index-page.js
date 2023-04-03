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
    commentDate.textContent = new Date(timestamp).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric',hour: '2-digit', minute:'2-digit'});
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
