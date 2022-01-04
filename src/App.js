import React, { useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [books, setBooks] = useState();

  const sendRequest = () => {
    axios.get("http://localhost:4000/", { headers: { 'Content-Type': 'application/json', mode: "no-cors" } }).then((res) => {
      setBooks(res.data);
    });
  }

  return (
    <div className="App">
      {!books ? (<p>Не найдено ни одной книги</p>) : (
        <table border="1">
          <caption>Books</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {books && books.map((book, i) => (
              <tr key={i}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={sendRequest}>Send Request</button>
    </div>
  );
}