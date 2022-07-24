const GetBacon = () => {
  const body = fetch("https://baconipsum.com/api/?type=all-meat&paras=3").then(
    (res) => res.json()
  );
  return body;
};
const baconEl = document.querySelector(".bacon");
GetBacon()
  .then((res) => {
    const markup = res.reduce((acc, val) => (acc += `<p>${val}</p>`), "");
    baconEl.innerHTML = markup;
  })
  .catch((err) => (baconEl.innerHTML = err));
