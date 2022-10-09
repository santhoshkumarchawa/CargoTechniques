var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function generaterandom()
{
var rund=(Math.random() * 1000) + 1;
let Rand=Math.round(rund);
var statusID = "CT"+Rand.toString();
window.sessionStorage.setItem('StatId', statusID);
return statusID;
}

var StatID = window.sessionStorage.getItem('StatId');

function CreateOrder()
{
  var VhName=document.getElementById("VehicleName");
  var SelectedValue=VhName.options[VhName.selectedIndex].value;
  
  if(SelectedValue == "Volvo" || SelectedValue == "Ferrari" || SelectedValue == "Audi" || SelectedValue == "Mercedes-Benz")
  {  
    StatID = generaterandom();

    alert("Order Created Successfully, Order Num: "+StatID);
  }
  else 
  {
    alert("Select Valid VehicleName");
  }

  //var oShell = WScript.CreateObject("WScript.Shell");
//var oSysEnv = oShell.Environment("SYSTEM");
//oSysEnv("TEST1") = generaterandom();

}

function OrderStatus()
{
 window.location.href="OrderStatus.html";
}

document.getElementById("StatusNumber").innerHTML=StatID;

