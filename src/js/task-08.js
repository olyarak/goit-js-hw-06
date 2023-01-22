const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Усі поля повинні бути заповнені");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
  }
  event.currentTarget.reset();
}
