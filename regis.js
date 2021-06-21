function validasi(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;
    let full_name = document.getElementById("full-name").value;
    let gender = document.getElementById("genders")
    let email = document.getElementById("email").value;
    let age  = document.getElementById("age").value;
    let agreement = document.getElementById("customer-agreement")
    // cek kosong ato gk
    if(username === ""){
        alert("Username can't be empty")
        return false;
    }else{
        if(username.length < 4){
            alert("Username should be filled with minimum 4 characters")
            return false;
        }
    }
    if(password ===""){
        alert("Password can't be empty")
        return false;
    }else{
        if(password.length < 8){
            alert("Password should be more than 8 characters and also AlphaNumeric")
            return false;
        }else{
            let i = 0;
            let char =""
            let number =0;
            let lower = 0;
            let upper = 0;
            while(i < password.length){
                char = password.charAt(i);
                // cek number
                if(!isNaN(char *1)){
                    number =1;
                }else{
                    if(char === char.toLowerCase()){
                        lower = 1;
                    }else if(char === char.toUpperCase()){
                        upper=1;
                    }
                } 
                i++;
            }
            if(number!=1){
                alert("Password should be have numbers")
                return false;
            }else if(upper!=1){
                alert("Password should be have uppercase characters")
                return false;
            }else if(lower !=1){
                alert("Password should be have lowercase characters")
                return false
            }
        }
    }

    if(confirm_password ===""){
        alert("Confirm password should be filled")
        return false;
    }else{
        if(password != confirm_password){
            alert("Password should be match with confirm password")
            return false
        }
    }
    if(full_name === ""){
        alert("Name should be filled")
        return false;
    }


    if(!gender.checked){
        alert("Gender should be filled")
        return false
    }
    
    if(email ===""){
        alert("Email should be filled")
        return false;
    }else{
        atpos = email.indexOf("@")
        dotpos = email.lastIndexOf(".")
        
        if(atpos < 1 || dotpos <1){
            alert("Format email should be filled properly")
            return false
        }else if(dotpos- atpos < 3){
            alert("Format email should be filled properly(example@example.com)")
            return false
        }else if(email.charAt(dotpos+1) === ""){
            alert("Format email is wrong")
            return false
        }


    }

    if(age<14 ){
        alert("To be a part of member you should be in 14 years old")
        return false;
    }

    if(!agreement.checked){
        alert("You should accept the privacy and agreement")
        return false
    }


    alert("Registration Completed")
    return true;
}


function show_password(){
    let password = document.getElementById("password")
    if(password.type === "password"){
        password.type ="text"
        document.getElementById("close-eyes").className = "fa fa-eye icon eye-icon"

    }else{
        password.type = "password"
        document.getElementById("close-eyes").className = "fa fa-eye-slash icon eye-icon"
    }

}

function show_passwordB(){
    let confirm_password = document.getElementById("confirm-password")
    if(confirm_password.type ==="password"){
        confirm_password.type = "text"
        document.getElementById("close-eyes2").className = "fa fa-eye icon eye-icon"
    }else{
        confirm_password.type= "password"
        document.getElementById("close-eyes2").className = "fa fa-eye-slash icon eye-icon"
    }

}