const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const email = formElem.email.value.trim();
  const password = formElem.password.value.trim();

  if (email.length > 0 && password.length > 0) {
    console.log({ email, password });
  } else {
    alert('All form fields must be filled in');
  }
}
