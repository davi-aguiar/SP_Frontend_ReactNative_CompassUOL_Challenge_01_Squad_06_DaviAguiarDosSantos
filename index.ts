const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const postId = urlParams.get("id");

const title = urlParams.get("title");

const content = urlParams.get("content");

const image = urlParams.get("image");
// atualizando os elementos da pagina html
document.getElementById("next")!.innerHTML = title!;

document.getElementById("text-profile")!.innerHTML = content!;

const imageHTML = document.getElementById("imgAPI")!;

imageHTML.setAttribute("src", image!);

//funçao para buscar os comentários
async function fetchComments(postId: number) {
  try {
    //requisição dos dados dos comentarios
    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    const commentsData = await commentsResponse.json();
      //selecionando onde os comentários serão exibidos
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
//chamada da função 
fetchComments(Number(postId));
