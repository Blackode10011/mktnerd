//  Logging the user off
$("#logOff").click(function(){
    firebase.auth().signOut().then(function(res){
     M.toast({html: "Logged off!", res})
     setTimeout(() => {
        location.href = "login.html"
     }, 2500);
     
    }).catch(function(err){
 console.log(err)
    })
 })