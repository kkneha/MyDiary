import React from "react";
import { useState } from "react";
import "../css/Pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({totalPages}) {
    const [currentPage, setCurrentPage] = useState(1);
    var pageList = []
    for(let i = 1; i <= totalPages; i++) {
      pageList.push(i)
    }

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
        {pageList.map((data,index) => {
          return <div key={index} className='nos'>{data}</div>
        })}
      </div>
      <div className='next'>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </div>
    </div>
  );
}
