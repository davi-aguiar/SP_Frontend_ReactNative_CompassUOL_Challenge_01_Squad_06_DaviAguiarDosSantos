const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const postId = urlParams.get("id");

const title = urlParams.get("title");

const content = urlParams.get("content");

const image = urlParams.get("image");

document.getElementById("next")!.innerHTML = title!;

document.getElementById("text-profile")!.innerHTML = content!;

const imageHTML = document.getElementById("imgAPI")!;

imageHTML.setAttribute("src", image!);

async function fetchComments(postId: number) {
  try {
    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    const commentsData = await commentsResponse.json();

    const commentsName = document.querySelectorAll(".comment-author");

    const commentsBody = document.querySelectorAll(".comment-body");

    commentsName.forEach((commentName, index) => {
      commentName.textContent = commentsData[index].name;
    });

    commentsBody.forEach((commentBody, index) => {
      commentBody.textContent = commentsData[index].body;
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

fetchComments(Number(postId));
