
let input = document.getElementsByClassName("input");
let firstCheckbox = document.getElementsByName("one");
let secondCheckbox = document.getElementsByName("two");
let btn = document.getElementsByTagName("button")[0];
let arr =[];


btn.addEventListener("click", ()=>{

          if(fillCheck(input)*radioCheck(firstCheckbox, secondCheckbox) == 0){
        alert("поставьте зачетик");
    }
    else{
        let user = new User(input[0].value,input[1].value,input[2].value,input[3].value,input[4].value);
        arr.push(user);
        user.print();
        } 

})



  

class User {
    constructor(Name, eMail, userName, ZIP, phone) {
        this.id = userName +""+ count();
        this.Name = Name;
        this.userName = userName;
        this.ZIP = ZIP;
        this.phone = phone;
        this.eMail = eMail;
        this.gender = check(firstCheckbox);
        this.accType = check(secondCheckbox);
        
        this.interface = `
        <p>User ${this.id}:</p>  
        <p>name is ${this.tName},</p>
        <p> gender - ${this.gender},
        <p>username is ${this.userName},</p>
        <p>ZIP: ${this.ZIP},</p>
        <p></p>
        <p>Contact information:</p>
        <p>Phone - ${this.phone};</p>
        <p>E-Mail - ${this.eMail};</p>
        <p> account type - ${this.accType}.
    `; 
    }

    print(){
        let container = document.getElementsByClassName("reg")[0];
        let elem = document.createElement("div");
        elem.classList.add("user");
        elem.innerHTML = this.interface;
        container.appendChild(elem);
       

    }
}



    const count = c();

    function c(){
        let i = 0;
        return function(){return i++}
    }



    function fillCheck(array){
        for (let index = 0; index < 5; index++) {
            if(array[index].value != ""){}
            else{
                return(0);  
            }
        }   
         return(1);
    }
   
    
function radioCheck(arr, array){    
    let a = 0;
    let b = 0;
for (let index = 0; index < array.length; index++) {
    if (array[index].checked == true) {
        a=1;
}}
for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked == true) {
        b=1;
}}
return(a*b);}


    function check (array){
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked == true) {
            return(array[i].value);
        }
    }
}