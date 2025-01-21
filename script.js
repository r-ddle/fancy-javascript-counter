document.addEventListener("DOMContentLoaded", () => {
  const increaseBtn = document.querySelector(".counter__button--increase");
  const decreaseBtn = document.querySelector(".counter__button--decrease");
  const resetBtn = document.querySelector(".counter__reset-button");
  const counter = document.querySelector(".counter__value");
  const title = document.querySelector(".counter__title");

  let initialValue = 0;
  counter.textContent = initialValue;

  increaseBtn.addEventListener("click", () => {
    initialValue++;
    counter.textContent = initialValue;
    console.log("number increased");

    if (initialValue === 5) {
      title.textContent = "You've reached the limit! Upgrade to PRO";
      increaseBtn.disabled = true;
    }
  });

  decreaseBtn.addEventListener("click", () => {
    initialValue--;
    counter.textContent = initialValue;
    console.log("number decreased");

    if (initialValue === -5) {
      title.textContent = "You've reached the limit! Upgrade to PRO";
      decreaseBtn.disabled = true;
    }
  });

  resetBtn.addEventListener("click", () => {
    initialValue = 0;
    counter.textContent = initialValue;
    title.textContent = "Fancy Counter";
    console.info("value reset and buttons enabled");

    increaseBtn.disabled = false;
    decreaseBtn.disabled = false;
  });
});
