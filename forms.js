$(document).ready(function(){
    $("#form").validate({
       rules:{
         name:{
           required:true,
         },
         email:{
           required:true,
         },
            textarea:{
              required:true,
            },
            number:{
              required:true,
            },
            member:{
             required:true,
            },
            checkbox:{
              required:true,
            }
        }
     }); 
 });   
 function myfunction(){
    var Name= $("#username").val();
    $("#name").html(Name);
     $("#username").val("");
    var email= $("#email").val();
    $("#Email").html(email);
     $("#email").val("");
    var num= $("#number").val();
    $("#Number").html(num);
    $("#number").val("");
    var text= $("#textarea").val();
    $("#Text").html(text);
    $("#textarea").val("");
    var radioValue = $("input[name='member']:checked").val();
   if(radioValue){
    $("#gender").html( radioValue);
     }
   $(".radioButton").prop('checked',false);
    }