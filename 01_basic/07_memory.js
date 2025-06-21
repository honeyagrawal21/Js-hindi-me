//types of memory
//1 - stack - used in prmitive type // jo bhi variable declare kiya hai uski copy milti hai
//2 - heap - used in non primitive type // jo bhi variable declare liya hai uski original value k reference milta hai
let mycollegename = "MITS"
let mycompanyname = mycollegename
mycompanyname = "LTI"

console.log(mycollegename);
console.log(mycompanyname);

let User1 = {
    email: "aghon@google.com",
    class: "first"
}
let User2 = User1

User2.email = "agsan2google.com"

console.log(User1.email);
console.log(User2.email);

