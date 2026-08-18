const bookingForm = document.querySelector("#booking-form");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(bookingForm);
  const formattedData = Object.fromEntries(data);

  formattedData.guests = Number(formattedData.guests);

  console.log(formattedData);

  const errorElement = document.querySelector("#form-error");

  if (!formattedData.name.trim()) {
    errorElement.textContent = "ОШИБКА: Введите имя";
    return;
  }
});
