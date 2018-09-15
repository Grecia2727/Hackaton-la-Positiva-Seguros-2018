const outButton = document.getElementById('signOut');
const outButton1 = document.getElementById('signOut1');
const publicButton = document.getElementById('buttonPost');
const selectPrivacy = document.getElementById('privacy');
const publications = document.getElementById('publications');
const startButton = document.getElementById('start');
const startButton1 = document.getElementById('start1');
const myPostButton = document.getElementById('myPost');
const myPostButton1 = document.getElementById('myPost1');
const validPost = document.getElementById('valid-post');

// Inicializando el side-nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Inicializando select de privacidad del post
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
    
// Cerrar sesión (NavBar)
if (outButton1 != null){
outButton1.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
});
}

// Cerrar sesión
if (outButton != null){
outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
});
}

// if (publicButton != null){
// publicButton.addEventListener('click', () => {
//   let userId = firebase.auth().currentUser.uid;
//   firebase.database().ref('/users/' + userId).once('value')
//     .then((user) => {
//     const nameUser = (user.val().username);
//     let newPost = document.getElementById('post').value;
//     let state = selectPrivacy.value;
//     if (selectPrivacy.value != '0' && validationPublicPost(newPost)) {
//       writeNewPost(userId, nameUser, newPost, state);
//       printPost();
//       document.getElementById('post').value = '';
//       document.getElementById('privacy').value = '0';
//       validPost.innerHTML = '';
//     } else {
//       validPost.innerHTML = '* ¡Selecciona privacidad y/o escribe un mensaje! *';
//     }
//   })
// })
// }

// if (startButton != null){
// startButton.addEventListener('click', () => {
//   printPost();
// })
// }
 
// if (myPostButton != null){
// myPostButton.addEventListener('click', () => {
//   showMyPost();
// })
// }

// if (startButton1 != null){
// startButton1.addEventListener('click', () => {
//   printPost();
// })
// }

// if (myPostButton1 != null){  
// myPostButton1.addEventListener('click', () => {
//   let userId = firebase.auth().currentUser.uid;
//   showMyPost(userId);
// })
// }
      