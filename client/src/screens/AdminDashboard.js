// AdminDashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ad.css';

const AdminDashboard = () => {
  const [view, setView] = useState('');

  const studentData = [
    { _id: "66bcbaf4d86f459d8d0d4779", name: "SHARMILA R", email: "sharmi@gmail.com", roll_no: "22BSR053", branch: "bsc", addmission_year: "2021" },
    { _id: "66bef324f01347a2d2aecb48", name: "nidhu", email: "nidhu@gmail.com", roll_no: "22BSR035", branch: "bsc", addmission_year: "2022" },
    { _id: "66c84c86deee64c4ac3aac04", name: "dharunya", email: "dharunya@gmail.com", roll_no: "11", branch: "bsc", addmission_year: "2021" },
    { _id: "66efd2b426f4f42f5e93d966", name: "shankar", email: "shankar@gmail.com", roll_no: "34", branch: "IT", addmission_year: "2023" },
  ];

  const bookData = [
    { _id: "66bec8b9b3adb2bd123d5539", title: "The Tempest", author: "Shakespeare" },
    { _id: "66bec914b3adb2bd123d553a", title: "Two States", author: "Chetan Bhagat" },
    { _id: "66bef0e1cd49039bb364fac0", title: "The Wings of Fire", author: "Dr. APJ" },
    { _id: "66bef434cd49039bb364fac2", title: "Rich Dad Poor Dad", author: "Pranav" },
    { _id: "66bef457cd49039bb364fac3", title: "The Subtle Art", author: "Sashank" },
  ];

  const borrowedData = [
    { userName: "SHARMILA R", title: "Power of Subconscious Mind", author: "RN Ravi" },
    { userName: "Shankar", title: "Two States", author: "Chetan Bhagat" },
    { title: "The Wings of Fire", author: "Dr.APJ" },
    { title: "Rich Dad Poor Dad", author: "Pranav" },
    { title: "The Subtle Art", author: "Sashank" },
  ];

  const recommendedBooksData = [
    { name: "Atomic Habits", publisher: "Penguin Books", author: "James Clear" },
    { name: "Educated", publisher: "Random House", author: "Tara Westover" },
    { name: "The Alchemist", publisher: "HarperCollins", author: "Paulo Coelho" },
    { name: "Becoming", publisher: "Crown Publishing Group", author: "Michelle Obama" },
    { name: "Sapiens", publisher: "Harper", author: "Yuval Noah Harari" },
    { name: "The Tempest", publisher: "Penguin Classics", author: "Shakespeare" },
    { name: "Two States", publisher: "Rupa Publications", author: "Chetan Bhagat" },
    { name: "The Wings of Fire", publisher: "Universities Press", author: "Dr. APJ Abdul Kalam" },
    { name: "Rich Dad Poor Dad", publisher: "Plata Publishing", author: "Robert Kiyosaki" },
    { name: "The Subtle Art of Not Giving", publisher: "HarperOne", author: "Mark Manson" },
    { name: "xxx", publisher: "yyy", author: "ZZZ" }
  ];

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <Link to="/" className="home-button">Home</Link>

      <div className="button-group">
        <button onClick={() => setView('students')}>View Student Information</button>
        <button onClick={() => setView('books')}>View Book Information</button>
        <button onClick={() => setView('borrowed')}>View Borrowed Books</button>
        <button onClick={() => setView('recommended')}>View Recommended Books</button>
      </div>

      <>
        {view === 'students' && (
          <div>
            <h2>Student Information</h2>
            <table className="student-table">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Branch</th>
                  <th>Admission Year</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map(student => (
                  <tr key={student._id}>
                    <td>{student.roll_no}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.branch}</td>
                    <td>{student.addmission_year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === 'books' && (
          <div>
            <h2>Book Information</h2>
            <table className="student-table">
              <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {bookData.map(book => (
                  <tr key={book._id}>
                    <td>{book._id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === 'borrowed' && (
          <div>
            <h2>Borrowed Books Information</h2>
            <table className="student-table">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Book Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {borrowedData.map(record => (
                  <tr key={record.title}>
                    <td>{record.userName || 'N/A'}</td>
                    <td>{record.title}</td>
                    <td>{record.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {view === 'recommended' && (
          <div>
            <h2>Recommended Books Information</h2>
            <table className="student-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Publisher</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {recommendedBooksData.map((book, index) => (
                  <tr key={index}>
                    <td>{book.name}</td>
                    <td>{book.publisher}</td>
                    <td>{book.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    </div>
  );
};

export default AdminDashboard;
