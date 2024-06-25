import React from 'react'
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../feature/BookSlice';
import { useState } from 'react';

const BookDetails = ({ book, closeForm }) => {
  const generateBookId = () => {
    return Math.floor(Math.random() * 10000);
  };
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(
      book || { id: generateBookId(), name: '', price: '', category: '', description: '' }
    );
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (book) {
        dispatch(updateBook(formData));
      } else {
        dispatch(addBook(formData));
      }
      closeForm();
    };

  return (
    <div className='bookForm'>
 <form onSubmit={handleSubmit}>
        <h2>{book ? 'Edit Book' : 'Add Book'}</h2>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={closeForm}>Cancel</button>
      </form>
    </div>
  )
}

export default BookDetails