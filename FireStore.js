src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>
src="https://www.gstatic.com/firebasejs/8.9.0/firebase-auth.js"></script>
src="https://www.gstatic.com/firebasejs/8.9.0/firebase-firestore.js"></script>


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAvCcIJW4yS1i3mcVSMlsXCNHEm5PJLoJk",
  authDomain: "sitoweb-40fe9.firebaseapp.com",
  projectId: "sitoweb-40fe9",
  storageBucket: "sitoweb-40fe9.appspot.com",
  messagingSenderId: "777813739819",
  appId: "1:777813739819:web:661f72c96e182618bc9d6e"
};

firebase.initializeApp(firebaseConfig);
let cloudDB = firebase.firestore();

function ciro(){
 cloudDB.collection("ciru").add("peppe");
 console.log("peppeeee");
 };

 document.getElementById("ciruzzo").onclick=function(){ciro()}
 style.class ClassName {
   constructor() {

   }
 }
