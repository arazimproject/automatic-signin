chrome.storage.local.get(["username", "id", "password"], (data) => {
  if (!data.username || !data.id || !data.password) {
    return;
  }

  const { username, id, password } = data;
  const enterButton = document.querySelector('#frmlogin input[title="כניסה"]');
  if (enterButton) {
    document.querySelector('#frmlogin input[name="txtUser"]').value = username;
    document.querySelector('#frmlogin input[name="txtId"]').value = id;
    document.querySelector('#frmlogin input[name="txtPass"]').value = password;
    enterButton.click();
}
});
