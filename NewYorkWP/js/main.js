console.log("ok");
//ucitavanje web stranice
$(document).ready(function (){
  $("#loading").fadeOut(1000);
})
//dinamicko ispisivanje navigacionog menija
 let ime=["Introduction","Destinations","Contact","About me"];
 let linkovi=["#start","#work","#contactForm","#aboutMe"];
let dinMeni="";
for(i in ime){
  dinMeni+=`
  <li class="nav-item col-md-3">
    <a class="nav-link tm-nav-link" href="${linkovi[i]}">${ime[i]}</a>
  </li>`
}
//dimaciko ispisivanje usluga kompanije
document.querySelector("#dinMeni").innerHTML=dinMeni;
let travelIcon=["fas fa-4x fa-bus text-center tm-icon", "fas fa-4x fa-bicycle text-center tm-icon", "fas fa-4x fa-helicopter text-center tm-icon"];
let travelH = ["City tour by bus", "Rent a bike", "Helicopter city tour"];
let travelP = [" If you want an organized trip without any problems and thinking, this offer is great for you. We offer you a bus ride and a walk past the most important places in New York with all our guides and profesional driver", " If you are a sports guy and do not like to share space with other people, we can meet you and rent you a bike. This offer allows you to travel without restrictions. With the bike you get a map of New York to help yourself to a big apple.", " And now the best but also the most extreme offer. A tour of a New York helicopter. We recommend this only to true enthusiasts and those who love extreme sports. And don't worry, everything is safe."];

let travel = "";
for(i in travelH){
  travel += `
  <div class="col-lg-4">
    <i class="${travelIcon[i]}"></i>
    <h4 class="text-center tm-text-primary mb-4">${travelH[i]}</h4>
    <p>${travelP[i]}</p>
  </div>`
}
document.querySelector("#travel").innerHTML=travel;

//fiksiran meni sa promenom boje
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
      $("#tmNav").addClass("nav-sticky");
      $("#tmNav").addClass("klasa");
      $(".carousel, .page-header").css("margin-top", "73px");
  }
   else {
      $('#tmNav').removeClass('nav-sticky');
      $('#tmNav').removeClass('klasa');
      $('.carousel, .page-header').css("margin-top", "0");
  }
});
//.innerHTML=travel;
// dinamicko ispisivanje i odbrojavanje
let facts = [
  ["fa fa-map-marker-alt", "15", "Locations"],
  ["fa fa-user", "100", "Guides"],
  ["fa fa-users", "1520", "Happy Clients"],
  ["fa fa-check", "563", "Excursions Completed"]
];
var rowFacts = "";
for(i in facts){
  rowFacts += `<article class="col-lg-3 col-md-5 col-sm-6 stat">
                  <div class="facts-item">
                      <i class="${facts[i][0]}"></i>
                      <div class="facts-text">
                          <h3 class="my-count">${facts[i][1]}</h3>
                          <p>${facts[i][2]}</p>
                      </div>
                  </div>
              </article>`
}
document.querySelector("#facts-article").innerHTML = rowFacts;
$('.my-count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

//slider za slike
$('#prv-testimonial').on('click', function(){
  let $last = $('#testimonial-list li:last');
  $last.remove().css({ 'margin-left': '-180px' });
  $('#testimonial-list li:first').before($last);
  $last.animate({ 'margin-left': '0px' }, 700);
});

$('#nxt-testimonial').on('click', function(){
  let $first = $('#testimonial-list li:first');
  $first.animate({ 'margin-left': '-180px' }, 700, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#testimonial-list li:last').after($first);
  });
});
//polako prikazivanje elemenata
const elementsArray = document.querySelectorAll(".showing");
window.addEventListener("scroll", fadeIn);
function fadeIn() {
  for (let i = 0; i < elementsArray.length; i++) {
    let elem = elementsArray[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();
//otvaranje hamburgera na klik
var toggler=document.querySelector(".navbar-toggler");
var hamburger=document.querySelector(".collapse");
toggler.addEventListener("click",function (){
  hamburger.classList.toggle("show");
  })

//Pojavljivanje logoa slovo po slovo
let slovo=0;
let tekst ="Perfect Vacation";
function message(){
    if(slovo<tekst.length){
        document.getElementById("uvod").innerHTML += tekst.charAt(slovo);
        slovo++;
        setTimeout(message,150);
    }
}
message();
// regularni Izrazi

let taster = document.querySelector('.btnProvera');


// regularni izrazi za imena i prezimena nemaju srpska slova jer je rec o americkom trzistu
    var regIme=/^[A-Z]{1}[a-z]{1,11}(\s[A-Z]{1}[a-z]{1,11})?$/;
    var regPrezime=/^[A-Z]{1}[a-z]{1,11}(\s[A-Z]{1}[a-z]{1,11})?$/;
    var regEmail=/^[a-z][\w\.\-]+\@[a-z0-9]{2,7}(\.[a-z]{2,4})?\.[a-z]{2,4}$/;
    var regTelefon=/^(\+1\s)[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/
    var regPoruka=/^([\w\.\-\s]{1,400})+$/
// $("#formIme").blur(function(){
  // proveraExp(regIme,"#formIme");
// })
// $("#formPrezime").blur(function(){
  // proveraExp(regPrezime,"#formPrezime");
// })
// $("#formEmail").blur(function(){
  // proveraExp(regEmail,"#formEmail");
// })
// $("#formTelefon").blur(function(){
  // proveraExp(regTelefon,"#formTelefon");
// })
// $("#formMessage").blur(function(){
  // proveraExp(regPoruka,"#formMessage");
// })
  // function proveraExp(regularniIzraz,poljeZaProveru){
    // if(!$(poljeZaProveru).val().match(regularniIzraz)){
      // $(poljeZaProveru).addClass('error');
      // return false;
    // }
    // else{
      // $(poljeZaProveru).removeClass('error')
      // $(poljeZaProveru).addClass('good');
      // return true;
    // }
    
  // }



  $(".btnProvera").click(function (e) {
    e.preventDefault();
  
    const ime = document.forma.ime;
    const prezime = document.forma.prezime;
    const email = document.forma.email;
    const tel = document.forma.tel;
    const poruka = document.forma.poruka;
  
    if (
      !$("#Autobus").is(":checked") ||
      !$("#Bike").is(":checked") ||
      !$("#Helikopter").is(":checked")
    ) {
      $("#greskaCheck").removeClass("nePrikazi");
    }
  
    if (
      ime.value == "" ||
      prezime.value == "" ||
      email.value == "" ||
      tel.value == ""
    ) {
      $(".form-control").css("border", "1px solid red");
      $("#error").removeClass("nePrikazi");
      return false;
    } else {
      $(".form-control").css("border", "1px solid blue");
    }
  
    if (
      (ime.value.match(regIme) &&
        prezime.value.match(regPrezime) &&
        email.value.match(regEmail) &&
        tel.value.match(regTelefon) &&
        poruka.value.match(regPoruka) &&
        $("#Autobus").is(":checked")) ||
      $("#Bike").is(":checked") ||
      $("#Helikopter").is(":checked")
    ) {
      $("#done").removeClass("nePrikazi");
      $("#error").addClass("nePrikazi");
  
      $("#greskaCheck").addClass("nePrikazi");
      return true;
    } else {
      $("#error").removeClass("nePrikazi");
      $("#done").addClass("nePrikazi");
      $("#greskaCheck").removeClass("nePrikazi");
      return false;
    }
  });
  
  $(".btnProvera").click(function (e) {
    e.preventDefault();
    $("#formIme").blur(function () {
      proveraExp(regIme, "#formIme");
    });
    $("#formPrezime").blur(function () {
      proveraExp(regPrezime, "#formPrezime");
    });
    $("#formEmail").blur(function () {
      proveraExp(regEmail, "#formEmail");
    });
    $("#formTelefon").blur(function () {
      proveraExp(regTelefon, "#formTelefon");
    });

   
    
    //   function proveraExp(regularniIzraz,poljeZaProveru){
    //     if(!$(poljeZaProveru).val().match(regularniIzraz)){
    //       $(poljeZaProveru).addClass('error');
    //       return false;
    //     }
    //     else{
    //       $(poljeZaProveru).removeClass('error')
    //       $(poljeZaProveru).addClass('good');
    //       return true;
    //     }
    //   }
    let brGresaka=0;
    let stanje=$('input[name:rbChoose]:checked')
    if($(stanje).length==0){
      brGresaka++;
      $('#rbChoose').removeClass('nePrikazi')
    }
    else{
      $('#rbChoose').next().text("");
    }
  })
  
  //dinamicko ispisivanje  footera
  let link = ["tel:+1 406 807 0201", "mailto:perfectVacation@gmail.com", "https://www.google.com/maps", "https://www.instagram.com", "../sitemap.xml", "../documentation.pdf"]
  let ikonice = ["fa-phone", "fa-envelope", "fa-map-marker-alt", " fa fa-instagram", "fa-sitemap", "fa-file"];
  let span = ["+1 646 1234567", "perfectVacation@gmail.com", "Manhattan 7th Avenue", "Instagram", "Sitemap", "Documnetation"];
  var footer="";
  for(i in link){
    footer+=`
    <div class="col-sm-12 col-md-6 d-flex align-items-center tm-contact-item">
      <a href="${link[i]}" class="tm-contact-item-link">
        <i class="fas fa-3x ${ikonice[i]} mr-4"></i>
        <span class="mb-0">${span[i]}</span>
      </a>              
    </div>`
  }
  document.querySelector("#footer-row").innerHTML=footer;
 
