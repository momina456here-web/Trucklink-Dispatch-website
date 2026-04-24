document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // validation
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill required fields");
      return;
    }
    // show success message
    successMsg.style.display = "block";
    successMsg.classList.remove("d-none");

    // reset form
    form.reset();

    // hide after 3 sec
    setTimeout(() => {  
      successMsg.style.display = "none";
      successMsg.classList.add("d-none");
    }, 3000);
  });
});
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if ( !email.match(emailPattern)){

  alert (" Please enter valid email");

    return;

}


