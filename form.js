$(document).ready(function () {
  $("#usercheck").hide();
  $("#emailcheck").hide();
  $("#numcheck").hide();
  $("#textcheck").hide();
  var email_error = true;
  var num_error = true;
  var text_error = true;
  $("#submit").click(function () {
    user_check();
  });
  function user_check() {
    var user_val = $("#username").val();
    if (user_val == "") {
      $("#usercheck").show();
      $("#usercheck").html("please enter the feild");
      $("#usercheck").focus();
      $("#usercheck").css("color", "red");
      return false;
    } else {
      $("#usercheck").hide();
    }
  }
  $("#email").keyup(function () {
    email_check();
  });

  function email_check() {
    var email_val = $("#email").val();
    if (email_val == "") {
      $("#emailcheck").show();
      $("#emailcheck").html("please enter the feild");
      $("#emailcheck").focus();
      $("#emailcheck").css("color", "red");
      email_error = false;
      return false;
    } else {
      $("#emailcheck").hide();
    }
  }
  $("#number").keyup(function () {
    num_check();
  });
  function num_check() {
    var num_val = $("#number").val();
    if (num_val == "") {
      $("#numcheck").show();
      $("#numcheck").html("please enter the feild");
      $("#numcheck").focus();
      $("#numcheck").css("color", "red");
      num_error = false;
      return false;
    } else {
      $("#numcheck").hide();
    }
  }
  $("#textarea").keyup(function () {
    text_check();
  });
  function text_check() {
    var text_val = $("#textarea").val();
    if (text_val == "") {
      $("#textcheck").show();
      $("#textcheck").html("please enter the feild");
      $("#textcheck").focus();
      $("#textcheck").css("color", "red");
      text_error = false;
      return false;
    } else {
      $("#textcheck").hide();
    }
  }
});
function Details() {
  var name = $("#username").val();
  var email = $("#email").val();
  var num = $("#number").val();
  var text = $("#textarea").val();
  $("#name").html(name);
  $("#Email").html(email);
  $("#Number").html(num);
  $("#Text").html(text);
  $("#username").val("");
  $("#email").val("");
  $("#number").val("");
  $("#textarea").val("");
  var radioValue = $("input[name='Gender']:checked").val();
  if (radioValue) {
    $("#gender").html(radioValue);
  }
  var checkValue = $("input[name='checkbox']:checked").val();
  if (checkValue) {
    $("#check").html(checkValue);
  }
  $("input[name='Gender']").prop("checked", false);
  $("input[name='checkbox']").prop("checked", false);
}
$("#submit").click(function () {
  Details();
});
