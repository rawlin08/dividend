const theForm = document.querySelector('form');
const ticker = document.querySelector('textarea');

theForm.addEventListener('submit', lookUp);

function lookUp(e) {
    e.preventDefault()
    fetch(`https://api.polygon.io/v3/reference/dividends?ticker=${ticker.value.toUpperCase()}&apiKey=TKVSXdx635Dera7_JxMwbX3fQBc1Q77t`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
    });
}