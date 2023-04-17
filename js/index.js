var nama = prompt("masukkan nama anda ^_^ ....");
document.getElementById("nama-kita").innerText = nama;
document.getElementById("msg-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    validateForm(); 
  });
  function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('navbar-menu-open');
    
    var navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.classList.toggle('open');
    
    var isOpen = navbarToggle.classList.contains('open');
    navbarToggle.setAttribute('aria-expanded', isOpen);
  }
function validateForm (){
    var name = document.forms["msg-form"]["nama"].value;
    const birthdate = document.forms["msg-form"]["tgl-lahir"].value;
    const gender = document.forms["msg-form"]["kelamin"].value;
    const messages = document.forms["msg-form"]["pesan"].value;
    var today = new Date();
     
    if (birthdate == ""||gender ==""||messages == "") {
        alert ("tolong disisi datanya (^_^).....");
        return false;
    } else {
        if (name == "") {
            name = "anonim";
        }
    }
    var newToday = today.toString().slice(0, 33);
    setSenderUI(name,birthdate,gender,messages,newToday);
    const text = document.createTextNode("Ini adalah ide saya.");
    const senderMessages = document.querySelector("#sender-messages");
    var newElement = document.createElement("h1");
    // membuat teks baru
    var newContent = document.createTextNode("terima kasih telah menyumbangkan ide anda (-^_^-)");
    // menyisipkan teks ke dalam elemen baru
    newElement.appendChild(newContent);
    // menyisipkan elemen baru ke dalam elemen dengan id 'sender-messages'
    document.getElementById("sender-messages").appendChild(newElement);
    return false;
}

function setSenderUI (name,birthdate,gender,messages,newToday){
    document.getElementById("sender-time").innerText= newToday;
    document.getElementById("sender-full-name").innerText= name;
    document.getElementById("sender-birthDate").innerText= birthdate;
    document.getElementById("sender-gender").innerText= gender;
    document.getElementById("sender-messages").innerText= messages;
}  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
const slides = document.querySelectorAll("mySlides");
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


