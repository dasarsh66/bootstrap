let hello;
// const password = document.getElementById("passkey").value;
function loginvalidation() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("passkey").value;
    hello=username;
    alert("into login validation");
 
    alert(username);
    alert(password);
    if (username == "" && password == "") {
        alert("Login successfully");
        window.location.href = 'index.html'; // Redirecting to other page.
        // window.location.assign("https://www.fb.com");
        // location.assign("index.html");
        // console.log('ive just rendered ');
        // return false;
        // $( "loginpage" ).load( "index.html" );
        // $( "#loginpage" ).append( "index.html" );
        // window.location("index.html");
        console.log("done");
        // window.open("index.html"); // woking but in a new tab
        // window.replace("http://www.w3schools.com");
        
        // window.open("http://www.w3schools.com");
    } else {
        alert("invalid credentials");
    }
}
$("#username").ready(function(){
    alert("username has just got loaded");
    console.log(hello);
    // document.getElementById("username").innerHTML=hello;
    document.getElementById("username").innerHTML="Admin";
});