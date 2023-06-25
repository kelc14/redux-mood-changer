const moodContainer = document.querySelector("#mood-container");

const happyBtn = document.querySelector("#happy-btn");
const sadBtn = document.querySelector("#sad-btn");
const inLoveBtn = document.querySelector("#in-love-btn");
const hungryBtn = document.querySelector("#hungry-btn");
const surprisedBtn = document.querySelector("#surprised-btn");

happyBtn.addEventListener("click", (e) => {
  store.dispatch({ type: "HAPPY" });
  const state = store.getState();
  moodContainer.textContent = state.mood;
});

sadBtn.addEventListener("click", (e) => {
  store.dispatch({ type: "SAD" });
  const state = store.getState();
  moodContainer.textContent = state.mood;
});

inLoveBtn.addEventListener("click", (e) => {
  store.dispatch({ type: "INLOVE" });
  const state = store.getState();
  moodContainer.textContent = state.mood;
});

hungryBtn.addEventListener("click", (e) => {
  store.dispatch({ type: "HUNGRY" });
  const state = store.getState();
  moodContainer.textContent = state.mood;
});

surprisedBtn.addEventListener("click", (e) => {
  store.dispatch({ type: "SURPRISED" });
  const state = store.getState();
  moodContainer.textContent = state.mood;
});
