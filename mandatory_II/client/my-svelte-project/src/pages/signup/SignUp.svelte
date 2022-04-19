<script>
    let url = "http://localhost:3000/auth/signup";
    
    async function userSignup() {
      let email = document.getElementById("inpEmail").value
      let password = document.getElementById("inpPassword").value
    
      let postLoginRequest = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          "email": email,
          "password": password,
        })
      }
    
      
    
    
      return fetch(url, postLoginRequest)
        .then(response => response.json())
        .catch(error => console.log(error));
  
    }
    </script>
    
    <h1> SignUp PAGE</h1>
     
    <input id="inpEmail" placeholder="email" required>
    <input id="inpPassword" placeholder="password:" required>
    <button on:click={userSignup}>SignUp</button>