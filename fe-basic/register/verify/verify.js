const input = document.getElementsByName('number');
const dom = document.getElementById('btn-verify');
const arr = [];

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', e => {
        if (e.target.value !== '') {
            input[i++].focus();
            arr.push(e.target.value);
            if (arr.length > 10) {
                dom.classList.remove('disable');
            }
        }
    });
}

dom.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/';
});