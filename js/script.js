  /* SCROLL EFFECT */
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 50);
  });

    /* MOBILE MENU */
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });


// STATE
let isSignup = false;

/* OPEN */
function openLogin(){
  document.getElementById("loginModal").style.display = "flex";
  isSignup = false;
  updateForm();
}

/* CLOSE */
function closeLogin(){
  document.getElementById("loginModal").style.display = "none";
}

/* SWITCH LOGIN/SIGNUP */
function toggleAuth(){
  isSignup = !isSignup;
  updateForm();
}

/* UPDATE FORM */
function updateForm(){

  document.getElementById("formTitle").innerText =
    isSignup ? "Create Your Food Account" : "Welcome Back";

  document.getElementById("formSubtitle").innerText =
    isSignup 
    ? "Sign up to order your favorite dishes and enjoy exclusive food offers"
    : "Login to explore delicious meals and track your orders";

  document.getElementById("submitBtn").innerText =
    isSignup ? "Create Account" : "Login to Order";

  document.getElementById("switchText").innerText =
    isSignup ? "Already have an account?" : "Don't have an account?";

  document.querySelector(".switch-text a").innerText =
    isSignup ? "Login" : "Sign up";

  document.getElementById("fullName").style.display =
    isSignup ? "block" : "none";

  document.getElementById("confirmPassword").style.display =
    isSignup ? "block" : "none";

  document.getElementById("loginRoleBox").style.display =
    isSignup ? "none" : "block";
}


/* PHONE REAL-TIME VALIDATION */
const phoneInput = document.getElementById("phoneNumber");

// create error element if not exists
let phoneError = document.getElementById("phoneError");
if(!phoneError){
  phoneError = document.createElement("small");
  phoneError.id = "phoneError";
  phoneError.style.color = "red";
  phoneError.style.fontSize = "12px";
  phoneError.style.display = "none";
  phoneInput.parentNode.appendChild(phoneError);
}

phoneInput.addEventListener("input", function(){

  const regex = /^[0-9]*$/;

  if(!regex.test(phoneInput.value)){
    phoneInput.style.border = "2px solid red";
    phoneError.style.display = "block";
    phoneError.innerText = "Give numbers only!";
  } else {
    phoneInput.style.border = "1px solid #ccc";
    phoneError.style.display = "none";
  }

});


/* SUBMIT */
function handleAuthSubmit(e){
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("loginPassword");
  const phone = document.getElementById("phoneNumber"); 
  const role = document.getElementById("loginRole");
  const phoneRegex = /^[0-9]+$/;

  let isValid = true;

  // RESET BORDER 
  document.querySelectorAll("input").forEach(input => {
    input.style.border = "1px solid #ccc";
  });

  phoneError.style.display = "none";

  // EMAIL
  if(email.value.trim() === ""){
    email.style.border = "2px solid red";
    isValid = false;
  }

  // PHONE
  if(phone.value.trim() === ""){
    phone.style.border = "2px solid red";
    phoneError.style.display = "block";
    phoneError.innerText = "Phone number required!";
    isValid = false;
  }
  else if(!phoneRegex.test(phone.value)){
    phone.style.border = "2px solid red";
    phoneError.style.display = "block";
    phoneError.innerText = "Give numbers only!";
    isValid = false;
  }

  // PASSWORD
  if(password.value.trim() === ""){
    password.style.border = "2px solid red";
    isValid = false;
  }

  /* LOGIN */
  if(!isSignup){

    if(!isValid){
      alert("Please fill all fields correctly!");
      return;
    }

    if(role.value === "admin"){
      window.location.href = "admin-dashboard.html";
    }
    else{
      window.location.href = "user-dashboard.html";
    }

  }
  
  /* SIGNUP */
  else {

    const name = document.getElementById("fullName");
    const confirmPassword = document.getElementById("confirmPassword");

    // NAME
    if(name.value.trim() === ""){
      name.style.border = "2px solid red";
      isValid = false;
    }

    // CONFIRM PASSWORD
    if(confirmPassword.value.trim() === ""){
      confirmPassword.style.border = "2px solid red";
      isValid = false;
    }

    // EMPTY CHECK
    if(!isValid){
      alert("Please fill all fields correctly!");
      return;
    }

    // PASSWORD MATCH
    if(password.value !== confirmPassword.value){
      password.style.border = "2px solid red";
      confirmPassword.style.border = "2px solid red";
      alert("Passwords do not match!");
      return;
    }

    // 👉 SIGNUP SUCCESS → 404 PAGE
    window.location.href = "404.html";
  }
}


/* PASSWORD TOGGLE */
function togglePassword(){

  const password = document.getElementById("loginPassword");
  const eyeIcon = document.getElementById("eyeIcon");

  if(password.type === "password"){
    password.type = "text";
    eyeIcon.classList.replace("ri-eye-off-line","ri-eye-line");
  } else {
    password.type = "password";
    eyeIcon.classList.replace("ri-eye-line","ri-eye-off-line");
  }
}

/* OUTSIDE CLICK CLOSE */
window.addEventListener("click", function(e){
  const modal = document.getElementById("loginModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});


function go404(){
  window.location.href = "404.html";
}