const loadUsersBtn = document.querySelector("#load-users");
const currentStatus = document.querySelector("#status");
const usersList = document.querySelector("#users");

const loadUsersData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    currentStatus.textContent = `Отлично, мы получили все нужные данные!`;

    const data = await response.json();
    data.forEach((user) => {
      const userElement = document.createElement("p");

      userElement.textContent = `${user.name} - ${user.email}`;
      userElement.style.fontWeight = "bold";

      usersList.append(userElement);
    });
  } catch (e) {
    currentStatus.textContent = e;
    console.error(e);
  }
};

loadUsersBtn.addEventListener("click", () => {
  currentStatus.textContent = "Loading...";
  loadUsersData();
});
