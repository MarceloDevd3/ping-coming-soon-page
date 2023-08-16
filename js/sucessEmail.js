const form = document.getElementById('submit');
const inputStyle = document.querySelector('input')

form.addEventListener('click', (e) => {
  e.preventDefault()
  let  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
  let email = document.getElementById('email').value;
  let email1 = document.getElementById('email');
  let emailValue = email.trim()
  
 

  if(emailValue === ''){
    setErrorFor(email1, 'Please provide a valid email address');
  }else if(emailPattern.test(email)) {
    setSuccessFor(email1)
  }else{
    setErrorFor(email1, 'Email cannot be empty');
  }



  function  setErrorFor(input, message) {
   const labelmsg = input.parentElement;
   const small = labelmsg.querySelector('.quote-txt');
   input.classList.add('red')
   inputStyle.style.borderColor = '#bd0808'
   small.innerText = message;
}

function  setSuccessFor(input, message) {
 const labelmsg = input.parentElement;
 const small = labelmsg.querySelector('.quote-txt');
 inputStyle.style.borderColor = '#c2d3ff'
 inputStyle.classList.remove('red')
 small.innerText = '';
}



  
})