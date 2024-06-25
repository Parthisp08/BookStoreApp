import React, { useState } from "react";
import "./books.css";
import {useDispatch, useSelector} from 'react-redux';
import {deleteBook} from '../feature/BookSlice'
import BookDetails from "./BookDetails";

const BookList = () => {
    const books = useSelector((state)=>state.books.books)
const [selectedBook, setSelectedBook] = useState(null);
const [showForm, setShowForm] = useState(false);
const dispatch = useDispatch();

const handleEditBook = (book) => {
setSelectedBook(book)
setShowForm(true)
}

const handleAddBook = () => {
    setShowForm(true)
    setSelectedBook(null)
}

const handleDelete = (event, id) => {
    event.stopPropagation();
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="bookDiv">
        <p>Book List</p>
        <button onClick={handleAddBook}>Add a Book</button>
        <br />
        <table border="1" cellPadding="5" cellSpacing="0" >
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book Price</th>
              <th>Book Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} onClick={()=>handleEditBook(book)}>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td>{book.category}</td>
                <td><button onClick={(event) => handleDelete(event, book.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
</table>


{showForm && <BookDetails book={selectedBook} closeForm={() => setShowForm(false)} />}

      </div>
    </>
  );
};

export default BookList;
