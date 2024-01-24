const onSignup = () => {
    const First_name = document.getElementById("Firstname").value;
    const Last_name = document.getElementById("Lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userAccount) => {
           db.collection("users").doc().set({First_name,Last_name,email ,created_at:new Date()})
           console.log(userAccount);
           })
           .then((userprofile)=>{
            alert("User registered successfully")
            console.log(userprofile);
        }).catch((error)=>{
            alert("registered not successfully")
            console.log(error);
        })
        .catch((error) => {
            alert("error occur");
            console.log(error);
        });
};
