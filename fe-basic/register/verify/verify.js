const input = document.getElementsByName('number');
const dom = document.getElementById('btn-verify');
const arr = [];

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', e => {
        if (e.target.value !== '') {
            if (i === input.length - 1) {
                arr.push(e.target.value);
                input[0].focus();
            } else {
                input[++i].focus();
                arr.push(e.target.value);
            }
            if (arr.length === 6) {
                dom.classList.remove('disable');
            }
        }
    });
}

dom.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/';
});