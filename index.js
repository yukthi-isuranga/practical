var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// const fetchBlogs = async () => {
//   const response = db.collection("student");
//   const data = await response.get();
//   data.docs.forEach((item) => {
//     console.log(item.data());
//   });
// };

const db = admin.firestore();
let studentRef = db.collection("student");
studentRef.get().then((querySnapshot) => {
  querySnapshot.forEach(snapshot => console.log(snapshot.data()));
});
