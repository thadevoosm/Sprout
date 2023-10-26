const firebaseConfig = {
    apiKey: "AIzaSyDMNe_YsTXoYamyS4hQgvU5gRyOhP5d4Mk",
    authDomain: "my-project-1560867017489.firebaseapp.com",
    projectId: "my-project-1560867017489",
    storageBucket: "my-project-1560867017489.appspot.com",
    messagingSenderId: "119535200138",
    appId: "1:119535200138:web:d4b4ffddbf9278bb4f4a73"
  };

  firebase.initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  var SingleKey = db.collection("sprout");

  SingleKey.get().then((doc) =>{
    if(doc = true){
        console.log("noKEY");
    }
    else{
        console.log("noKEY");
    }
  }).catch((e)=>{
    console.log(`Error: ${e}`);
  });