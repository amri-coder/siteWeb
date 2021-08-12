document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
    var nomReg = new RegExp(/^[a-zA-Z]+$/gm);
    var erreurNom;
    var erreurEmail;
    var erreurTextarea;
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var textarea = document.getElementById("textarea");
    
    if ((!nomReg.test(nom.value))&&(!nom.value)) {
      erreurNom = "Veuillez saisir un nom correct !";
    }
    if (erreurNom) {
      e.preventDefault();
      document.getElementById("nomManquant").innerHTML = erreurNom;
      document.getElementById("bouton").innerHTML = "Vous n'avez pas rempli tous les champs obligatoires";
    }
    if (!email.value) {
      erreurEmail = "Veuillez saisir votre e-mail !";
    }
    else if (!emailReg.test(email.value)) {
      erreurEmail = "Adresse e-mail non valide";
    }
    if (erreurEmail) {
      e.preventDefault();
      document.getElementById("emailManquant").innerHTML = erreurEmail;
      document.getElementById("bouton").innerHTML = "Vous n'avez pas rempli tous les champs obligatoires";
    }
    if(!textarea.value){
      erreurTextarea="Veuillez saisir votre message !";
    }
    if(erreurTextarea){
      e.preventDefault();
      document.getElementById("textareaManquant").innerHTML = erreurTextarea;
      document.getElementById("bouton").innerHTML = "Vous n'avez pas rempli tous les champs obligatoires";
    }
  });

/*
  img = document.querySelectorAll("img");


    img.forEach(image => {
      image.addEventListener("mouseover", function () {

        image.src = "images/" + image.id + "_2.jpg";

      })
    })

    img.forEach(image => {
      image.addEventListener("mouseout", function () {
        image.src = "images/" + image.id + ".jpg";
      })
    })

*/
