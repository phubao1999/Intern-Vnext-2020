const hostServer = 'http://localhost:8080';
let loggin;
let statusToken;
let id;
let nameAndId;
let name = '';
const respone = {
    status: 'connected',
    authResponse: {
        accessToken: this.statusToken,
        expiresIn: '...',
        signedRequest: '...',
        userID: this.id
    }
}

const setupFb = () => {
    return new Promise(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '272554133782678',
                cookie: true,
                xfbml: true,
                version: 'v7.0'
            });

            FB.AppEvents.logPageView();

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })
}

const submitLogin = () => {
    FB.login(response => {
        console.log(response)
        if (response.authResponse) {
            loggin = response.status;
            statusToken = response.authResponse.accessToken;
            localStorage.setItem("user_token", statusToken);
            FB.api("/me", function (response) {
                nameAndId = response;
                name = response.name;
                id = response.id;
            });
        } else {
            console.log("User login failed");
        }
    });
}

const eventLogin = () => {
    const fb = document.getElementById('fb');
    fb.addEventListener('click', (e) => {
        e.preventDefault();
        submitLogin();
    })
}

const checkLogin = () => {
    return new Promise(() => {
        window.FB.getLoginStatus((response) => {
            statusChangeCallback(response);
        });
    });
}

const initFunc = async () => {
    await setupFb()
        .then(eventLogin());
    await checkLogin()
}

initFunc();

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
        alert(res.meta.message);
        const status = res.meta.code;
        if (status === "200") {
            window.location.href = `/table/table.html`;
        }
    }).catch(err => {
        console.log(err);
    })

}