var database = firebase.database();
var userId;
function sendMsg() {
  var key = JSON.parse(localStorage.getItem('adKey'));
  console.log(key); 
  var user = JSON.parse(localStorage.getItem('userId'));
  userId = firebase.auth().currentUser.uid;
  if(user != userId){
    var bname = "Buyer";
  }
  else{
    var bname = "Seller";
  }
    console.log(bname);
  var cname = "You";
  
  console.log(userId);
  var form = new FormData(document.querySelector('form'));
  var buyer = database.ref().child(`chat/user/${key}`).push();
    buyer.set({
      msg: form.get('msg'),
      name: bname,
      uid: userId
    });
  document.querySelector('form').reset();
  
  return false;
}

function fetchMsg() {
  firebase.auth().onAuthStateChanged(function(user) {
  if(user){
  var uid = user.uid;
  var user = JSON.parse(localStorage.getItem('userId'));
  console.log(uid);
  //console.log(user);
  var user = JSON.parse(localStorage.getItem('userId'));
  var key = JSON.parse(localStorage.getItem('adKey'));
  var table = document.querySelector('tbody');
  var msgRef = database.ref().child(`chat/user/${key}`);
 
    msgRef.on('child_added', function (data) {
    console.log(data.val());
    var row = generateRow(data.val(), data.key, data.name);
    var tr = document.createElement('tr');
    table.innerHTML += row;
  });
  }
}); 
}

function generateRow(data, key, name) {
  return `<tr>
    <td>${data.name}: ${data.msg}</td>
  </tr>`
}