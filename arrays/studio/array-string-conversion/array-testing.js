let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

function checks(str ="",delimiter ="" ){
	let output = str.includes(delimiter);
	return output;
	
}

//2) 
function reverseCommas(str = "") {
	//TODO: 1. create and instantiate your variables.
	let check = checks(str,',');
	let output;
	//TODO: 2. write the code required for this step
	
	if (check){
		let arr = str.split(",");
		arr = arr.reverse();
		output = arr.join(",");
	}

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash(str = "") {
	let check = checks(str,';');
	let output;
//TODO: write the code required for this step
	
	if(check){
		let arr = str.split(";");
		arr = arr.sort();
		output = arr.join("-");
	}
  
	return output;
}

//4)
function reverseSpaces(str = "") {
	let check = checks(str,' ');
	let output;
  //TODO: write the code required for this step
	if(check){
		let arr = str.split(" ");
		arr = arr.sort().reverse();
		output = arr.join(" ");
	}
	return output;
}

//5)
function commaSpace(str = "") {
	let check = checks(str,', ');
	let output;
	//TODO: write the code required for this step
	if(check){
		let arr = str.split(", ");
		arr = arr.reverse();
		output = arr.join(",");

	}
  
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
