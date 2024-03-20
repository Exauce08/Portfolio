/* ==================basculer avec les icons de la barre de navigation============*/
let menuIcon = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navigation.classList.toggle('active');

};
/*
window.onload = function() {
    // Fonction pour faire défiler jusqu'à la section contenant le formulaire
    function scrollToContacts() {
        var contactsSection = document.getElementById('contacts');
        contactsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Ajoutez un écouteur d'événements au bouton pour déclencher le défilement
    var scrollButton = document.getElementById('btn-talk');
    scrollButton.addEventListener('click', scrollToContacts);
};*/

/* ==================scroll lien active des section============*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let light = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

    /*========== sticker navbar======== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ==================supprimer le basculement des icons de la barre de navigation quand on clique sur cette dernière============*/

    menuIcon.classList.remove('bx-x');
    navigation.classList.remove('active');

};

 /*========== scroll reveal======== */
 ScrollReveal({ 
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .competences-container, .portfolio-box, .contact form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

  /*========== typed jsl======== */
  const typed = new Typed('.multiple-text', {

    strings: ['étudiante','en recherche d\'alternance' ],
    typeSpeed: 100,
    backSpeed:100,
    backDeplay:1000,
    loop: true
  });

  document.getElementById('monFormulaire').addEventListener('submit', function(event) {
    // Validation du formulaire ici
    var nom = document.getElementById('nom').value.trim();
    var email = document.getElementById('email').value.trim();
    var numero= document.getElementById('numero').value.trim()
    var message = document.getElementById('message').value.trim();

    if (nom === '' || email === '' || message === '' || numero==='') {
        alert('Veuillez remplir tous les champs du formulaire.');
        Event.preventDefault(); // Empêcher l'envoi du formulaire
    }
});


