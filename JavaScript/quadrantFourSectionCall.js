fetch('/Elements/quadrantFourSection.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('portfolio').innerHTML = data;
});