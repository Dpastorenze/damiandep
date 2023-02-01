function Contacto() {
    console.log("Formulario de contacto");
    document.getElementById('formcontacto').style.display='block';

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mailc')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:dampc1991@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('asunto')}${form.get('message')} telefono de contacto ${form.get('telefono')}`)
  $buttonMailto.click()
}
}
