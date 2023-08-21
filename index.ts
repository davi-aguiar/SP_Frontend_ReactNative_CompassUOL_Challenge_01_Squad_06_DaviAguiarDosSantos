const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get("title");

const content = urlParams.get("content");

const image = urlParams.get("image");

console.log(title, "title");

console.log(content, "content");

console.log(image, "image");

document.getElementById("next")!.innerHTML = title!;

document.getElementById("text-profile")!.innerHTML = content!;

const imageHTML = document.getElementById("imgAPI")!;

imageHTML.setAttribute("src", image!);
