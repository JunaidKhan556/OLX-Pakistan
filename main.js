
var mainapp = {};
(function (){
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        } else {
            uid = null;
            window.location.replace("index.html");
        }
      });
})()

function logout(){
    firebase.auth().signOut().then(function (){
        // Signout Successfully
        window.location.replace("index.html");
    }).catch(function (error){
        console.log(error);
    });
}


    function myfunction()
    {
       // console.log("i am here");
        
       document.getElementById("demo").innerHTML = "i m here!";
        
     //   domElem = document.getElementById("data");
     //   domElem.innerHTML="i m here!";
    }


    
 