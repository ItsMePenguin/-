var button2 = document.getElementById("originalspawnbutton");
const buttons_unlocked = [];
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white"];
var numbuttons = 0;
var buttonmap = new Map([["yellow", ["Yellow Button", "clicking the notification"]], ["red", ["Red Button", "has a 10% chance of spawning when clicking the rare button"]], ["rarebutton", ["Rare Button", "has a 10% chance of spawning when clicking the spawn button"]], ["legendarybutton", ["Legendary Button", "has a 1% chance of spawning when clicking the spawn button"]]]);
function rainbowbuttonclicked() { }

function notificationclicked() {
  if (buttons_unlocked.includes("yellow") == false) {
    numbuttons = numbuttons + 1;
    var yellowbutton = document.createElement("button");
    yellowbutton.innerHTML = "YELLOW🕴";
    yellowbutton.className = "yellowbutton";
    document.body.appendChild(yellowbutton);
    if (buttons_unlocked.includes("yellow") == false) {
      notify("You unlocked the yellow button!");
      buttons_unlocked.push("yellow");
      yellowbutton.addEventListener("click", function() {
      });
    }
  }
}

function notify(text) {
  var notification = document.createElement("h3");
  notification.innerHTML = text;
  notification.className = "notification";
  document.body.appendChild(notification);
  notification.addEventListener("click", notificationclicked);
}

function fbuttonlog() {
  var para = document.createElement("p");
  para.innerHTML = "Buttons Unlocked: <br/>";
  document.body.appendChild(para);
  var log = document.createElement("table");
  var row = log.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "<b> Button Name</b>";
  cell2.innerHTML = "<b> How to unlock </b>";

  for (var i = 0; i < buttons_unlocked.length; i++) {
    var row = log.insertRow(i + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = buttonmap.get(buttons_unlocked[i])[0];
    cell2.innerHTML = buttonmap.get(buttons_unlocked[i])[1];
  }
  document.body.appendChild(log);
  log.style= "width: 100%;";
  var paratwo= document.createElement("p");
  paratwo.innerHTML= "Buttons Spawned: " + numbuttons;
  document.body.appendChild(paratwo);

}

function rarebuttonclicked() {
  var quack = document.getElementById("quack");
  quack.play();
  quack.currentTime = 0;
  if (Math.floor(Math.random() * 10) == 3 && buttons_unlocked.includes("red") == false) {
    numbuttons = numbuttons + 1;
    redbutton = document.createElement("button");
    redbutton.innerHTML = "RED🕴";
    redbutton.className = "redbutton";
    redbutton.addEventListener("click", redclick);
    document.body.appendChild(redbutton);
    if (buttons_unlocked.includes("red") == false) {
      notify("You unlocked the red button!");
      buttons_unlocked.push("red");
    }
  }
}

function spawnbuttonclicked() {
  numbuttons = numbuttons + 1;
  if (Math.floor(Math.random() * 10) == 1) {
    if (buttons_unlocked.includes("rarebutton") == false) {
      notify("You unlocked The Rare button!");
      buttons_unlocked.push("rarebutton");
    }
    var RarenewButton = document.createElement("button");
    RarenewButton.innerHTML = "This button only has a 10% chance of spawning!";
    document.body.appendChild(RarenewButton);
    RarenewButton.addEventListener("click", rarebuttonclicked);
  } else if (numbuttons == 50) {
    notify("You have spawned 50 buttons! Keep it up!");
  } else if (numbuttons == 100) {
    notify("You have spawned 100 buttons! You have unlocked the button log!");
    var buttonlog = document.createElement("button");
    buttonlog.innerHTML = "Button Log!!";
    buttonlog.className = "buttonlog";
    document.body.appendChild(buttonlog);
    buttonlog.addEventListener("click", fbuttonlog);
  } else if (Math.floor(Math.random() * 100) == 2) {
    if (buttons_unlocked.includes("legendarybutton") == false) {
      notify("You unlocked The Legendary Button!");
      buttons_unlocked.push("legendarybutton");
    }
    var legendarybutton = document.createElement("button");
    legendarybutton.innerHTML = "This button only has a 1% chance of spawning! Your pretty lucky!";
    legendarybutton.className = "legendarybutton";
    document.body.appendChild(legendarybutton);
  }
  else {
    var newButton = document.createElement("button");
    newButton.innerHTML = "This button spawns another button!";
    newButton.className = "spawnbutton";
    document.body.appendChild(newButton);
    newButton.addEventListener("click", spawnbuttonclicked);
  }
}
button2.addEventListener("click", spawnbuttonclicked);


function redclick() {
  if (document.body.style.backgroundColor == "") { document.body.style.backgroundColor = "red"; }
  if (document.body.style.background == "white") { document.body.style.background = "red"; } else { document.body.style.background = colors[colors.indexOf(document.body.style.background) + 1]; }
}
