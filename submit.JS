var database = firebase.database();
var storage = firebase.storage();

function submitad() {
  var form = new FormData(document.querySelector('form'));
  var userId = firebase.auth().currentUser.uid;
  var adid = Math.floor(Math.random() * 1001);
  var file = document.getElementById('file').files[0];
  console.log(file);
  var fileUpload = storage.ref('image/' + file.name);
  fileUpload.put(file)
    .then(x => {
      return x.ref.getDownloadURL()
    })
    .then(url => {
      console.log(url)
      var newTodoRef = database.ref().child('userad').push();
      newTodoRef.set({
        title: form.get('title'),
        category: form.get('category'),
        description: form.get('description'),
        price: form.get('price'),
        name: form.get('Name'),
        number: form.get('number'),
        city: form.get('city'),
        user: userId,
        adid: adid,
        imageURL:url
      });
      document.querySelector('form').reset();
    })
    .catch(err => {
      console.log(err)
    });

}