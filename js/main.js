//burger menu script 
const navSlide = () => { //makes a fuction named navSlide
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click',() => {
    
        //Toggle Nav
    nav.classList.toggle('nav-active');

    //Burger Toggle
    burger.classList.toggle('toggle');
    //Animate Links
    navLinks.forEach((link, index) => { //animates the transition for the menu in mobile 
        link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });
    });

}
navSlide();


//FORM VALIDERING 

const button = document.getElementById('send');

button.onclick = () => {
    //Check navn
    const navn = document.getElementById('navn');
    if (!navn.value) {
        //hvis ikke navn har en next sibling skal beskeden vises
        //og hvis den har skal den ikke gøre noget
        if (!navn.nextElementSibling) {
            //Vis alert meddelelse
            //alert('Udfyld dit navn!');
            //Eller indset et p tag med fejl meddelelse
            navn.insertAdjacentHTML('afterend', '<p class="error-msg">Udfyld dit navn!</p>');
        }
        //Sæt fokus på feltet
        navn.focus();

        //Bind event onkeypress til input feltet
        navn.onkeypress = () => {
            //Tjek om fejl er vist - altså om næste sibling findes
            if (navn.nextElementSibling) {

                //Fjern input objektets næste sibling
                navn.nextElementSibling.remove();
            }
        }

        //Bryd ud af funktion
        return false;
    }
    //Check Hjemby
    const hjemby = document.getElementById('hjemby');
    if (!hjemby.value) {
        //hvis ikke navn har en next sibling skal beskeden vises
        //og hvis den har skal den ikke gøre noget
        if (!hjemby.nextElementSibling) {
            //Vis alert meddelelse
            //alert('Udfyld dit navn!');
            //Eller indset et p tag med fejl meddelelse
            hjemby.insertAdjacentHTML('afterend', '<p class="error-msg">Udfyld din hjemby!</p>');
        }
        //Sæt fokus på feltet
        hjemby.focus();

        //Bind event onkeypress til input feltet
        hjemby.onkeypress = () => {
            //Tjek om fejl er vist - altså om næste sibling findes
            if (hjemby.nextElementSibling) {

                //Fjern input objektets næste sibling
                hjemby.nextElementSibling.remove();
            }
        }

        //Bryd ud af funktion
        return false;
    }

    //Check email
    const email = document.getElementById('email');
    if (!email.value) {
        //Vis alert meddelelse
        alert('Udfyld email!');
        //Eller indset et p tag med fejl meddelelse
        //email.insertAdjacentHTML('afterend', '<p class="error-msg">Enter email!</p>');
        //Sæt fokus på feltet
        email.focus();
        //Bryd ud af funktion
        return false;
    } else {
        if (!isValidEmail(email.value)) {
            //hvis ikke email er korrekt, skal denne besked vises
            alert('Udfyld valid email!');
            email.focus();
            return false;
        }
    }

    //Check nummer
    const number = document.getElementById('number');
    if (!number.value) {
        //hvis ikke navn har en next sibling skal beskeden vises
        //og hvis den har skal den ikke gøre noget
        if (!number.nextElementSibling) {
            //Vis alert meddelelse
            //alert('Udfyld dit nummer!');
            //Eller indset et p tag med fejl meddelelse
            number.insertAdjacentHTML('afterend', '<p class="error-msg">Udfyld dit nummer!</p>');
        }
        //Sæt fokus på feltet
        number.focus();

        //Bind event onkeypress til input feltet
        number.onkeypress = () => {
            //Tjek om fejl er vist - altså om næste sibling findes
            if (number.nextElementSibling) {

                //Fjern input objektets næste sibling
                number.nextElementSibling.remove();
            }
        }

        //Bryd ud af funktion
        return false;
    }

//    const tilmeld = document.getElementById('tilmeld');
  //  if (!tilmeld.checked) {
    //    if (!tilmeld.nextElementSibling) {
      //      alert('Click tilmeld!');
        //    tilmeld.insertAdjacentHTML('afterend', '<p class="error-msg">Click på tilmeld knappen!</p>');
        //}
        //tilmeld.focus();

        //tilmeld.onmousedown = () => {
          //  if (tilmeld.nextElementSibling) {

            //    tilmeld.nextElementSibling.remove();
            //}
       // }

       // return false;
    //}


    //Check område
    const omrade = document.getElementById('omrade');
    if (!omrade.value) {
        if (!omrade.nextElementSibling) {
            //Vis alert meddelelse
            //alert('Choose område!');
            //Eller indset et p tag med fejl meddelelse
            omrade.insertAdjacentHTML('afterend', '<p class="error-msg">Vælg område!</p>');
        }
        //Sæt fokus på feltet
        omrade.focus();

        //Bind event onmousedown til selectbox
        omrade.onmousedown = () => {
            console.log(this);
            //Tjek om fejl er vist - altså om næste sibling findes
            if (omrade.nextElementSibling) {

                //Fjern input objektets næste sibling
                omrade.nextElementSibling.remove();
            }
        }

        //Bryd ud af funktion
        return false;
    }

    //Vis en alert hvor der står "The form works! Press ok to go to landingpage"
    alert('Tak for din tilmelding!')

    //Eller gå til landingpage
    //location.href = 'landingpage.html';
}

//Tjekker om værdi har en gyldig email syntaks
function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}

console.log(this);


