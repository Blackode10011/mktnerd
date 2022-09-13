firebase.auth().onAuthStateChanged((user)=> {

    if(user){

        $("#modal1").hide({})
       location.href = "index.html"

    } else {

        $("#modal1").show({})
        // location.href = "login.html"
    }
})
$("#recover").click(function(){
    $("#modal1").hide({})
    $("#modal2").show({})
})
$("#goBackModal").click(function(){
    $("#modal2").hide({})
    $("#modal1").show({})
})

// Try to login the user

$("#login").click(function(){
    if ($("#user").val() == "" || $("#pass").val() == "") {
        M.toast({html: 'Campo vazio!'})
    } else {
        var email = $("#user").val()
        var password = $("#pass").val()
       
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user.uid)
          M.toast({html: 'Authenticated!'})
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          M.toast({html: errorMessage})
          // ...
        });

    }
})


