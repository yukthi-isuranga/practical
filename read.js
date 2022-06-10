var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
let studentRef = db.collection("student");
studentRef.get().then((querySnapshot) => {
  querySnapshot.forEach((snapshot) => console.log(snapshot.data()));
});
