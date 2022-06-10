var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//// my way
// const db = admin.firestore();
// for (let index = 0; index < 5; index++) {
//   const docRef = db.collection("employee").doc(index.toString());
//   docRef.set({
//     firstName: index,
//     lastName: index,
//     born: index,
//     age: index,
//     gender: index,
//   });
// }
// const docRef = db.collection("employee");
// docRef.get().then((querySnapshot) => {
//   querySnapshot.forEach((snapshot) => console.log(snapshot.data()));
// });

const db = admin.firestore();
const data ={
    id: 5,
    name: "lessy",
    age: 25,
    gender: "male",
}
db.collection("student").doc(data.id.toString()).set(data);