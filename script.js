let alfabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let alfabets_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let sign = ["!", "@", "#", "$", "%", "^", "&", "№", "?", "*", "+", "-"]



let password_sign = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "!", "@", "#", "$", "%", "^", "&", "№", "?", "*", "+", "-"]

let password_random_arr = []
let password_random = ""

let length_password;
$("#generate").click(function(){
    $(".password-copy").val("")
    length_password =  get_homany()
    // checked_ckeck()
   
    password_random = ""    
    password_random_arr = []
    
    // console.log(get_random_password(10))
    
    $(".password-copy").val(get_random_password(length_password))
    
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


function get_random_password(length_password){
    
    total = password_sign.length;
    for(i = 0; i < length_password; i++){
        
        let willSelect = getRandomInt(0, total)
        password_random_arr.push(password_sign[willSelect])
        // console.log(password_random_arr)
        
         
         

    }
    // password_random = arr_to_string(password_random_arr) 
    // password_random = checked_arr_password(password_random_arr)
    

    password_random = arr_to_string(password_random)
   
    return password_random
}


function arr_to_string(array){
    for(i = 0; i < password_random_arr.length; i++){
        
        password_random = password_random + password_random_arr[i] 
        // console.log(password_random)
    }
        


    return password_random

}

function get_homany(){
    length_password = $("#How-many-sign").val()


    console.log(length_password)

    return length_password
}


function checked_arr_password(){
    if(uppercase_password == false){
        for(i = 0; i < password_random_arr.length - 1; i++){
            for(j = 0; j < alfabets_uppercase.length - 1; j++){   
                if(password_random_arr[i] == alfabets_uppercase[j]){
                    password_random_arr.remove(password_random_arr[i])

                }  
            }
        }
    }

    return password_random
}



function checked_ckeck(){
    if ($('.uppercase_password').prop("checked")){
        uppercase_password = true
    }else{
        uppercase_password = false
    }

    if ($('.letters_password').prop("checked")){
        letters_password = true
    }else{
        letters_password = false
    }

    if ($('.password_number').prop("checked")){
        password_number = true
    }else{
        password_number = false
    }
    
    if ($('.password_signs').prop("checked")){
        password_signs = true
    }else{
        password_signs = false
    }
         
    
}
  
    






