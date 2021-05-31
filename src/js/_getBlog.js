export const getBlog = () => {
  fetch("https://akispacecrea-test.microcms.io/api/v1/blog/a4ycbylr2y", {
    headers: {
      "X-API-KEY": "1a671c89-e9b2-4015-9456-bdb46974c791"
    }
  })
    .then(res => res.json())
    .then(json => {
      const title = `<p>${json.title}</p>`;
      const img = `<div class="img -blog"><img src="${json.img.url}"></div>`;
      const item = `<li>${img}${title}</li>`;
      const blogList = document.getElementById("js-blog");

      blogList.innerHTML = item;
    });
};
