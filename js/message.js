function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('navbar-menu-open');
    
    var navbarToggle = document.querySelector('.navbar-toggle');
    navbarToggle.classList.toggle('open');
    
    var isOpen = navbarToggle.classList.contains('open');
    navbarToggle.setAttribute('aria-expanded', isOpen);
  }
document.getElementById("help-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  });
  var number = 1;
  function validateForm (){
    var name = document.forms["help-form"]["nama"].value;
    const email = document.forms["help-form"]["email"].value;
    const messages = document.forms["help-form"]["pesan"].value;
    if (email ==""||messages == "") {
        alert ("tolong disisi datanya (^_^).....");
        return false;
    } else {
        if (name == "") {
            name = "anonim";
        }
    }
    setSenderUI(number,name,email,messages);
    number++;
    return false;
}

function setSenderUI(number,name,email, messages) {
    // tambahkan data baru ke dalam tabel
    var table = document.getElementById("table-data");
    
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = number;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = messages;

  }
