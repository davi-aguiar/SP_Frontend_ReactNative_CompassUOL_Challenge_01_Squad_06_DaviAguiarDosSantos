type articles = {
  id: number;
  title: string;
  content: string;
  image: string;
};

async function requestData() {
  try {
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postsData = await postsResponse.json();

    const imagesResponse = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );

    const imagesData = await imagesResponse.json();

    const combinedData: articles[] = [];

    for (let i = 0; i < 12; i++) {
      const post = postsData[i];
      const imageInfo = imagesData[i];

      if (post && imageInfo) {
        const combinedItem: articles = {
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

            const url = `index2.html?id=${
              article.id
            }&title=${encodeURIComponent(
              article.title
            )}&content=${encodeURIComponent(
              article.content
            )}&image=${encodeURIComponent(article.image)}`;

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
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

requestData();
