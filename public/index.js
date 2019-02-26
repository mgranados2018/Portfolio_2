$(document).ready(function(){
    $("#sub").on("click",function(event){
        event.preventDefault();

        console.log("button loads")

        var newcontact = {
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            message: $("#message").val().trim()
        };

        console.log(newcontact);

        $.ajax({
            method: "POST",
            url: "/api/create", 
            data: newcontact
        }).then(function(data){

            
            location.reload();
            console.log(data+"new contact added")
        });

        $("InputName").val("");
        $("InputEmail").val("");
        $("InputMessage").val("");


    });
});