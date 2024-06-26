const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

//login fetch
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  //check the email
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }
    //check the password
    if (!password || password.length < 6 || password.length > 20) {
        alert("Please enter a valid password");
        return;
    }
    
  
  const res = await fetch("/loginForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (data.status === "ok") {
    window.location.href = "/home";
  } else {
    alert(data.message);
  }
});

//Register fetch
const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#emailRegister").value;
  const password = document.querySelector("#passwordRegister").value;
  const name = document.querySelector("#nameRegister").value;
  //check the email
    if (!email || !email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }
    //check the password
    if (!password || password.length < 6 || password.length > 20) {
        alert("Please enter a valid password");
        return;
    }
    //check the name
    if (!name || name.length < 3 || name.length > 20) {
        alert("Please enter a valid name");
        return;
    }
  
  const res = await fetch("/registerForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  const data = await res.json();
  if (data.status === "ok") {
    console.log('vamoos');
    window.location.href = "/login";
  } else {
    alert(data.message);
  }
});