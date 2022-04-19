<script>
    let url = "http://localhost:3000/auth/login";

    async function userLogin() {
        let email = document.getElementById("inpEmail").value;
        let password = document.getElementById("inpPassword").value;

        let postLoginRequest = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };

        return fetch(url, postLoginRequest)
            .then((response) => response.json())
            .then (data => userDataValidation(data)) 
            .catch((error) => console.log(error));
    }

    function userDataValidation(data) {
      console.log(data);
      if (data) {
        toastr.success("You will be redirected", "Login Successfully")
        setTimeout(() => { window.location.href = "http://localhost:8080/" }, 3000);
      } else {
        toastr.warning("Unable to login");
      }
    }

    

</script>

<h1>LOGIN PAGE</h1>

<input id="inpEmail" type="email" placeholder="email" />
<input id="inpPassword" type="password" placeholder="password" />
<button on:click={userLogin}>login</button>
