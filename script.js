function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  if (email && password) {
      localStorage.setItem('loggedInUser', email);
      alert("Login Successful");
      window.location.href = "index.html";
      // document.getElementById('titleuser').setAttribute('title', email);
      
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
      localStorage.setItem('loggedInUser', email);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('password', password);
      window.location.href = "index.html";
      // document.getElementById('titleuser').setAttribute('title', email);
  } else if (!email || !password) {
      alert("Please enter both email and password.");
  } else {
      alert("Password doesn't match.");
  }
}
function logout() {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('userEmail');

  window.location.href = "index.html";
}

window.onload = function() {
  var loggedInUser = localStorage.getItem('loggedInUser');
  var userEmailId  = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
      document.getElementById('logoutBtn').style.display = 'inline-block';
      document.getElementById('titleuser').setAttribute('title', loggedInUser.slice(0,loggedInUser.indexOf("@")));
  }
  else{
    document.querySelector('.quantity').style.right = '8px';
    document.getElementById('logoutBtn').style.display = 'none';
  }
if(userEmailId){
    document.getElementById('logoutBtn').style.display = 'inline-block';
    document.getElementById('titleuser').setAttribute('title', userEmailId.slice(0,userEmailId.indexOf("@")));
  }
  else{
    document.querySelector('.quantity').style.right = '8px';
    document.getElementById('logoutBtn').style.display = 'none';
  }
}
