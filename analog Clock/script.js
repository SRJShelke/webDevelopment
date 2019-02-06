function startTime() {
    
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var session = "AM";
    if (h==0) {
        h=12;
    }else if(h>12) {
        h=h-12;
       var session = "PM"
    }
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + " "+ session;
    var hour = -90+(h*30) + (0.5 * m) ;
    var min = -90 + (m * 6)+ (0.1 * s);
    var sec = -90 + s*6;
    var hh =document.getElementById('hour');
    var mm = document.getElementById('minute');
    var ss = document.getElementById('second');
    hh.style.transform = 'rotate('+hour+'deg)';
    mm.style.transform = 'rotate('+min+'deg)';
    ss.style.transform = 'rotate('+sec+'deg)';
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}
alert("This is Digital & Analog Clocks using pure css & Javascript");
alert ("if you like it, please give a big Thumbs Up");
