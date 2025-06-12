function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }

  emailjs.send("service_6wxrlth", "template_m2rouh8",parms).then(alert(" Email successfully Sent!!"));
}



function clearForm() {
  document.getElementById("contact-form").reset();
}

function handleFormSubmit(e) {
  e.preventDefault(); 
  sendMail(); 
  clearForm(); 
}

// const sidebar = document.querySelector('.sidebar');
// const menuButton = document.querySelector('menu-button');

// menuButton.addEventListener('click', () => {
//   sidebar.classList.toggle('active')
// });