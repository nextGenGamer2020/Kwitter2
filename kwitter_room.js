
const firebaseConfig = {
      apiKey: "AIzaSyBf5CDq7HSM1FqwGRaQqDkKSd18cRh8ODE",
      authDomain: "kwitter-f52ba.firebaseapp.com",
      databaseURL: "https://kwitter-f52ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-f52ba",
      storageBucket: "kwitter-f52ba.appspot.com",
      messagingSenderId: "1032836990882",
      appId: "1:1032836990882:web:c4512b78a77bfa246614fb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
