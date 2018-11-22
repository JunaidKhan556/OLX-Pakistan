var database = firebase.database();

function fetchData() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
    var uid = user.uid;
  var table = document.querySelector('tbody');
  var commentsRef = firebase.database().ref().child(`userad`);
  commentsRef.orderByChild("uid").equalTo(`${uid}`).on('child_added', function (data) {
    console.log(data.val());
    var row = generateRow(data.val(), data.key);
    var tr = document.createElement('tr');
    table.innerHTML += row;
    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });
  }
  });
}

function generateRow(data, key) {
  return `<tr>
    <td><img src = "${data.imageURL}" width = "150px" height="150px"/></td>
    <td>${data.title}</td>
    <td>${data.name}</td>
    <td></td>
    <td><button class='btn btn2' onclick="chat('${key}',this,'${data.user}','${data.name}')">Message</button></td>
  </tr>`
}

function chat(key, row, userid, name) {
  localStorage.setItem('adKey',JSON.stringify(key));
  localStorage.setItem('userId',JSON.stringify(userid));
  localStorage.setItem('username',JSON.stringify(name));
  window.location.replace("messages.html");
  
}