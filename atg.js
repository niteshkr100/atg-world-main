document.querySelector("#exit").addEventListener("click",function(){
    document.querySelector("#exit").innerHTML='<img src="./svg/exit.svg" alt=""  style="color:red"> Leave Group';
    document.querySelector(".recommendbox").style.display="block";
    
    
    document.querySelector("#exit").addEventListener("dblclick",function(){
        document.querySelector("#exit").innerHTML='<img src="./svg/group.svg" alt=""> Join Group'
        document.querySelector(".recommendbox").style.display="none";
    })
   
})
//signIn
document.querySelector("#cut").addEventListener("click",function(){
    document.querySelector("#hello").style.display="none";
})

document.querySelector("#showme").addEventListener("click",function(){
    document.querySelector("#hello").style.display="block";
})
 
// login
document.querySelector("#knife").addEventListener("click",function(){
    document.querySelector("#vegetable").style.display="none";
    document.querySelector("#fruit").style.display="none";
    document.querySelector(".fade").style.display="none";
})

document.querySelector("#free").addEventListener("click",function(){
    document.querySelector("#vegetable").style.display="block";
    document.querySelector(".bye").style.display="block";
})


