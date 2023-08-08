var grades= [2, 5, , , 9, 8, , 8];

var sum = 0;
var count = 0;

if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
    if (grades[index] != undefined){
		  sum += grades[index];
      count++;
    }
  }
  
  document.write(sum/count);
}
else
  document.write("Empty Array");
