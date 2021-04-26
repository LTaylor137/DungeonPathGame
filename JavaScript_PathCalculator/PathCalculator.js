




var counter = document.getElementById("counter");


counter = 0;


//   1 second timer.

setInterval(function () {
    timer = timer + 1;
    console.log(timer + " sec");
    console.log(counter + " --- cookies --- ")
    console.log(autocount + " auto")

    counter = counter + autocount;

}, 1000);

/// 1/10th second timer updates on screen information

setInterval(function () {