var final1, final2;
var p1_win = 0, p2_win = 0;
var ok = 0;
var total_match = 0;
var previous_color = "red";
const color_name = ["red", "blue", "pink", "green"];
const total_circle = 6; 
const max_value = 6;
function random_value(n) {
    return Math.ceil(Math.random() * n);
}
function unique_array(n) {
    var d = new Set();
    while (d.size != n) {
        d.add(random_value(total_circle))
    }
    return Array.from(d);
}

function draw_pattern(n, m) { //how many circles ,on whome 
    var selector = "#p" + m;

    if (n == 1) {
        selector = "#p" + m + "4";
        const temp = document.querySelector(selector);
        temp.classList.remove("hide");
    }
    else {
        selector = "#p" + m;
        var ua = unique_array(n);
        for (var i = 0; i < n; i++) {
            var tp = ua[i];
            const temp = document.querySelector(selector + tp);
            temp.classList.remove("hide");
        }

    }
}

function cls() {
    var cn = color_name[Math.floor(Math.random() * color_name.length)];

    const cmd = document.querySelectorAll(".circle");
    for (var i = 0; i < cmd.length; i++) {
        cmd[i].classList.remove("circle-" + previous_color);
        cmd[i].classList.add("hide");
        cmd[i].classList.add("circle-" + cn);
    }
    previous_color = cn;
    console.log(cn);
}
function onlyFirstTime(){
    document.querySelector(".main-screen").setAttribute("style", "display:flex;")
    document.querySelector(".total").classList.remove("hide")
}

function yee() {
    if(!total_match)
       onlyFirstTime();
    cls();
    final1 = random_value(max_value);
    final2 = random_value(max_value);
    draw_pattern(final1, "1");
    draw_pattern(final2, "2");
    if (!ok) {
        ok = 1;
        document.querySelector(".btn").innerHTML = "Try Again !";
        document.querySelector(".welcome h1").classList.add("hide");
        document.querySelector(".result").classList.remove("hide");
    }

    if (final1 < final2) {
        p2_win++;
        document.querySelector(".result").innerHTML = "Player 2 won";
    }
    else if (final1 > final2) {
        p1_win++;
        document.querySelector(".result").innerHTML = "Player 1 won";
    }
    else {

        document.querySelector(".result").innerHTML = "Draw, amazing!!";
    }
     total_match++;
     document.querySelector(".total").innerHTML=" Total Match Played(including draw matches) = "+total_match;
    document.querySelector(".score2").innerHTML = p2_win;
    //console.log("final1 = " + final1 + "  final2  = " + final2);
    document.querySelector(".score1").innerHTML = p1_win;
}
var btn = document.querySelector(".btn");
btn.onclick = yee;


