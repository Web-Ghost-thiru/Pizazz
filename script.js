document.addEventListener('DOMContentLoaded', function() {
  var titleUserIcon = document.getElementById('titleuser');

  titleUserIcon.addEventListener('click', function(event) {
      event.preventDefault();
      
      var loggedInUser = localStorage.getItem('loggedInUser');
      var userEmail = localStorage.getItem('userEmail');

      if (loggedInUser || userEmail) {
          alert("Already logged in as " + (loggedInUser ? loggedInUser : userEmail));
      } else {
          window.location.href = "signinup.html";
      }
  });
});

function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  if (email && password) {
      localStorage.setItem('loggedInUser', email);
      alert("Login Successful");
      window.location.href = "index.html";
  } else {
      alert("Invalid information");
  }
}

function signup() {
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (email && password && password === confirmPassword) {
      alert('Signup successful!');
      localStorage.setItem('userEmail', email);
      window.location.href = "index.html";
  } else if (!email || !password) {
      alert("Please enter both email and password.");
  } else {
      alert("Password doesn't match.");
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('cartItems');
  window.location.href = "index.html";
} 

window.onload = function() {
  var loggedInUser = localStorage.getItem('loggedInUser');
  var userEmail = localStorage.getItem('userEmail');

  if (loggedInUser || userEmail) {
      document.getElementById('logoutBtn').style.display = 'inline-block';
      document.getElementById('logoutBtn').style.cursor = 'pointer';

      var displayEmail = loggedInUser ? loggedInUser : userEmail;
      var titleText = displayEmail.slice(0, displayEmail.indexOf("@"));
      document.getElementById('titleuser').setAttribute('title', titleText);
  } else {
      document.getElementById('logoutBtn').style.display = 'none';
      document.querySelector('.quantity').style.right = '8px';
  }
};
