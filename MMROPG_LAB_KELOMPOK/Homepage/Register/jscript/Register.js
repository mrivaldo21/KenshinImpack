let validate = () => {
    let email = document.getElementById('email')
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let male = document.getElementById('male')
    let female = document.getElementById('female')
    let agree = document.getElementById('agree')
    let setErrorMsg = []

    Email(email, setErrorMsg)
    Username(username, setErrorMsg)
    Password(password, setErrorMsg)
    Gender(male, female, setErrorMsg)
    Agree(agree, setErrorMsg)
    
    if(setErrorMsg.length === 0){
        alert('Registration Success!')
    } else {
        alert(setErrorMsg.join('\n'))
    }
}

let Email = (email, setErrorMsg) => {
    if(email.value === ''){
        setErrorMsg.push('Email Required!')
    } else if(email.value.startsWith('.') || email.value.startsWith('@')){
        setErrorMsg.push('Email cannot starts with "." or "@"')
    } else if(email.value.indexOf('.') === (email.value.indexOf('@') + 1)){
        setErrorMsg.push('Email cannot contain "." after "@"')
    } else if (!email.value.endsWith('.com')){
        setErrorMsg.push('Email must be ends with ".com"')
    } else if (!email.value.match('@') || !email.value.match('.')){
        setErrorMsg.push('Email must be use "@" or "."!')
    }
}

let Username = (username, setErrorMsg) => {
    if(username.value === ''){
        setErrorMsg.push('Username Required!')
    } else if (username.value.length < 5){
        setErrorMsg.push('Username must be 5 word!')
    } else if (username.value.startsWith('.')){
        setErrorMsg.push('Username cannot starts with "." or "@')
    } else if (username.value.match('@')){
        setErrorMsg.push('Username cannot use "@"!')
    }
}

let Password = (password, setErrorMsg) => {
    var lwrcase = /[a-z]/g
    var upcase = /[A-Z]/g
    var num = /[0-9]/g
    if(password.value === ''){
        setErrorMsg.push('Password Required!')
    } else if (password.value.length > 8){
        setErrorMsg.push('Password must be 8 word!')
    } else if (!password.value.match(lwrcase) || !password.value.match(upcase)){
        setErrorMsg.push('Password must be contain lower case and upper case!')
    } else if (!password.value.match(num)){
        setErrorMsg.push('Password must be contain a number!')
    }
}

let Gender = (male, female, setErrorMsg) => {
    if(!male.checked && !female.checked){
        setErrorMsg.push('Gender must be selected!')
    }
}

let Agree = (agree, setErrorMsg) => {
    if(!agree.checked){
        setErrorMsg.push('You must agree to the terms of use and privacy policy!')
    }
}