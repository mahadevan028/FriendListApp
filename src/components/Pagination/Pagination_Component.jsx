import React from 'react'

function Pagination_Component({onPreviousCallback, pageNumbers, onSetPageCallback, selectedPage, onNextCallback}) {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {selectedPage === 1 ? (
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          ) : (
            <li className="page-item">
              <a
                onClick={onPreviousCallback}
                className="page-link"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          )}
          {pageNumbers.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => onSetPageCallback(item + 1)}
                className="page-item"
              >
                {item + 1 === selectedPage ? (
                  <a href="#" className="page-link selected">
                    {item + 1}
                  </a>
                ) : (
                  <a href="#" className="page-link">
                    {item + 1}
                  </a>
                )}
              </li>
            );
          })}
          {selectedPage === pageNumbers[pageNumbers.length - 1] + 1 ? (
            <li className="page-item disabled" >
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          ) : (
            <li className="page-item" onClick={onNextCallback}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
}

export default Pagination_Component
