var database = firebase.database();

function fetchData() {
  var table = document.querySelector('tbody');
  var commentsRef = firebase.database().ref().child('userad');
  commentsRef.on('child_added', function (data) {
    console.log(data.val());
    var row = generateRow(data.val(), data.key);
    var tr = document.createElement('tr');
    table.innerHTML += row;
    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });
}

function generateRow(data, key) {
  console.log(data.adid);
  var userId = firebase.auth().currentUser.uid;
  return `<tr>
    <td><img src = "${data.imageURL}" width = "150px" height="150px"/></td>
    <td>${data.title}</td>
    <td>${data.description}</td>
    <td>${data.category}</td>
    <td>${data.name}</td>
    <td>${data.number}</td>
    <td>${data.city}</td>
    <td>${data.price}</td>
    <td><button class='btn btn2' onclick="chat('${key}',this,'${data.user}','${data.name}','${userId}')">Message</button></td>
    <td><button class='btn btn-success' onclick="fav('${key}',this,'${data.adid}','${data.imageURL}','${data.title}','${data.description}','${data.category}',
    '${data.name}','${data.number}','${data.city}','${data.price}','${userId}')">Favourite</button></td>

    </tr>`
}
 

function chat(key, row, userid, name, msgId) {
  var visRef = database.ref().child(`userad/${key}/visitors`).push();
  visRef.set({
    uid: msgId
  });
  localStorage.setItem('adKey',JSON.stringify(key));
  localStorage.setItem('userId',JSON.stringify(userid));
  localStorage.setItem('username',JSON.stringify(name));
  window.location.replace("messages.html");
}
function fav(key, row, adid,image,title,description,category,name,number,city,price,user){
  var favRef = database.ref().child(`favourite/${user}`).push();
  favRef.set({
    title: title,
    category: category,
    description: description,
    price: price,
    name: name,
    number: number,
    city: city,
    user: user,
    adid: adid,
    imageURL: image
  });
  alert("The ad has been added to your favourite Ads.");
}