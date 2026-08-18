const submitFormBtn = document.querySelector("#booking-form");

submitFormBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(submitFormBtn);
  const formattedData = Object.fromEntries(data);

  console.log(formattedData);
});
