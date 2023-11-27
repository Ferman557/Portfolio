var mycolor = localStorage.getItem("PageColor");

//r = root
//rs = root style
//r.style to setproperty
//rs.getproperty to getproperty
var r = document.querySelector(':root');
checkcolor();

function checkcolor(){
  if(mycolor === "dark"){
    r.style.setProperty("--bg-color", "#323645"); //very dark blue
    r.style.setProperty("--font-color", "#8338ec");//purple font color
    r.style.setProperty("--element-bg-color", "#B9E09D");//lime element color
  }else{
    r.style.setProperty("--bg-color", "#f3efe2");
    r.style.setProperty("--font-color", "#FFFFFF");
    r.style.setProperty("--element-bg-color", "#90b8b7");
  }
}
function changetheme(){
    //rs = getComputedStyle(r);
    if(localStorage.getItem("PageColor") === "light"){
        localStorage.setItem("PageColor", "dark");
        r.style.setProperty("--bg-color", "#323645"); //very dark blue
        r.style.setProperty("--font-color", "#8338ec");//purple font color
        r.style.setProperty("--element-bg-color", "#B9E09D");//lime element color
    }else{
      localStorage.setItem("PageColor", "light");
        r.style.setProperty("--bg-color", "#f3efe2");
        r.style.setProperty("--font-color", "#FFFFFF");
        r.style.setProperty("--element-bg-color", "#90b8b7");
    }
}
//Copy number and email to clipboard with in site notification*************
function copynum(){
  navigator.clipboard.writeText("971561412252");

  showSnackBar();
}
function copymail(){
  navigator.clipboard.writeText("3abdulla.Almazrouei@gmail.com");

  showSnackBar();
}
function showSnackBar() {
  var sb = document.getElementById("snackbar");

  //this is where the class name will be added & removed to activate the css
  sb.className = "show";

  setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
function SendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "myfermanbusiness@gmail.com",
    Password : "5886B29FD82BAF062751DA151211B104BA82",
    To : 'fermaninquires@gmail.com',
    From : "myfermanbusiness@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => console.log(message)
);
}