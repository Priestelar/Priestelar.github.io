fetch('/Elements/quadrantFourSection.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('portfolio').innerHTML = data;
});

fetch('/Elements/quadrantTwoSection.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('info').innerHTML = data;
});

fetch('/Elements/quadrantOneSection.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('moto').innerHTML = data;
});