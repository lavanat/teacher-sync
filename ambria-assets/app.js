function see() {
    var x = document.getElementById("pass");
    if(x.type === "password") {
        x.type ="text";} 

        else{
            x.type ="password"
        }

    }

document.getElementById("btnNEXT").addEventListener("click",function(){
    alert("click");
});