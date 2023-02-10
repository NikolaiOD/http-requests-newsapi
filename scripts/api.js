const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "7740e756e6944a61b5c1a323020b1ed9";

function getNews(query) {
  return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`).then((res) =>
    res.json()
  );
}

export default { getNews };
