var database = firebase.database();

function fetchData() {
  firebase.auth().onAuthStateChanged(function(user) {
  if(user){
  var adid = JSON.parse(localStorage.getItem('adId'));
  var table = document.querySelector('tbody');
  var commentsRef = firebase.database().ref().child(`favourite/${user.uid}`);
  commentsRef.on('child_added', function (data) {
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
    <td>${data.description}</td>
    <td>${data.category}</td>
    <td>${data.name}</td>
    <td>${data.number}</td>
    <td>${data.city}</td>
    <td>${data.price}</td>
    <td><button class='btn btn2' onclick="chat('${key}',this,'${data.user}','${data.name}')">Message</button></td>
    </tr>`
  }
   
  
  function chat(key, row, userid, name) {
    localStorage.setItem('adKey',JSON.stringify(key));
    localStorage.setItem('userId',JSON.stringify(userid));
    localStorage.setItem('username',JSON.stringify(name));
    window.location.replace("messages.html");
    /*
    document.querySelector('tbody').removeChild(row.parentElement.parentElement);
    var ref = database.ref('userad/' + key).set({});*/
  }