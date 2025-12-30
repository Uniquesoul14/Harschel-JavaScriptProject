let login = document.getElementById("login");
let register = document.getElementById("register");

let logEmail = document.getElementById("logEmail");
let logPass = document.getElementById("logPass");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let con_pass = document.getElementById("con_pass");

let logIdEr = document.getElementById("logIdEr");
let logPassEr = document.getElementById("logPassEr");
let sIdEr = document.getElementById("sIdEr");
let sPassEr = document.getElementById("sPassEr");
let sName = document.getElementById("sName");
let sLname = document.getElementById("sLname");
let sConPass = document.getElementById("sConPass");

let signEmailValue = email.value;
let signPassValue = pass.value;
let passValidate = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let emailValidate =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let validitycheck = true;

login.addEventListener("click", (e) => {
  e.preventDefault();

  if (!emailValidate.test(logEmail.value)) {
    logIdEr.innerText =
      "*Please Enter valid Email id, Consisting of `@` and all letters must be in lowercase with suffix of .com, .yahoo, .outlook";
    validitycheck = false;
  } else {
    logIdEr.innerText = null;
  }

  if (!passValidate.test(logPass.value)) {
    logPassEr.innerText = "*Please valid password";
    let validitycheck = false;
  } else {
    logPassEr.innerText = null;
  }

  let loginObj = {
    id: logEmail.value,
    pass: logPass.value,
  };

  if (loginObj.id != "" && loginObj.pass != "") {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    });
  }
});

register.addEventListener("click", (e) => {
  e.preventDefault();

  let registerObj = {
    FirstName: fName.value,
    LastName: lName.value,
    id: email.value,
    pass: pass.value,
    ConfirmPass: con_pass.value,
  };

  if (!emailValidate.test(registerObj.id)) {
    sIdEr.innerText =
      "*Please Enter valid Email id, Consisting of `@` and all letters must be in lowercase with suffix of .com, .yahoo, .outlook";
  } else {
    sIdEr.innerText = null;
  }

  if (!passValidate.test(registerObj.pass)) {
    sPassEr.innerText = "*Please enter strong and valid password";
  } else {
    sPassEr.innerText = null;
  }

  if (registerObj.FirstName == "" && registerObj.LastName == "") {
    sName.innerText = "*Please Enter First Name";
    sLname.innerText = "*Please Enter Last Name";
  } else {
    sName.innerText = null;
    sLname.innerText = null;
  }



  if (registerObj.pass == registerObj.ConfirmPass) {
      console.log("true")
      if (
      registerObj.FirstName != null &&
      registerObj.LastName != null &&
      registerObj.id != null &&
      registerObj.pass != null &&
      registerObj.ConfirmPass != null
    ) {
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerObj),
      });
    }
  } else {
    sConPass.innerText = "*Password and Confirm Password Doesn't match";
  }
});

// $("#signUp").on("click" , function() {

//     let validitycheck = true;

//     let email = $("#email").val();
//     let emailValidate = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
//     if(!emailValidate.test(email))
//     {
//         $("#emailErr").text("*Please Enter valid Email id, Consisting of `@` and all letters must be in lowercase with suffix of .com, .yahoo, .outlook")
//         validitycheck = false;
//     }else{
//         $("#emailErr").text(null);
//     }

//     let password = $("#password").val();
//     let passValidate = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
//     if(!passValidate.test(password))
//     {
//         $("#passErr").text("*Invalid password !")
//         validitycheck = false;
//     }else
//     {
//         $("#passErr").text(null);
//     }

//     let conPass = $("#confirmPassword").val();
//     if(password !== conPass)
//     {
//         $("#conPassErr").text("*Password do not match !")
//         validitycheck = false;
//     }
//     else
//     {
//         $("#conPassErr").text(null);
//     }

//     if(validitycheck==true){
//         alert("Signed Up successfully!");
//     }
// });
