export const scaleupImg = () => {
  const scaleupImgBgArray = [].slice.call(
    document.querySelectorAll(".js-scaleup-img")
  );

  const scaleupBg = document.getElementById("js-scaleup-bg");

  const notScaleupBg = target => {
    const scaleupBg = document.querySelector(`.${target}`);

    if (scaleupBg) {
      scaleupBg.classList.remove(target);
    }
  };

  const getSrc = target => {
    const src = target.getAttribute("src");

    return src;
  };

  const toggleSrc = callBack => {
    const targetImg = scaleupBg.children[0].children[0];
    const isSrc = targetImg.getAttribute("src");

    if (isSrc === "") {
      targetImg.setAttribute("src", callBack);
    } else if (isSrc !== "") {
      targetImg.setAttribute("src", "");
    }
  };

  scaleupImgBgArray.map(el => {
    el.addEventListener("click", () => {
      // 背景表示
      scaleupBg.classList.add("is-scaleupBg");
      // srcセット
      toggleSrc(getSrc(el));
    });
  });

  scaleupBg.addEventListener("click", () => {
    // 背景非表示
    notScaleupBg("is-scaleupBg");
    // srcリセット
    toggleSrc();
  });
};
