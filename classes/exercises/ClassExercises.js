// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, numCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.numCheckedOut = numCheckedOut;
        this.discarded = discarded;
    }
   checkOut(uses=1){
    this.numCheckedOut +=  uses;
   }

}
class Novel extends Book{
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
     }

    throwOut(){
        if (this.numCheckedOut >100)
            this.discarded = true;
    }
}

class Manual extends Book{
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
     }

    throwAway(currentYear){
        if(currentYear- this.copyright >5)
            this.discarded = true;
    }

}


let prideP = new Novel("Pride and Prejudice","Jane Austen",1813,'1111111111111',432,32, false);

let shuttleMan = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, '0000000000000' ,1147, 1, false);


// Code exercises 4 & 5 here:


shuttleMan.throwAway(2024);
console.log(shuttleMan);
prideP.checkOut(5);
console.log(prideP);





