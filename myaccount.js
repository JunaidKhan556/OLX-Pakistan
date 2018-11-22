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
    var userId = firebase.auth().currentUser.uid;
  if(data.user === userId)
  {
  return `<tr>
    <td><img src = "${data.imageURL}" width = "150px" height="150px"/></td>
    <td style="vertical-align:middle">${data.title}</td>
    <td style="vertical-align:middle">${data.description}</td>
    <td style="vertical-align:middle">${data.category}</td>
    <td style="vertical-align:middle">${data.name}</td>
    <td style="vertical-align:middle">${data.number}</td>
    <td style="vertical-align:middle">${data.city}</td>
    <td style="vertical-align:middle">Rs ${data.price}</td>
    <td style="vertical-align:middle"><button class='btn btn-danger' onclick="deleteRow('${key}',this)">Delete Ad</button></td>
  </tr>`
  }
  else{
    return '';
  }
}
 

function deleteRow(key, row) {
  document.querySelector('tbody').removeChild(row.parentElement.parentElement);
  var ref = database.ref('userad/' + key).set({});
}

