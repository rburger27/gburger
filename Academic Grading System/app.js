function gradeCheck() {
var ngrade = parseFloat(document.getElementById('gradeScore').value);
if(ngrade > 100){
         document.getElementById('letterGrade').value = "Please Try Again!";
  }
  else if(100 >= ngrade && ngrade >= 90){
       document.getElementById('letterGrade').value = "A";
  }
  else if(89 >= ngrade && ngrade >= 80){
         document.getElementById('letterGrade').value = "B";
  }
  else if(79 >= ngrade && ngrade >= 70){
         document.getElementById('letterGrade').value = "C";
  }
  else if(69 >= ngrade && ngrade >= 60){
         document.getElementById('letterGrade').value = "D";
  }
  else if(59 >= ngrade && ngrade >= 0){
         document.getElementById('letterGrade').value = "F";
  }
  else {
    document.getElementById('letterGrade').value = "Please Try Again!";
  }
}
