let key;


function oncall() {  
    var data = new FormData(document.querySelector('form'));
    console.log(data.get('email'));
    console.log(data.get('password'));
        var useremail = data.get('email');
    var userpassword = data.get('password');

    firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
    
    .then(response => {

      key = response.key;
      window.location.replace("products.html")

    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);

        // ...
      });
}

function createuser() {
    var formdata = new FormData(document.querySelector('form'));
    var createemail = formdata.get('email');
    var createpassword = formdata.get('password');
    firebase.auth().createUserWithEmailAndPassword(createemail, createpassword)
    // alert("User created successfully")
    .then(response => window.location.replace("index.html"))
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(error.message);
        // ...
      });
}
 function getusers(){


    firebase.auth().updateUser("1GPeOqMWHMU6H0P6BkEGMxSVcTC2", {
        email: "hkhn567@gmail.com",
        // phoneNumber: "+11234567890",
        // emailVerified: true,
        // password: "newPassword",
        // displayName: "Jane Doe",
        // photoURL: "http://www.example.com/12345678/photo.png",
        // disabled: true
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully updated user", userRecord.toJSON());
        })
        .catch(function(error) {
          console.log("Error updating user:", error);
        });

 }
