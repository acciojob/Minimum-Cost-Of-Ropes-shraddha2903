function calculateMinCost() {
  //your code here
	var x = document.getElementById("rope-lengths").value;
	
  var input= x.split(",");

  // let n=input.length;
	var ans=0;
  while(input.length>1)
	  {
		  input.sort();
		  let sum=0;
		   sum=parseInt(input[0])+parseInt(input[1]);
		  document.getElementById('intr').innerHTML=sum;
		  
		  ans=parseInt(ans)+sum;
		  console.log(ans);
		  input.splice(0,2,sum);
		  break;
	  }
	document.getElementById('result').innerHTML=ans;
}  
