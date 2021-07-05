

// Set the date we're counting down to
var countDownDate = new Date("July" + (new Date().getDay()+6) + ","+ "2021" + " "  + new Date().getTime() )

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))) ;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    if (days < 10 || hours < 10 || minutes.length < 2 || seconds < 10) {
        days = ("0" + days).slice(-2)
        hours = ("0" + hours).slice(-2)
        minutes = ("0" + minutes).slice(-2)
        seconds = ("0" + seconds).slice(-2)
    }
        // New page loaded when countdown is over
        
    if (days == "00" && hours == "00" && minutes == "00" && seconds == "00") {
       window.location.href = "redirect.html"
    }
    // Display the result in the element with id="demo"
    $(".day").text(days)
    $(".hour").text(hours)
    $(".minute").text(minutes)
    $(".seconds").text(seconds)

    // If the count down is finished, write some text
    if (distance === 0) {
        clearInterval(x);
        
    }
}, 1000);


console.log(typeof(days))
