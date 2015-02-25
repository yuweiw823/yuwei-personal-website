window.onload = function () {  var typewriterArr = [];
  var typewriterDisplay = "";
  var speed = 100;
  var content = document.getElementById("logoinput").innerHTML;
  var display = document.getElementById("logooutput");

  //var middleCube = document.getElementById('middlecube');
  //var sideIcon = document.getElementsByClassName('sideicon');
  typeWriter(content, display);

  function typeWriter(tThis, output){
    for (var j=0; j<tThis.length; j++){
      typewriterArr += tThis.charAt(j); //先把所有的string里char推入一个数组
    }

    var i=0;
    var timer = function(){         //每次增加1
      if (i<typewriterArr.length){
        typewriterDisplay += typewriterArr[i];
        output.innerHTML=typewriterDisplay;
        i++;
      } 
    }
    setInterval(timer, speed);
  }
}


  