const loadUsersBtn = document.querySelector("#load-users");
const currentStatus = document.querySelector("#status");
const usersList = document.querySelector("#users");

loadUsersBtn.addEventListener("click", (event) => {
  event.preventDefault();
  currentStatus.textContent = "Loading...";

  const loadUsersData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        currentStatus.textContent = `Ошибка при запросе данных: ${response.status}`;
      } else {
        currentStatus.textContent = `Отлично, мы получили данные!`;
      }

      const data = await response.json();
      // data.map((u) => ); i don't get this part, how do i return those data to html?
    } catch (e) {
      console.error(`Ошибка при запросе данных: ${e}`);
    }
  };

  loadUsersData();
});
