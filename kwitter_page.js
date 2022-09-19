//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA3APOXyD833_ReNPp67N0UZ1WTMeTEkMs",
      authDomain: "kwitter-a6840.firebaseapp.com",
      databaseURL: "https://kwitter-a6840-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6840",
      storageBucket: "kwitter-a6840.appspot.com",
      messagingSenderId: "222452830875",
      appId: "1:222452830875:web:3822733e051df2a8b8ac3e"
    };
    
    
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         

//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"</h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
 like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>Likes:"+like+"</button>";
 row=name_with_tag+message_with_tag+like_button;
 document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
      });
}