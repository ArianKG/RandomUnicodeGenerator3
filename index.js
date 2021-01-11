const btn = document.querySelector('.btn');
btn.onclick = randomUnicode;
const txt = document.querySelector('.textarea');
txt.spellcheck = false;

function randomUnicode() {
    document.body.innerHTML = '';
    var unicode;
    if (JSON.parse(txt.value).isInterval == 'true') {
        setInterval(() => {
            unicode = String.fromCharCode(Math.floor(Math.random() * 65535));
            document.body.innerHTML = unicode;
        }, 1000)
    }
    unicode = String.fromCharCode(Math.floor(Math.random() * 65535));
    document.body.innerHTML = unicode;
}
