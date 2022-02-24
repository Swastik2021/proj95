// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDQyvO3UpFOHCYdXH1GE2hEqmQw74ydptM",
      authDomain: "lets-chat-29fe2.firebaseapp.com",
      databaseURL: "https://lets-chat-29fe2-default-rtdb.firebaseio.com",
      projectId: "lets-chat-29fe2",
      storageBucket: "lets-chat-29fe2.appspot.com",
      messagingSenderId: "358799426341",
      appId: "1:358799426341:web:7f5b6b17fdfd6a954510cc"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("User-name")
document.getElementById("user_name").innerHTML= "Welcome "+user_name;
function addRoom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("Room_Name", room_name);
      firebase.database().ref('/').child(room_name).update({
            purpose: " adding_room_name"
      })
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='RedirectRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function RedirectRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}
