
var index = 1;



    imageSlider(index);

    
function onClickSlide(n){
    imageSlider(index += n);
}

function currentImg(n){
    imageSlider(index = n);
}

function imageSlider(n){
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dots');
    if(n > slides.length){
        index = 1;
    }
    if(n < 1){
        index = slides.length;
    }
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(var i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
     slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    index += 1;
}


window.onload = function(){
    setInterval(function() {
        imageSlider(index)
    },5000);
}





// var modal = document.getElementById("myModal");
// var log = document.getElementsByClassName("btn1")[0];
// var cls = document.getElementsByClassName("btn4")[0];

// log.onclick = function() {
//     modal.style.display = "block";
// }

// cls.onclick = function(){
//     modal.style.display ="none";
// }


var modal = document.getElementById('myModal');


var btn = document.getElementsByClassName("btn1")[0];

var cls = document.getElementsByClassName("btn4")[0];

/*
btn.onclick = function() {
    modal.style.display = "block";
}


cls.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/


var smodal = document.getElementById('signupModal');
var sbtn = document.getElementsByClassName("btn2")[0];
var scls = document.getElementsByClassName("btn4")[1];
sbtn.onclick = function() {
    smodal.style.display = "block";
}


scls.onclick = function() {
    smodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == smodal) {
        smodal.style.display = "none";
    }
}




var cmodal = document.getElementById('cartModal');
var cbtn = document.getElementById('cartbtn');
var ccls = document.getElementsByClassName("btn4")[2];
cbtn.onclick = function() {
    cmodal.style.display = "block";
}


ccls.onclick = function() {
    cmodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == cmodal) {
        cmodal.style.display = "none";
    }
}

function signUp(){
    var name = document.getElementById("usrName").value;
    var email = document.getElementById("usrEmail").value;
    var pass = document.getElementById("usrPass").value;
    var p = document.getElementById("demo");
    var cartOwner = document.getElementById('cartowner');
    if(name == ""){
        p.innerHTML = "You must Enter your Name";
        
    }
    else if(email == ""){
        p.innerHTML = "You must Enter your Email";
    }
    
    else if( email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        p.innerHTML = "Enter valid Email";
    }
    else if(pass == ""){
        p.innerHTML = "You must Enter your Password";
    }
    else if(pass.length < 8){
        p.innerHTML = "Your Password is too short";
    }
    else{

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);
    p.innerHTML = "Registration Completed!";
        var x = document.getElementById("signs");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


    smodal.style.display = "none";
    modal.style.display = "block";
    cartOwner.innerHTML = name + "'s Shopping Cart"
    }
    
}
var myVar = setInterval(function () { setColor() }, 300);

function setColor() {
    var x = document.getElementById('demo')
    //   var x = document.body;
    x.style.color = x.style.color == "rgba(255, 255, 255, 0)" ? "red" : "rgba(255, 255, 255, 0)";
}



function logIn(){
   
    var email = document.getElementById("urEmail").value;
    var pass = document.getElementById("urPass").value;
    var par = document.getElementById("demolog");
    var usrEmail = localStorage.getItem("userEmail");
    var usrPass = localStorage.getItem("userPass");
    var cartButton = document.getElementById('cartbtn');
    var logbtn = document.getElementById('loginbtn');
    var signbtn = document.getElementById('signupbtn');
    var disaddbtn = document.getElementsByClassName('disablebtn');
    var addBtn = document.getElementsByClassName('addbtn');
     if(email == ""){
        par.innerHTML = "You must Enter your Email";
    }
    
    else if( email.indexOf("@") == "-1" || email.lastIndexOf(".com") == "-1"){
        par.innerHTML = "Enter valid Email";
    }
    else if(pass == ""){
        par.innerHTML = "You must Enter your Password";
    }
    else if(email != usrEmail || pass != usrPass){
        par.innerHTML = "LOGIN FAILED! You Entered Wrong Details.";
    }
    else if(email === usrEmail && pass === usrPass){
        
        var x = document.getElementById("logins");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


        par.innerHTML = "Login Successfully...!";

        modal.style.display = "none";
        logbtn.style.display = "none";
        signbtn.style.display = "none";
        cartButton.style.display = "inline";
        for(var i = 0; i < disaddbtn.length; i++){
            disaddbtn[i].style.display = "none";    
        }
        for(var j = 0; j < addBtn.length; j++){
            addBtn[j].style.display = "inline";    
        }



    }
}
var myVar1 = setInterval(function () { setColor1() }, 300);
function setColor1() {
    var x = document.getElementById('demolog')
    //   var x = document.body;
    x.style.color = x.style.color == "rgba(255, 255, 255, 0)" ? "red" : "rgba(255, 255, 255, 0)";
}


function addToCart(a){
    var x = document.getElementById("message");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    document.getElementById("addbtn" + a).style.display = "none";
    document.getElementById("added" + a).style.display = "inline";
    document.getElementById("noitm").style.display = "none";

    var table = document.getElementById('tbl');
        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var image = document.createElement('img');
        image.src = a + ".jpg";
        col1.appendChild(image);

        var col2 = document.createElement('td');
        col2.appendChild(document.createTextNode("Product " + a));

        var col3 = document.createElement('td');
        var prc = document.createElement('p');
        var prdPrc = document.getElementById('price' + a);
        prc.innerHTML = prdPrc.innerHTML;
        col3.appendChild(prc);

        var col4 = document.createElement('td');
        var font = document.createElement('i');
        font.className = "fa fa-trash";
        font.onclick = function dlt(){
            table.removeChild(this.parentNode.parentNode);
            document.getElementById("addbtn" + a).style.display = "inline";
            document.getElementById("added" + a).style.display = "none";
        }
        col4.appendChild(font);


        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        table.appendChild(row);    
}




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
