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
    alert("Order Created Successfully, Order Num: "+"CT"+Date.now());
  }
  else 
  {
    alert("Select Valid VehicleName");
  }


}