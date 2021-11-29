let inNumder = document.getElementById("inNumder");
let timer = document.getElementById("timer");
let outNumber = document.getElementById("outNumber");

timer.addEventListener("click", ()=>{
 
    if(inNumder.value === "" || inNumder.value === "0") {// если пользователь ввел пустую строку или ноль, то див будет равен нулю
        outNumber.textContent = 0
    } else {
        let n = Number(inNumder.value);// преоброзовал к числу что бы было удобно работать
        outNumber.textContent = n 

        let intervalId = setInterval(()=> {
            outNumber.textContent = --n 
            
            
            if(n === 0 ) {
                flag = true
                clearInterval(intervalId)
            }
        }, 600)
        
        var flag = false;
    
        if(flag) {
            console.log(n)
            
        }
    
    }
    

})