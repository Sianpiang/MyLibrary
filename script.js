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

function bookStatus(book){
    if(MyLibrary[book].haveread === "Read"){
        MyLibrary[book].haveread = "Not Read";
    }
    else{
        MyLibrary[book].haveread = "Read"; 
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
    
    //Adding the books
    addBooks(book);

    //Clearing the field
    clearField();
})

//Delete function

document.querySelector(".myList").addEventListener('click',(e)=>{
    deleteBook(e.target);
})

document.querySelector(".myList").addEventListener('click',(e)=>{
    bookStatus(e.target);
})



