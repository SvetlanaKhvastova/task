function onRenameSimilarItemsTitle() {
  let similarItems = setInterval(() => {
    if (document.querySelector("#syte-similar-items-container h3.syte-slider-title") && !document.querySelector(".new_similar_title")) {
      clearInterval(similarItems);
      setTimeout(() => {
        document.querySelector("#syte-similar-items-container h3.syte-slider-title").insertAdjacentHTML("beforebegin", `<h3 class="new_similar_title">Similar <b>Items</b></h3>`);
      }, 1010);
    }
  }, 100);
}

// Observe
let observerVar = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (!(node instanceof HTMLElement)) continue;
      if (document) {
        observerVar.disconnect();

        if (document.querySelector(".new_similar_title")) {
          onRenameSimilarItemsTitle();
        }

        observerVar.observe(document, {
          childList: true,
          subtree: true,
        });
      }
    }
  }
});

observerVar.observe(document, {
  childList: true,
  subtree: true,
});
