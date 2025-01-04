
fetch('/Elements/landingPage.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('landingPage').innerHTML = data;
});

fetch('/Elements/contacts.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('contacts').innerHTML = data;
});

fetch('/Elements/about.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('about').innerHTML = data;
});

fetch('/Elements/skills.html')
.then(Response => Response.text())
.then(data => {
   document.getElementById("skills").innerHTML = data;
});

fetch('/Elements/workExperience.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById("workExperience").innerHTML = data;
});

fetch('/Elements/education.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('education').innerHTML = data;
});

fetch('/Elements/projects.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('projects').innerHTML = data;
});

fetch('/Elements/header.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});





// fetch('/Elements/header.html')
// .then(Response => Response.text())
// .then(data => {
//     document.getElementById('header').innerHTML = data;
// });
