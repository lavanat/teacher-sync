console.log("LOGIN JS WORKS")

const loginFormHandler = async (event) => {
    console.log('LOGIN BUTTON WAS CLICKED')
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      let response;
      try {
        response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/grades');
          }
      } catch (err) {
          console.log(err);
        alert(response.statusText);
      }
      
    }
  };

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);