document.getElementById("save").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;

  chrome.storage.local.set({ username, id, password }, () => {
    window.close();
  });
});
