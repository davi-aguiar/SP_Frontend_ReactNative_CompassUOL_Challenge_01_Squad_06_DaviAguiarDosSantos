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
        
        
        const posts = data.slice(0, 12).map((post: articles) => ({ id: post.id, title: post.title, body: post.content, }));
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



async function requestImage() {

    try {
  
      const linkAPI = await fetch('https://jsonplaceholder.typicode.com/photos');
  
      const linkData = await linkAPI.json();

      const linkSlice = linkData.slice(0, 12);
      const imgElements = document.querySelectorAll('.img-post');
  
      linkSlice.forEach((imageInfo: any, index: any) => {
        if (index < imgElements.length) {
          imgElements[index].setAttribute('src', imageInfo.url);
        }
      });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

requestImage();




