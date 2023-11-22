//r = root
//rs = root style
var r = document.querySelector(':root');

function changetheme(){
    rs = getComputedStyle(r);
    if(rs.getPropertyValue("--bg-color") == "#85c1e9"){
        r.style.setProperty("--bg-color", "#1f1f1f");
        r.style.setProperty("--font-color", "#D07AD6");
       // r.style.setProperty("--element-bg-color", "#85c1e9");

    }else{
        r.style.setProperty("--bg-color", "#85c1e9");
        r.style.setProperty("--font-color", "#000000");
        //r.style.setProperty("--element-bg-color", "#85c1e9");
    }
}