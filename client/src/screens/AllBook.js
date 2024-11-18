import React, { useState, useEffect } from 'react';
import { getAllBook, filterBook } from "../actions/book_action";
import { issueABook, getAllIssuedBook } from "../actions/Issue_action";
import { useDispatch, useSelector } from 'react-redux';
import { Toast, Spinner } from "react-bootstrap";

const AllBook = () => {
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState("");
    const [show, setShow] = useState(false);
    const [bookTitle, setBookTitle] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        dispatch(getAllBook());
        dispatch(getAllIssuedBook());
    }, [show, dispatch]);

    const { books } = useSelector(state => state.getAllBookReducer);
    const { all_IssuedBook } = useSelector(state => state.allIssuedBookReducer);
    const { currentUser } = useSelector(state => state.userLoginReducer);

    const userId = currentUser.user._id;
    const userBranch = currentUser.user.branch;
    const userName = currentUser.user.name;

    const filterBook22 = all_IssuedBook?.filter(book => book.userId === userId);
    const newBooksId = filterBook22?.map(book => book.bookId);

    const postData = (book) => {
        if (newBooksId?.includes(book._id)) {
            setError(true);
            setTimeout(() => setError(false), 3000);
            return;
        }

        if (book.copies < 1) {
            console.log("No copies available");
            return;
        }

        const issueUser = {
            title: book.title,
            author: book.author,
            publisher: book.publisher,
            year: book.year,
            userId,
            bookId: book._id,
            userBranch,
            userName,
            copies: book.copies
        };

        dispatch(issueABook(issueUser));
        setBookTitle(book.title);
        setShow(true);
        setTimeout(() => setShow(false), 5000);
        dispatch(getAllBook());
    };

    return (
        <div>
            <div className="col-md-10 m-auto">
                <h3 className='text-center bg-info p-2' style={{ fontFamily: "sans-serif" }}>
                    All AVAILABLE BOOKS IN LIBRARY
                </h3>
                <br />
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Body style={{ backgroundColor: "green", color: "white", fontSize: "18px" }}>
                        You successfully sent an issue request for {bookTitle}
                    </Toast.Body>
                </Toast>
            </div>

            {error && <div className="alert alert-danger">You have already requested this book</div>}

            {!books.length ? (
                <div style={{ marginLeft: "40%", marginTop: "5%" }}>
                    <Spinner animation="border" variant="danger" />
                </div>
            ) : (
                <>
                    <div className="col-md-8 m-auto" style={{ display: "flex" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search book by name"
                            style={{ height: "50px" }}
                            onChange={(e) => setSearchKey(e.target.value)}
                            value={searchKey}
                        />
                        <button onClick={() => dispatch(filterBook(searchKey))} className="btn btn-primary">
                            Search
                        </button>
                    </div>

                    <div className="col-md-10 m-auto">
                        <table className='table table-bordered table-responsive-sm' style={{ marginTop: "20px" }}>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>Serial No.</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Copies</th>
                                    <th>Status</th>
<th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book, index) => (
                                    <tr key={book._id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.copies}</td>
                                        <td>{book.copies > 0 ? "AVAILABLE" : "NOT AVAILABLE"}</td>
                                        <td>
                                            {currentUser.user.isAdmin && (
                                                <i className='fa fa-trash m-1' onClick={() => console.log("okk")}></i>
                                            )}
                                            {!currentUser.user.isAdmin && (
                                                <button onClick={() => postData(book)} className='btn btn-success'>
                                                    Issue
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default AllBook;
                                    