// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPE2j6f10O4dVuK6mjVgmEPxhn8lxiTQw",
  authDomain: "hackatonlapositiva2018.firebaseapp.com",
  databaseURL: "https://hackatonlapositiva2018.firebaseio.com",
  projectId: "hackatonlapositiva2018",
  storageBucket: "hackatonlapositiva2018.appspot.com",
  messagingSenderId: "272740163938"
};
firebase.initializeApp(config);

// Guardar datos de login en BD
const saveData = (userId, name, email, imageUrl) => {
  firebase.database().ref('users/' + userId).
    set({
      username: name,
      email: email,
      picture: imageUrl,
      id: userId,
    });
}

// Registro de Usuarios Nuevos
const registerNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      const user = result.user;
      if (user.displayName == null) {
        username = document.getElementById('nameUser').value;
      } else {
        username = user.displayName;
      }
      if (user.photoURL == null) {
        picture = "https://thumbs.dreamstime.com/b/icono-del-usuario-46707697.jpg";
      } else {
        picture = user.photoURL;
      }
      saveData(user.uid, username, user.email, picture);
      check();
      alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión');
      formRegister.classList.add('hidden');
      formInicio.classList.remove('hidden');
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (error.message === 'auth/email-already-in-use') {
        validInputs.innerHTML = "El email ingresado ya está en uso";
      } else if (error.message === 'The email address is already in use by another account.') {
        validInputs.innerHTML = "El email está siendo utilizado por otro usuario";
      }
    })
}

// Inicio de sesión de usuario existente
let login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (error.message === 'The password is invalid or the user does not have a password.') {
        validInputs2.innerHTML = "email o password incorrectos";
      } else if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
        validInputs2.innerHTML = "Usuario no registrado";
      }
    });
}

// Validación de autenticación de usuarios
const validation = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
    }
    if (user.emailVerified) {
      window.location.href = 'timeline.html';
    } else {
      alert('Por favor valida tu correo');
    }
  });
}

// Login con Google
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      // Información de usuario
      const userData = result.user;
      saveData(userData.uid, userData.displayName, userData.email, userData.photoURL);
      window.location.href = 'timeline.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
}

// Validación de correo al usuario
const check = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
  }).catch((error) => {
  });
}

// Cambio de contraseña
const resetPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
    })
    .catch((error) => {
    })
}

// Función para cerrar sesion
const signOut = () => {
  firebase.auth().signOut().then(() => {
  }).catch((error) => {
  });
}

// Login con Facebook
const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      saveData(user.uid, user.displayName, user.email, user.photoURL);
      window.location.href = 'timeline.html';
    })
    .catch((error) => {
    });
}


// Función para editar Post
// ====================================
// window.editPost = (id) => {
//   const currentPost = document.getElementById(id);
//   const currentTextarea = currentPost.querySelector('.textarea-post');
//   currentTextarea.disabled = false;
//   const editButton = currentPost.querySelector('.edit-button');
//   const saveButton = currentPost.querySelector('.save-button');
//   editButton.classList.add('hidden');
//   saveButton.classList.remove('hidden');
//   currentTextarea.focus();
// }

// Función para guardar post editado
// ====================================
// window.savePostEdit = (id) => {
//   const currentPost = document.getElementById(id);
//   const currentTextarea = currentPost.querySelector('.textarea-post');
//   const editButton = currentPost.querySelector('.edit-button');
//   const saveButton = currentPost.querySelector('.save-button');
//   const userId = firebase.auth().currentUser.uid;

//   firebase.database().ref('posts/')
//     .once('value', (postsRef) => {
//       const posts = postsRef.val();
//       const postEdit = posts[id];

//       let postEditRef = {
//         id: postEdit.id,
//         author: postEdit.author,
//         newPost: currentTextarea.value,
//         privacy: postEdit.privacy,
//         likeCount: postEdit.likeCount,
//         usersLikes: postEdit.usersLikes || []
//       }

//       let updates = {};
//       updates['/posts/' + id] = postEditRef;
//       updates['/user-posts/' + userId + '/' + id] = postEditRef;
//       return firebase.database().ref().update(updates);

//       currentTextarea.disabled = true;
//       saveButton.classList.add('hidden');
//       editButton.classList.remove('hidden');
//     });
// }

