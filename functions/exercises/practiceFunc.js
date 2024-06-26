function makeLine(size){
    let i =0;
    line = "";
    for(i=0; i<size; i++){
        line += "#";
    }
    return line;
}

function makeSquare(size){
    return makeRectangle(size,size);
}

function makeRectangle(width,height){
    let rectangle="";
    let i;
    for (i = 0; i<height; i++){
        rectangle = rectangle + "\n" + makeLine(width);
    }
    return rectangle;
}

function makeDownwardStairs(height){
    let stair = "";
    let i;
    for(i=0; i<height; i++){
        stair = stair+ "\n"+ makeLine(i+1);
    }
    return stair;
}

function makeSpaceLine(numSpaces, numChars){
    let spaceLine;
    let i;
    let spaces = "";
    for(i =0;i<numSpaces;i++){
        spaces += " ";

    }

    spaceLine= spaces+makeLine(numChars)+spaces;
    return spaceLine;
}

function makeIsoscelesTriangle(height){
    let triangle = "";
    let i;
    for(i=0; i<height; i++){
        triangle= triangle+"\n"+makeSpaceLine((height-i-1),(2*i+1));
    }
    return triangle;
}

function makeDiamond(height){
    let str1 = makeIsoscelesTriangle(height);
    let arr = str1.split("\n");
    let revstr1 = "";
    for(let i = 0; i<arr.length;i++ ){
        revstr1 = arr[i]+"\n"+revstr1.slice(0,-1);
    }
    return str1.slice(1) +"\n"+ revstr1;
}
/*console.log(makeLine(5));
console.log(makeSquare(5));
console.log(makeRectangle(5, 3));
console.log(makeDownwardStairs(5));
console.log(makeSpaceLine(3, 5));
console.log(makeIsoscelesTriangle(5));*/
console.log(makeDiamond(5));