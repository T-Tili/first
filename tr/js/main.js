// Initialize Firebase
var config = {
  apiKey: "AIzaSyCrqQqoSgB4datjgw4klyRLdH1M71HRkN8",
  authDomain: "skyland-a0ca9.firebaseapp.com",
  databaseURL: "https://skyland-a0ca9.firebaseio.com",
  projectId: "skyland-a0ca9",
  storageBucket: "skyland-a0ca9.appspot.com",
  messagingSenderId: "975972135547"
};
firebase.initializeApp(config);



var database = firebase.database();

// users tablosunda nevar neyok cek
database.ref("/users/").once("value").then(function(data) {
  console.log(data.val());
});


// Bu fonksiyonu cagirirsak users tablosunda bitane user yaratir
// saveUser(0, "test_user", "test@test.com");

function saveUser(userId, username, email) {
  firebase.database().ref("users/" + userId).set({
    username: username,
    email: email
  });
}
