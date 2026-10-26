const usernameInput = document.getElementById("username");
const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");

chrome.storage.local.get(["username", "id", "password"], (savedData) => {
  usernameInput.value = savedData.username || "";
  idInput.value = savedData.id || "";
  passwordInput.value = savedData.password || "";
});

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const id = idInput.value;
  const password = passwordInput.value;

  chrome.storage.local.set({ username, id, password }, () => {
    window.close();
  });
});
