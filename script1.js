let alfabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let alfabets_uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let sign = ["!", "@", "#", "$", "%", "^", "&", "№", "?", "*", "+", "-"]



let password_sign = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "!", "@", "#", "$", "%", "^", "&", "№", "?", "*", "+", "-"]



let length_password;
$("#generate").click(function(){
    $(".password-copy").val("")
    length_password =  get_homany()
    checked_ckeck()
   
    password_random = ""    
    password_random_arr = []
    
   // console.log(get_random_password(10))
    
    $(".password-copy").val(get_random_password(length_password))
    
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


function get_random_password(length_password){
    for(i = 0; i < length_password - 1; i++){
        if(uppercase_password == true){
            total = alfabets_uppercase.length;
            let willSelect = getRandomInt(0, total)
            password_random_arr.push(alfabets_uppercase[willSelect])   
            console.log(password_random_arr)  
        }
        if(letters_password == true){
            total = alfabets.length;
            let willSelect = getRandomInt(0, total)
            password_random_arr.push(alfabets[willSelect])    
            console.log(password_random_arr)  
        }
        if(password_number == true){
            total = numbers.length;
            let willSelect = getRandomInt(0, total)
            password_random_arr.push(numbers[willSelect])  
            console.log(password_random_arr)    
        }
        if(password_signs == true){
            total = sign.length;
            let willSelect = getRandomInt(0, total)
            password_random_arr.push(sign[willSelect])   
            console.log(password_random_arr)   
        }
      
    }
    // password_random = arr_to_string(password_random_arr) 
    // password_random = checked_arr_password(password_random_arr)
    for(i = 0;i < password_random_arr.length - 1; i++){
        if(password_random_arr[i] == undefined){
            password_random_arr[i] = password_sign[getRandomInt(0, password_sign.length)]
           

        }
    }
    password_random = arr_to_string(password_random, length_password)
   
    return password_random
}


function arr_to_string(array, length_password){
    ready_random_arr = []
    
    for(i = 0; i < length_password; i++){
        ready_random_arr.push(password_random_arr[getRandomInt(0, password_random_arr.length)])
        console.log(ready_random_arr)
        // if(ready_random_arr[i] = undefined){
        //     ready_random_arr[i] = password_sign[getRandomInt(0, password_sign.length - 1)]


        // }
        
    }
    for(i = 0;i < ready_random_arr.length; i++){
        if(ready_random_arr[i] == undefined && ready_random_arr[i] == "undefined"){
            ready_random_arr[i] = password_sign[getRandomInt(0, password_sign.length)]
            console.log(ready_random_arr[i])
            console.log(ready_random_arr[i] + " " + undefined)

        }



    }




    for(i = 0; i < ready_random_arr.length - 1; i++){
        password_random = password_random + ready_random_arr[i] 
        console.log(password_random)
    }
        


    return password_random

}




function get_homany(){
    length_password = $("#How-many-sign").val()


    console.log(length_password)

    return length_password
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
  
    




$("#copy").click(function(){
    copytext = $('.password-copy').val()
    document.execCommand("copy");
})