const registerButton = document.getElementById('btn-register');
const regex_email = '^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$';
const regex_phone = '^[0-9]*$';

registerButton.addEventListener('click', () => {
    checkValidate();
    if (checkValidate()) {
        console.log('aaa');
    }
});

const checkValidate = () => {
    let isValidate = false;
    let checkFName = false;
    let checkLName = false;
    let checkEmail = false;
    let checkPhone = false;
    let checkPassword = false;
    const fName = document.getElementById('f_name').value;
    const lName = document.getElementById('l_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    if (fName === '') {
        validateMess('e_f_name', '* Please Enter Your First Name')
    } else {
        validateMess('e_f_name', '')
        checkFName = true;
    }
    if (lName === '') {
        validateMess('e_l_name', '* Please Enter Your Last Name')
    } else {
        validateMess('e_l_name', '')
        checkLName = true;
    }
    if (email === '') {
        validateMess('e_email', '* Please Enter Your Email')
    } else if (email.match(regex_email) === null) {
        validateMess('e_email', '* An Email Must Be like: abc@gmail.com')
    } else {
        validateMess('e_email', '')
        checkEmail = true;
    }
    if (phone === '') {
        validateMess('e_phone', '* Please Enter Your Phone')
    } else if (phone.match(regex_phone) === null) {
        validateMess('e_phone', '* Phone Must Be A Number')
    } else {
        validateMess('e_phone', '')
        checkPhone = true;
    }
    if (password === '') {
        validateMess('e_password', '* Please Enter Your Password')
    } else {
        validateMess('e_password', '')
        checkPassword = true;
    }
    if (checkFName && checkLName && checkEmail && checkPhone && checkPassword) {
        isValidate = true;
    }
    return isValidate;
}

const validateMess = (id, message) => {
    const dom = document.getElementById(id);
    dom.innerText = message;
}