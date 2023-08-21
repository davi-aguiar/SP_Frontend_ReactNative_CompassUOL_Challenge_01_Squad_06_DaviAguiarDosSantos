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
// async function requestApi() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     const posts = data.slice(0, 12).map((post: articles) => ({
//       id: post.id,
//       title: post.title,
//       body: post.content
//     }));
//     const legends = document.querySelectorAll(".legend");
//     legends.forEach((legend, index) => {
//       if (posts[index]) {
//         legend.textContent = posts[index].title;
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   }
// }
// async function requestImage() {
//   try {
//     const linkAPI = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const linkData = await linkAPI.json();
//     const linkSlice = linkData.slice(0, 12);
//     const imgElements = document.querySelectorAll(".img-post");
//     linkSlice.forEach((imageInfo: any, index: any) => {
//       if (index < imgElements.length) {
//         imgElements[index].setAttribute("src", imageInfo.url);
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching images:", error);
//   }
// }
// requestImage();
// async function requestData() {
//   try {
//     const postsResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     const postsData = await postsResponse.json();
//     const imagesResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/photos"
//     );
//     const imagesData = await imagesResponse.json();
//     const combinedData: articles[] = [];
//     for (let i = 0; i < 12; i++) {
//       const post = postsData[i];
//       const imageInfo = imagesData[i];
//       if (post && imageInfo) {
//         const posts: articles = {
//           id: post.id,
//           title: post.title,
//           content: post.body,
//           image: imageInfo.url
//         };
//         combinedData.push(posts);
//       }
//     }
//     const legends = document.querySelectorAll(".legend");
//     const imgElements = document.querySelectorAll(".img-post");
//     legends.forEach((legend, index) => {
//       if (combinedData[index]) {
//         legend.textContent = combinedData[index].title;
//         legend.addEventListener("click", () => {
//           const queryParams = new URLSearchParams();
//           queryParams.append("id", combinedData[index].id.toString());
//           queryParams.append("title", combinedData[index].title);
//           queryParams.append("body", combinedData[index].content);
//           queryParams.append("image", combinedData[index].image);
//           const newUrl = `index2.html?${queryParams.toString()}`;
//           history.pushState({}, "", newUrl);
//           window.location.href = newUrl;
//         });
//       }
//     });
//     imgElements.forEach((imgElement, index) => {
//       if (combinedData[index]) {
//         imgElement.setAttribute("src", combinedData[index].image);
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// requestData();
function requestData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const postsResponse = yield fetch("https://jsonplaceholder.typicode.com/posts");
            const postsData = yield postsResponse.json();
            const imagesResponse = yield fetch("https://jsonplaceholder.typicode.com/photos");
            const imagesData = yield imagesResponse.json();
            const combinedData = [];
            for (let i = 0; i < 12; i++) {
                const post = postsData[i];
                const imageInfo = imagesData[i];
                if (post && imageInfo) {
                    const combinedItem = {
                        id: post.id,
                        title: post.title,
                        content: post.body,
                        image: imageInfo.url
                    };
                    combinedData.push(combinedItem);
                }
            }
            const legends = document.querySelectorAll(".legend");
            const imgElements = document.querySelectorAll(".img-post");
            legends.forEach((legend, index) => {
                if (combinedData[index]) {
                    const article = combinedData[index];
                    legend.textContent = article.title;
                    legends.forEach((legend, index) => {
                        if (combinedData[index]) {
                            const article = combinedData[index];
                            legend.textContent = article.title;
                            const url = `index2.html?id=${article.id}&title=${encodeURIComponent(article.title)}&content=${encodeURIComponent(article.content)}&image=${encodeURIComponent(article.image)}`;
                            legend.setAttribute("href", url);
                        }
                    });
                }
            });
            imgElements.forEach((imgElement, index) => {
                if (combinedData[index]) {
                    imgElement.setAttribute("src", combinedData[index].image);
                }
            });
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    });
}
requestData();
