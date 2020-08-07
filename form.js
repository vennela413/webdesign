
  var validate=$('#form').validate({ 
    rules:{
      Name:{
        required:true,
      },
      email:{
        required:true,
      },
      number:{
        required:true,
      },
      textarea:{
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
  function myfunction(){
    var name=$("#username").val();
    var email=$("#email").val();
    var num =$("#number").val();
    var text =$("#textarea").val();
    $("#Email").html(email);
    $("#name").html(name);
    $("#Number").html(num);
    $("#Text").html(text);
    $("#email").val("");
    $("#username").val("");
    $("#number").val("");
    $("#textarea").val("");
    var radioValue = $("input[name='Gender']:checked").val();
      if(radioValue){
        $("#gender").html(radioValue);
         }
        $('input[name="member]').removeAttr('checked');
         }
      $('input[name="checkbox"]').removeAttr('checked');
     
    