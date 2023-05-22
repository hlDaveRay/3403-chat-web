document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
  
    // Front-end validation
    if (id.trim() === '' || password.trim() === '') {
      alert("Please enter your username and password.");
      return;
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        if (xhr.responseText === "success") {
          window.location.href = "/main"; // Redirect to main page
        } else {
          alert("Incorrect username or password.");
        }
      } else {
        console.error(xhr.statusText);
        alert("Login failed. Please try again later.");
      }
    };
  
    xhr.send("id=" + encodeURIComponent(id) + "&password=" + encodeURIComponent(password));
  });
  
  document.getElementById("registerBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "/register";
  });
  