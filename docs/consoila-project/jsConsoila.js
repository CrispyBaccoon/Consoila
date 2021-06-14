enterConsole = function () {
  var x = document.getElementById("inputForm");
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value;
  }
  drawLineInput(text);
};

echo = function (ICC) {
  return ICC;
};
ls = function (ICC) {
  return "It's Empty in Here.";
};
dir = function (ICC) {
  return "It's Empty in Here.";
};
touch = function (ICC) {
  return `New File: ${ICC}`;
};

drawLineInput = function (ICO) {
  consoleOut = document.getElementById("consoleOutput");
  element = document.createElement("div");
  element.setAttribute("class", "console-line");
  element.innerHTML = ICO;
  consoleOut.appendChild(element);
  console.log("in::" + ICO);
  checkInput(ICO);
};

drawLineOutput = function (OCO) {
  consoleOut = document.getElementById("consoleOutput");
  element = document.createElement("div");
  element.setAttribute("class", "out-line");
  element.innerHTML = OCO;
  consoleOut.appendChild(element);
  console.log("out::" + OCO);
};

checkInput = function (inC) {
  if (inC.includes("echo ")) {
    drawLineOutput(echo(inC.replace("echo ", "")));
  }
  if (inC.includes("ls")) {
    drawLineOutput(ls(inC.replace("ls", "")));
  }
  if (inC.includes("dir")) {
    drawLineOutput(dir(inC.replace("dir", "")));
  }
  if (inC.includes("touch")) {
    drawLineOutput(touch(inC.replace("touch ", "")));
  }
};

/*
dwnDo = function (fileName, File) {
  element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8, " + encodeURIComponent(File)
  );
  element.setAttribute("download", fileName);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
*/
