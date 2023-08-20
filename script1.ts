type  articles = {
    id: number,
    title: string,
    content: string,
    image: string,
}

async function requestApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        const posts = data.slice(0, 12).map((post: any) => ({ id: post.id, title: post.title, body: post.body, }));
        const legends = document.querySelectorAll('.legend');
        
        legends.forEach((legend, index) => {
        if (posts[index]) {
        legend.textContent = posts[index].title;
        }
        });
        } catch (error) {
        console.error('Error fetching posts:', error);
        }
}

console.log(requestApi())










