const myList = document.querySelector(".myList");


const MyLibrary = [
    {
        title : "Hello World",
        author : "Ram Kumar",
        pageNo : 150,
        haveread : "Read"
    },
    {
        title : "The art of sleeping",
        author : "Siam Kumar",
        pageNo : 100,
        haveread : "Not Read"
    }

];

function displayBook(){
    MyLibrary.forEach((book)=> addBooks(book));
}

function Books(title,author,pageNo,haveread){
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.haveread = haveread;
}
function addBooks(book){
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pageNo}</td>
    <td><button class = status>${book.haveread}<button></td>
    <td><button class = delete>Del</button></td>
    `;
    myList.appendChild(row);
}

function clearField(){
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pageNo").value = "";
}

function deleteBook(ele){
    if(ele.classList.contains('delete')){
        ele.parentElement.parentElement.remove();
    }
}

function bookstatus(info){
    console.log(MyLibrary[info].haveread);
    if(MyLibrary[info].haveread === "Read"){
        MyLibrary[info].haveread = "Not Read";
    }
    else{
        MyLibrary[info].haveread = " Read";
    }
}

function findBook(libraryArray, name) {
    if (libraryArray.length === 0 || libraryArray === null) {
      return;
    }
    for(item of libraryArray){
        if(item.title === name){
            return libraryArray.indexOf(item);
        }
    }
  }

//Displaying the Books
document.addEventListener('DOMContentLoaded', displayBook());

//Get user Books
document.querySelector("#form-bolte").addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pageNo = document.querySelector("#pageNo").value;
    const haveread = document.querySelector("#haveread").value;

    const book = new Books(title,author,pageNo,haveread);
    MyLibrary.push(book);
    console.log(MyLibrary);
    //Adding the books
    addBooks(book);

    //Clearing the field
    clearField();

})

//Delete function

document.querySelector(".myList").addEventListener('click',(e)=>{
    deleteBook(e.target);
})

//book status update
document.querySelector("table").addEventListener('click',(e)=>{
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    // console.log(currentTarget.innerHTML);
    if(e.target.classList.contains('status')){
        bookstatus(findBook(MyLibrary,currentTarget.innerHTML));
    }
})





