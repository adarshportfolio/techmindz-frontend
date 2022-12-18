function switchfunc(value){
   switch(value){
    case "1":
        document.getElementById("switchdiv").innerHTML="Today is Monday, it is a busy day";
        break;

    case "2":
        document.getElementById("switchdiv").innerHTML="Today is Tuesday, it is rainy day";
        break;
        
    case "3":
        document.getElementById("switchdiv").innerHTML="Today is Wednesday, it is windy day";
        break;
     
    case "4":
        document.getElementById("switchdiv").innerHTML="Today is Thursday, it is a good day";
        break;
     
    case "5":
        document.getElementById("switchdiv").innerHTML="Today is Friday, it is a day";
        break;

    case "6":
            document.getElementById("switchdiv").innerHTML="Today is Saturday, it is a holiday";
            break;
     
    default:
        document.getElementById("switchdiv").innerHTML="Wrong entery";
   
   }
}