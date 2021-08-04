function funcLogin()
{
    var user = document.getElementById("fname").value;
    var pass = document.getElementById("lname").value;
    if(user=="Santhoshkumarchawa@gmail.com" && pass=="Wxyz2042")
    {
        document.getElementById("Submit_santhosh").innerHTML = "Login Successful";
    }
    else if(user!== "Santhoshkumarchawa@gmail.com" && pass=="Wxyz2042")
    {
        document.getElementById("Submit_santhosh").innerHTML = "Invalid UserName ";
    }
    else if(user== "Santhoshkumarchawa@gmail.com" && pass!=="Wxyz2042")
    {
        document.getElementById("Submit_santhosh").innerHTML = "Invalid Password ";
    }
    else
    {
        document.getElementById("Submit_santhosh").innerHTML = "Invalid Credentials"; 
    }

}
