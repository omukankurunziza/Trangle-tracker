function getResult(){
    var side1 = parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);
  if (side1 === side2 && side2 === side3){
      alert("This is an Equirateral triangle");
      window.location.href="equirateral.html";
  }  
  else if(side1 === side2 || side1 === side3 || side2 === side3){
      alert("This is a Isosceles triangle");
      window.location.href="isosceles.html";
  }
  else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1){
      alert("This is a not a difinite triangle");
      
  }
  else {
      alert("This is a scalene triangle");
      window.location.href="scalene.html";
  }
}