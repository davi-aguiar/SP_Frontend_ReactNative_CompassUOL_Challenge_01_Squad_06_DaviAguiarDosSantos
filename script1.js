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
