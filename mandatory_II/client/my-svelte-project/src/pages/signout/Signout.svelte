<script>
 
    
    const logoutUser = async () => {
            try {
                const response = await fetch('http://localhost:3000/auth/signout');
                const data = await response.json();
                if (data) {
                    alert('User logout operation success.');
                    location.reload();
                } else {
                    alert('User logout operation error (message: ' + data.message + ').');
                }
            } catch(e) {
                console.error(e);
                alert('Request error!');
            }
        };

  </script>

<h1>Sign out</h1>
<button on:click={logoutUser}>sign out </button>
