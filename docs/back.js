//r = root
//rs = root style
//r.style to setproperty
//rs.getproperty to getproperty
var r = document.querySelector(':root');

function changetheme(){
    rs = getComputedStyle(r);
    if(rs.getPropertyValue("--bg-color") == "#85c1e9"){
        r.style.setProperty("--bg-color", "#323645");
        r.style.setProperty("--font-color", "#AE00FF");
        r.style.setProperty("--element-bg-color", "#B9E09D");

    }else{
        r.style.setProperty("--bg-color", "#85c1e9");
        r.style.setProperty("--font-color", "#000000");
        r.style.setProperty("--element-bg-color", "#000000");
    }
}
/*
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */