type articles = {
  id: number;
  title: string;
  content: string;
  image: string;
};

// solicitação de dados da API
async function requestData() {
  try {
    //requisição para obter os dados dos posts
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postsData = await postsResponse.json();
    // requisição para dados das imagens
    const imagesResponse = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );

    const imagesData = await imagesResponse.json();
    // array que armazena os dados das postagens
    const combinedData: articles[] = [];
    //captura dos dados das postagens e imagens
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
    // legendas e URL dos links
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
            //cria a url por parametros para a pagina de post
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
