const hostServer = 'http://localhost:8080';

const loginButton = document.getElementById('btn-login');
loginButton.addEventListener('click', () => {
    getValueOfInput();
});

const getValueOfInput = () => {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    if (id === '' || password === '') {
        alert('Please Enter All Field');
        return false;
    }
    const body = {
        id: id,
        password: password
    }
    loginApi(JSON.stringify(body));
}

const loginApi = async (body) => {
    const response = await fetch(`${hostServer}/user/login`, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = response.json();
    json.then(res => {
        console.log(res);
        alert(res.meta.message);
        const status = res.meta.code;
        if (status === "200") {
            window.location.href = `/table/table.html`;
        }
    }).catch(err => {
        console.log(err);
    })

}