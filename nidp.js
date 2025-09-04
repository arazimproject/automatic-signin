chrome.storage.local.get(["username", "id", "password"], (data) => {
  if (!data.username || !data.id || !data.password) {
    return;
  }

  const { username, id, password } = data;
    function tryFillForm() {
        if (document.getElementById("Ecom_User_ID")) {
            document.getElementById("Ecom_User_ID").value = username;
            document.getElementById("Ecom_User_Pid").value = id;
            document.getElementById("Ecom_Password").value = password;
            setTimeout(() => document.getElementById("loginButton").click(), 300);
            clearInterval(waitForForm);
        } else {
            const userField = document.querySelector('input[name="user_name"]');
            const idField = document.querySelector('input[name="id_number"]');
            const passField = document.querySelector('input[name="password"]');
            const loginBtn = document.querySelector("div.btn_wrapper > button:nth-child(1)");

            // Check everything loaded
            if (userField && idField && passField && loginBtn) {
                userField.value = username;
                idField.value = id;
                passField.value = password;
                loginBtn.click();
                clearInterval(waitForForm);
            }
        }
    }

    const waitForForm = setInterval(tryFillForm, 300);
});
