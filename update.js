var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
db.collection("student")
  .doc("5")
  .onSnapshot((docSnapshot) => {
    console.log(docSnapshot.data());
  });
