const btn = document.querySelector('button.menu-button');
const menu = document.querySelector('.m-list');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "faithmecha2@gmail.com",
        Password: "EF09A33A5F3DDDFE86E95957E3E02563B29D",
        To: 'faithmecha2.com',
        From: document.getElementById("email").value,
        Subject: "New Portfolio Inquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}