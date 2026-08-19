const bookingForm = document.querySelector("#booking-form");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(bookingForm);
  const formattedData = Object.fromEntries(data);

  formattedData.guests = Number(formattedData.guests);

  const errorElement = document.querySelector("#form-error");

  if (!formattedData.name.trim()) {
    errorElement.textContent = "ОШИБКА: Введите имя";
    return;
  } else if (!formattedData.phone.trim()) {
    errorElement.textContent = "ОШИБКА: Введите номер телефона";
    return;
  } else if (0 >= formattedData.guests || formattedData.guests >= 10) {
    errorElement.textContent =
      "ОШИБКА: Кол-во гостей не может меньше 0 и больше 10";
    return;
  } else {
    errorElement.textContent = "";

    console.log(formattedData);
  }
});
