fetch('/Elements/quadrantTwoSection.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('info').innerHTML = data;
});