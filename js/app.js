// $("#alert").hide()
window.onload = function(){
    let getOnLoad = JSON.parse(localStorage.getItem("regUser"));

    // checking if there is data in the local storage
        if(getOnLoad != null) { 

            // Yes there is data then set the new local storage 
            localStorage.setItem("reLoad", JSON.stringify(getOnLoad));

            // Then get the data back and push it to our users global array
            let checkUser = JSON.parse(localStorage.getItem("reLoad"));

            checkUser.forEach(function(item, index) {
                users.push(item)
            })

            // terminate the localStorage
            localStorage.removeItem("reLoad")


        }

} 

$(document).ready(function () {
    //     $("#reg-btn").click(function(e){
    //         e.preventDefault()



    //     let registerName = $("#reg-name").val();
    //     let registerEmail = $("#reg-email").val();
    //     let registerPassword = $("#reg-password").val();



    //     // alert(registerName)
    //     let newUserInfo = {
    //         registerName : registerName,
    //         registerEmail : registerEmail,
    //         registerPassword : registerPassword
    //     }
    //     // to chseck an user filled in the inputs
    //     if(registerName == 0 && registerEmail == 0 && registerPassword == 0){
    //         alert("please put in your details")
    //     }
    //     else if(registerName == 0){
    //         alert("please input your name")
    //     }
    //     else if(registerEmail == 0){
    //         alert("please put your email")
    //     }
    //     else if (registerPassword == 0){
    //         alert("please put your password")
    //     }
    //     else{
    //         let userInput = localStorage.getItem("user");
    //         if(userInput){
    //             userInput = JSON.parse(userInput)

    //         }else{
    //             userInput = []
    //         }


    //         userInput.push(newUserInfo)
    //     localStorage.setItem("myusers", JSON.stringify(userInput));

    //     }

    // })
   

    people = [];

    let submit = $("#reg-btn").click(function (e) {
        e.preventDefault()



        let registerName = $("#reg-name").val();
        let registerEmail = $("#reg-email").val();
        let registerPassword = $("#reg-password").val();

        let errors = $(".errmsg");

        // checking if input is empty
        if (registerName == 0 && registerEmail == 0 && registerPassword == 0) {
            errors.append(`<div class='alert bg-warning'>Please Enter Your Details
            <button class='close' data-dismiss='alert'>&times;</button>
            </div>
            `);
        }
        else if (registerName.length == 0) {
            errors.append(`<div class='alert bg-warning'>Please Enter Your Name
            <button class='close' data-dismiss='alert'>&times;</button>
            </div>
            `);
        }
        else if (registerEmail.length == 0) {
            errors.append(`<div class='alert bg-warning'>Please Enter Your Email
            <button class='close' data-dismiss='alert'>&times;</button>
            </div>
            `);
        }
        else if (registerPassword.length == 0) {
            errors.append(`<div class='alert bg-warning'>Please Enter Your Password
            <button class='close' data-dismiss='alert'>&times;</button>
            </div>
            `);
        }
        // setting the local storage for users for the first time
        if (registerName != 0 && registerEmail != 0 && registerPassword != 0) {

            let makeUserNull = JSON.parse(localStorage.getItem("regUser"));

            if (makeUserNull == null) {

                let person = {
                    registerName: registerName,
                    registerEmail: registerEmail,
                    registerPassword: registerPassword
                }

                people.push(person);

                localStorage.setItem("regUser", JSON.stringify(people));

                errors.append(`<div class='alert bg-warning'>registered successfully
                <button class='close' data-dismiss='alert'>&times;</button>
                </div>`)
                $("#reg-name").val("");
                $("#reg-email").val("");
                $("#reg-password").val("");
                window.location.href  ="index.html"

            }
            else {
                let success_tracker = [];

                //loop through the array to check for the user's email exist

                for (let i = 0; i < makeUserNull.length; i++) {

                    if (makeUserNull[i].registerEmail == registerEmail) {
                        //the user exists already
                        success_tracker.push(makeUserNull[i].registerEmail);
                        break;
                    }
                }

                if (success_tracker.length > 0) {
                    //the user exists already
                    errors.append(`<div class='alert bg-warning'>User with the ${registerEmail} Already Exist.
                    <button class='close' data-dismiss='alert'>&times;</button>
                    </div>`)

                    // $("#reg-name").val("");
                    $("#reg-email").val("");
                    // $("#reg-password").val("");


                } else {
                    let pippy = {
                        registerName: registerName,
                        registerEmail: registerEmail,
                        registerPassword: registerPassword
                    }
                    people.push(pippy);

                    localStorage.setItem("regUser", JSON.stringify(people));

                    errors.append(`<div class='alert bg-warning'>registered successfully
                <button class='close' data-dismiss='alert'>&times;</button>
                </div>`)
                    $("#reg-name").val("");
                    $("#reg-email").val("");
                    $("#reg-password").val("");


                }
            }
        }
    })
})
