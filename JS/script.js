$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

function displayTime() {

    setTimeout("displayTime()", 1000);  

    let date = new Date;

    let currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let Timezone = date.toLocaleString("en-US", {
        timeZone:currentTimeZone
      });
     
      let datepi = document.forms["RegForm"]["datepic"];
      var today = new Date().toISOString().split('T')[0];
      datepi.setAttribute('min', today);
      
    document.getElementById('displayTime').innerHTML = Timezone
}

function ValidationForm() {
    let username = document.forms["RegForm"]["name"];
    let email = document.forms["RegForm"]["emailaddress"];
    let phoneNumber = document.forms["RegForm"]["telephone"];
    let pass = document.forms["RegForm"]["password"];
    let datepi = document.forms["RegForm"]["datepic"];
    let frmDate = document.forms["RegForm"]["fromdate"];
    let toDate = document.forms["RegForm"]["todate"];

    var fDate = new Date(frmDate.value);
    var tDate = new Date(toDate.value);

    var today = new Date().toISOString().split('T')[0];
    datepi.setAttribute('min', today);

    if(username.value == "") {
      alert("Please enter your name.");
      username.focus();
      username.tabIndex = "1"; 
      return false;
    }
    if(email.value == "") {
      alert("Please enter e-mail address.");
      email.focus();
      email.tabIndex="2";
      return false;
    }
    if(email.value.indexOf("@", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      email.tabIndex="2";
      return false;
    }
    if(email.value.indexOf(".", 0) < 0) {
      alert("Please enter a valid e-mail address.");
      email.focus();
      email.tabIndex="2";
      return false;
    }
    if(phoneNumber.value == "") {
      alert("Please enter your telephone number.");
      phoneNumber.focus();
      phoneNumber.tabIndex ="3";
      return false;
    }
    if(pass.value == "") {
      alert("Please enter your password.");
      pass.focus();
      pass.tabIndex="4";
      return false;
    }
    if(datepi.value == "") {
        alert("Please enter date.");
        datepi.focus();
        datepi.tabIndex="5";
        return false;
      }
    if(frmDate.value == "") {
        alert("Please enter From date.");
        frmDate.focus();
        frmDate.tabIndex="6";
        return false;
      }
      if(toDate.value == "") {
        alert("Please enter To date.");
        toDate.focus();
        toDate.tabIndex="7";
        return false;
      }
      if(fDate > tDate)
    {
    alert("Please ensure that the To Date is greater than or equal to the From Date.");
    toDate.focus();
    toDate.tabIndex="7";
    document.getElementById("dateRange").innerHTML="";
    return false;
    }
     
    return true;
  }

  function  dateDiff(){

    var fDate = new Date(document.forms["RegForm"]["fromdate"].value);
    var tDate = new Date(document.forms["RegForm"]["todate"].value);

    var days = parseInt((tDate - fDate) / (24 * 3600 * 1000));

    if(fDate > tDate)
    {
    alert("Please ensure that the To Date is greater than or equal to the From Date.");
    toDate.focus();
    toDate.tabIndex="7";
    document.getElementById("dateRange").innerHTML="";
    return false;
    }
    

    document.getElementById("dateRange").innerHTML = days + " Day(s) "
  }