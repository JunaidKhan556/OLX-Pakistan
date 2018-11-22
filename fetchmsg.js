
function fetchTodos(current, seller) {
    firebase.auth().onAuthStateChanged(function(user) {
        
    var uid = user.uid;
    var user = JSON.parse(localStorage.getItem('userId'));
    var table = document.querySelector('tbody');
    var commentsRef = database.ref().child(`chat/user/${current}/${seller}`);
    commentsRef.on('child_added', function (data) {
      console.log(data.val());
      var row = generateRow(data.val(), data.key);
      var tr = document.createElement('tr');
      table.innerHTML = row;
    });
    });
  }
  
  
  function generateRow(data, key) {
    return `<tr>
      <td>${data.msg}</td>
      
    </tr>`
  }