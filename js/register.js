function register(){
	var userName = document.getElementById('userName').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var confirm = document.getElementById('confPass').value;
	
	if(document.getElementById('check').checked==false){
		bool = false;
	}

	var bool = true;
	if(userName == ""){
		alert("UserName must filled");
		bool = false;
	}

	else if(userName.length < 5){
		alert("Username must be more than 5 character");
		bool = false;
	}

	if(password == ""){
		alert("Password must filled");
		bool = false;
	}
	else if(password.length < 5){
		alert("Password must be more than 5 character");
		bool = false;
	}

	if(email == ""){
		alert("Email must be filled");
		bool = false;
	}
	else if(cekEmail(email)== false){
		alert("Invalid Email Format");
		bool = false;
	}

	if(bool){
		alert("Register Success");
		location.reload();
	}
}

function cekEmail(email){
	if(email.startsWith("@") || email.startsWith(".")){
		return false;
	}
	else if(email.endsWith("@") || email.endsWith("."))	{
		return false;
	}
	else if(email.indexOf("@.") > -1 || email.indexOf(".@") > -1 )
	{
		return false;
	}
	else if(email.indexOf("@") < 0 || email.indexOf(".") < 0)
	{
		return false;
	}
		else
	{
		return true;
	}
}

function cekSpasi(string){
	string = string.trim(); 
	return string.split(' ').length; 
}	