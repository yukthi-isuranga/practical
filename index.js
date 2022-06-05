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

// const db = admin.firestore();
// let studentRef = db.collection("student");
// studentRef.get().then((querySnapshot) => {
//   querySnapshot.forEach(snapshot => console.log(snapshot.data()));
// });

const db = admin.firestore();
// const docRef = db.collection('employee');
for (let index = 0; index < 5; index++) {
  const docRef = db.collection("employee").doc(index.toString());

  docRef.set({
    firstName: index,
    lastName: index,
    born: index,
    age: index,
    gender: index,
  });
}

const docRef = db.collection('employee');
docRef.get().then((querySnapshot) => {
  querySnapshot.forEach(snapshot => console.log(snapshot.data()));
});
