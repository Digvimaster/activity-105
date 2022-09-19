
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA3APOXyD833_ReNPp67N0UZ1WTMeTEkMs",
      authDomain: "kwitter-a6840.firebaseapp.com",
      databaseURL: "https://kwitter-a6840-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6840",
      storageBucket: "kwitter-a6840.appspot.com",
      messagingSenderId: "222452830875",
      appId: "1:222452830875:web:3822733e051df2a8b8ac3e"
    };
    
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("Room Name-"+Room_Names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
