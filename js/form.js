// Generate day and month inputs
var dayInputHTML = "";
var monthInputHTML = "";
var timeInputHTML = "";

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var hours = [10, 11, 13, 14, 15];

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yy = today.getFullYear();
var hh = today.getHours();
var totalDays = 0;

if (hh >= 15) { dd++; } //This day is over, show next day

if (mm == 2 && yy % 4 == 3) { totalDays = 28; }
else if (mm == 2) { totalDays = 29; }
else if (mm == 4 || mm == 6 || mm == 9 || mm == 11) { totalDays = 30; }
else { totalDays = 31; }

for (var timeInputCounter = 0; timeInputCounter < 5; timeInputCounter++) {
  if (hh >= 15) {
    if (timeInputCounter < 2) {
      timeInputHTML += "<option>" + hours[timeInputCounter] + ":00 AM</option>\n";
    }
    else {
      timeInputHTML += "<option>" + hours[timeInputCounter] + ":00 PM</option>\n";
    }
  }
  else if (hh < hours[timeInputCounter]) {
    if (timeInputCounter < 2) {
      timeInputHTML += "<option>" + hours[timeInputCounter] + ":00 AM</option>\n";
    }
    else {
      timeInputHTML += "<option>" + hours[timeInputCounter] + ":00 PM</option>\n";
    }
  }
}

for (var dayInputCounter = dd; dayInputCounter <= totalDays; dayInputCounter++) {
  dayInputHTML += "<option>" + dayInputCounter + "</option>\n";
}

for (var monthInputCounter = today.getMonth(); monthInputCounter < 12; monthInputCounter++) {
  monthInputHTML += "<option>" + months[monthInputCounter] + "</option>\n";
}

$("#day-input").html(dayInputHTML);
$("#month-input").html(monthInputHTML);
$("#time-input").html(timeInputHTML);
