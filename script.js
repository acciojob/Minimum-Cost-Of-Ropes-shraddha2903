function calculateMinCost() {
  //your code here
	// 4,2,7,6,9
	var x = document.getElementById("rope-lengths").value;

   var input=[];
   input= x.split(",");

  // let n=input.length;
	var ans=0;
	input.sort();
   while(input.length>1)
	  {

		  // ans+=parseInt(input[i]);
		  // document.getElementById('intr').innerHTML=ans+input[i];
		  input.sort();
		  let sum=0;
		   sum=parseInt(input[0])+parseInt(input[1]);
		 
		  ans=ans+sum;
		  
		  input.splice(0,2,sum);
		 
	  }

 // document.getElementById('intr').innerHTML=ans;
	
	document.getElementById('result').innerHTML=ans;
}  
