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


function CreateOrder()
{
  var VhName=document.getElementById("VehicleName");
  var SelectedValue=VhName.options[VhName.selectedIndex].value;
  
  if(SelectedValue == "Volvo" || SelectedValue == "Ferrari" || SelectedValue == "Audi" || SelectedValue == "Mercedes-Benz" )
  {  
    var statusID = "CT1234";

    alert("Order Created Successfully, Order Num: "+statusID);
  }
  else 
  {
    alert("Select Valid VehicleName");
  }

  var oShell = WScript.CreateObject("WScript.Shell");
var oSysEnv = oShell.Environment("SYSTEM");
oSysEnv("TEST1") = statusID;

}

function OrderStatus()
{
  window.location.href="OrderStatus.html";
  var row = document.getElementById("Row2");
  var x = row.insertCell(0);
  x.innerHTML = "1234";
 
}
