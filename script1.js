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
function requestApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
            const data = yield response.json();
            const posts = data.slice(0, 12).map((post) => ({ id: post.id, title: post.title, body: post.body, }));
            const legends = document.querySelectorAll('.legend');
            legends.forEach((legend, index) => {
                if (posts[index]) {
                    legend.textContent = posts[index].title;
                }
            });
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
    });
}
console.log(requestApi());
