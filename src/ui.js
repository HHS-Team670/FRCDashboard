// Define UI elements
var ui = {
    timer: document.getElementById('timer'),
    robotState: document.getElementById('robot-state'),
    multiCamSRC: document.getElementById('multicam-src'),
    navx: {
      arm: document.getElementById('navx-arm'),
      number: document.getElementById('navx-number')
    },
    turret: {
      arm: document.getElementById('turret-arm'),
      number: document.getElementById('turret-number')
    }
};

let allFieldLocations = ["left-rocket-top", "left-rocket-middle", "left-rocket-bottom", "left-cargo-far", "left-cargo-mid", "left-cargo-close", "left-cargo-alliance", "right-cargo-alliance", "right-cargo-far", "right-cargo-mid", "right-cargo-close", "right-rocket-top", "right-rocket-middle", "right-rocket-bottom", "right-loading-station", "left-loading-station"];

NetworkTables.addKeyListener('/Pi-Dashboard/robotTime', (key, value) => {
  var minutes = ~~(value / 60); // converts to integer
  var seconds = (value - 60*minutes) % 60;
  seconds = (seconds < 10) ? '0'+seconds : seconds;
  ui.timer.style.color = `rgb(0, 200, 0)`;
  if (value < 135) ui.timer.style.color = `rgb(255, 255, 255)`;
  if (value < 30) ui.timer.style.color = `rgb(200, 0, 0)`;
  ui.timer.innerHTML = minutes + ':' + seconds;
});

NetworkTables.addKeyListener('/Pi-Dashboard/gyro', (key, value) => {
  var angle = value % 360;
  ui.navx.number.innerHTML = angle + 'º';
  ui.navx.arm.style.transform = `rotate(${angle}deg)`;
});

// NetworkTables.addKeyListener('/SmartDashboard/Safety\ Mode\ Enabled', (key, value) => {
//   document.getElementById('test').innerHTML = value;
// });

var keyName = [];

window.onkeyup = function(event) {
    let key = event.key;
    keyName.push(key);

    if (key == '9') {
      document.getElementById('test').innerHTML = '9 pressed';
      clearHighlight();
      //in the foreloop call pop
      for(i=0; i <=Array.length; i++){
        keyName.pop();
      }
    }
    if (key == '0') {
      document.getElementById('test').innerHTML = '9 pressed';
      clearHighlight();
      keyName.pop();

    }
    if(key == 'w'){
      document.getElementById('test').innerHTML = 'w pressed';
      clearHighlight();
    }
}

//create a loop to go through the array and then for each element call the appropriate highlight method

var start = keyName[0];
var end = keyName[1];

  if (start == 'a') {
    highlight('left-rocket-top', 'green');
  }
  if (start == 'j') {
    highlight('left-rocket-middle', 'green');
  }
  if (start == 's') {
    highlight('left-rocket-bottom', 'green');
  }
  if (start == 'b') {
    highlight('left-cargo-far', 'green');
  }
  if (start == 'k') {
    highlight('left-cargo-mid', 'green');
  }
  if (start == 't') {
    highlight('left-cargo-close', 'green');
  }
  if (start == '2') {
    highlight('left-cargo-alliance', 'green');
  }
  if (start == '3') {
    highlight('right-cargo-alliance', 'green');
  }
  if (start == 'c') {
    highlight('right-cargo-far', 'green');
  }
  if (start == 'l') {
    highlight('right-cargo-mid', 'green');
  }
  if (start == 'u') {
    highlight('right-cargo-close', 'green');
  }
  if (start == 'd') {
    highlight('right-rocket-top', 'green');
  }
  if (start == 'm') {
    highlight('right-rocket-middle', 'green');
  }
  if (start == 'v') {
    highlight('right-rocket-bottom', 'green');
  }
  if (start == '1') {
    highlight('left-loading-station', 'green');
  }
  if (start == '4') {
    highlight('right-loading-station' , 'green');
  }
///////////////////////////////////////
  if (end == 'a') {
    highlight('left-rocket-top', 'red');
  }
  if (end == 'j') {
    highlight('left-rocket-middle' , 'red');
  }
  if (end == 's') {
    highlight('left-rocket-bottom', 'red');
  }
  if (end == 'b') {
    highlight('left-cargo-far', 'red');
  }
  if (end == 'k') {
    highlight('left-cargo-mid', 'red');
  }
  if (end == 't') {
    highlight('left-cargo-close', 'red');
  }
  if (end == '2') {
    highlight('left-cargo-alliance', 'red');
  }
  if (end == '3') {
    highlight('right-cargo-alliance', 'red');
  }
  if (end == 'c') {
    highlight('right-cargo-far', 'red');
  }
  if (end == 'l') {
    highlight('right-cargo-mid', 'red');
  }
  if (end == 'u') {
    highlight('right-cargo-close', 'red');
  }
  if (end == 'd') {
    highlight('right-rocket-top', 'red');
  }
  if (end == 'm') {
    highlight('right-rocket-middle', 'red');
  }
  if (end == 'v') {
    highlight('right-rocket-bottom', 'red');
  }
  if (end == '1') {
    highlight('left-loading-station', 'red');
  }
  if (end == '4') {
    highlight('right-loading-station', 'red');
  }


function highlight(toHighlight, color) {
  var location = document.getElementById(toHighlight);
  if(color == 'red'){
    location.style.fill = `rgb(255,0,0)`;

  }
  else if(color == 'green')
  location.style.fill = `rgb(0,255,0)`;
}

function clearHighlight() {
  var len = allFieldLocations.length;
  for (var i = 0; i < len; i++) {
    var location = allFieldLocations[i];
    document.getElementById(location).style.fill = `rgb(0,0,0)`;
  }
}
