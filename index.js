function funcLogin()
{
    var user = document.getElementById("fname").value;
    var pass = document.getElementById("lname").value;
    if(user=="Santhoshkumarchawa@gmail.com" && pass=="Wxyz2042")
    {
        document.getElementById("Submit_santhosh").innerHTML = "Login Successful";
        document.getElementById("fname").style.display = "none";
        document.getElementById("userID").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.getElementById("lname").style.display = "none";
        document.getElementById("Submit_santhosh").style.marginRight="47%";
        document.getElementById("Login").style.display="none"
        document.getElementById("Forgot_SignUp").style.display="none";
        document.getElementById("EssentialLinks").style.display="none";
        
    }
    else if(user!== "Santhoshkumarchawa@gmail.com" && pass=="Wxyz2042")
    {
        window.alert("Invalid UserName")
        document.getElementById("fname").value=""
        document.getElementById("lname").value=""
    }
    else if(user== "Santhoshkumarchawa@gmail.com" && pass!=="Wxyz2042")
    {
        window.alert("Invalid Password")
        document.getElementById("fname").value=""
        document.getElementById("lname").value=""
    }
    else
    {
        window.alert("Enter UserName and Password to Login")
        document.getElementById("fname").value=""
        document.getElementById("lname").value=""
    }

    

}
