import React from 'react';

import NotesContainer from '../../containers/NotesContainer';

class Book extends React.Component {
    
   

    render() {

    let book = this.findBook()
    

    if (book) {
        return (
            <div className="container">

            <div className="card">
                <div className="card-header">
                    Book Details
                </div>

                <div className="card-body">
                <div className="row">
                    <div className="col">
                        <img src={book.img} alt={book.title} />
                        <br /><br />
                        {this.renderButton()}
                    </div>
                    <div className="col-8">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.authors}</p>
                        <p className="card-text">{book.description}</p>
                    </div>
                </div>
                </div>
            </div>
            {this.renderNotes()}
            </div>
        )
        } else {
            return null
        }
    };

};

export default Book;