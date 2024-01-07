const firebaseConfig = {
    apiKey: "AIzaSyDtEi9xblQ9jLmu1hiBgzQxFo4MG3Kw5oc",
    authDomain: "example-ef896.firebaseapp.com",
    projectId: "example-ef896",
    storageBucket: "example-ef896.appspot.com",
    messagingSenderId: "423848112349",
    appId: "1:423848112349:web:7166d9d2b69f8265b8eb34",
    measurementId: "G-KTYLB362X7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  function signUp(){
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      auth.createUserWithEmailAndPassword(email,password)
      .then((userCredential)=>{
          const user = userCredential.user;
          showUserInfo(user);
          })
          .catch((error)=>{
              console.error('Error signing up:',error.message);
              });
  
  }    
  function signIn(){
      var email=document.getElementById("email").value;
      var password=document.getElementById("password").value;
      auth.signInWithEmailAndPassword(email,password)
      .then((userCredential)=>{
         const user = userCredential.user;
          showUserInfo(user);
          })
          .catch((error)=> {
              alert(error.code + ' Error signing up: '+ error.message);
              });
  } 