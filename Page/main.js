const form = document.querySelector('#form')
const mail = document.querySelector('#email')
const regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


form.addEventListener('submit', e => {
    e.preventDefault()

    // email validation
    const val = mail.value
    if(val == ' ' || !regex.test(val)){
        form.classList.add('error')
       
    }
    else{
        form.classList.remove('error')
    }
})


 