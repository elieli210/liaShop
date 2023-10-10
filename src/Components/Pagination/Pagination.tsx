// React
import React, { useState } from "react";
// React

// CSS
import styles from "./Pagination.module.css";
// CSS

// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// Icons

// Pagination
import ReactPaginate from "react-paginate";
// Pagination

type PaginationProps = {
  dataForPagination: {
    totalPages: number;
    currPage: number;
  };

  onPageNumbersClick: (pageNumber: number) => void;
  onPageNumberChange: (pageNumber: number) => void;
};

const Pagination: React.FunctionComponent<PaginationProps> = ({
  dataForPagination: { totalPages, currPage },
  onPageNumbersClick,
  onPageNumberChange,
}) => {
  //
  //
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1);
    onPageNumbersClick(selectedPage.selected + 1);
  };
  console.log("currentPage : ", currentPage);
  return (
    <>
      <div className={`${styles.paginationContainer} `}>
        <div className="">
          <ReactPaginate
            previousLabel={
              <IoIosArrowBack
                style={{
                  border: "1px solid #E9ECEF",
                  borderRadius: "50vw",
                  color: "#8392AB",
                  width: "24px",
                  height: "24px",
                  marginRight: "4px",
                }}
                onClick={() => {
                  if (Number(currPage) <= 1) {
                    return;
                  }
                  onPageNumberChange(currPage - 1);
                }}
              />
            }
            onPageChange={handlePageChange}
            nextLabel={
              <IoIosArrowForward
                style={{
                  border: "1px solid #E9ECEF",
                  borderRadius: "50vw",
                  color: "#8392AB",
                  width: "24px",
                  height: "24px",
                  marginLeft: "4px",
                }}
                onClick={() => {
                  if (Number(currPage) >= totalPages) {
                    return;
                  }
                  onPageNumberChange(currPage + 1);
                }}
              />
            }
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={totalPages}
            pageClassName={`${styles.otherEl}`}
            pageLinkClassName={``}
            previousClassName={`${styles.nextAndBackEl}`}
            previousLinkClassName={``}
            nextClassName={`${styles.nextAndBackEl}`}
            nextLinkClassName={``}
            breakLabel="..."
            breakClassName={`${styles.otherEl}`}
            breakLinkClassName={`${styles.otherEl}`}
            containerClassName={`${styles.paginationContainer}`}
            activeClassName={` ${styles.activeEl}`}
            renderOnZeroPageCount={null}
            forcePage={currPage - 1}
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
