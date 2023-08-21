"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postId = urlParams.get("id");
const title = urlParams.get("title");
const content = urlParams.get("content");
const image = urlParams.get("image");
document.getElementById("next").innerHTML = title;
document.getElementById("text-profile").innerHTML = content;
const imageHTML = document.getElementById("imgAPI");
imageHTML.setAttribute("src", image);
function fetchComments(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const commentsResponse = yield fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const commentsData = yield commentsResponse.json();
            const commentsName = document.querySelectorAll(".comment-author");
            const commentsBody = document.querySelectorAll(".comment-body");
            commentsName.forEach((commentName, index) => {
                commentName.textContent = commentsData[index].name;
            });
            commentsBody.forEach((commentBody, index) => {
                commentBody.textContent = commentsData[index].body;
            });
        }
        catch (error) {
            console.error("Error fetching comments:", error);
        }
    });
}
fetchComments(Number(postId));
