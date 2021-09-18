import React from "react";
import { useState } from "react";
import "../css/Pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);

    function postHandler({data}) {
        function goToNextPage() {
        setCurrentPage((page) => page + 1);
        }

        function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
        }

        function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
        }
  }

  return (
    <div className='page-nos-wrapper'>
      <div className='prev'>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </div>
      <div className='page-no'>
        <span className='nos'>1</span>
        <span className='nos'>2</span>
      </div>
      <div className='next'>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </div>
    </div>
  );
}
