import Pagination from "react-js-pagination";

interface PaginationProps {
    itemsCountPerPage: number;
    totalItemsCount: number;
    activePage: number;
    setActivePage :any;
  }

const CustomPagination = ({itemsCountPerPage,totalItemsCount,activePage,setActivePage}:PaginationProps)=>{
    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber);
      };
    
    return (
      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          nextPageText="›"
          prevPageText="‹"
          firstPageText="«"
          lastPageText="»"
          linkClass="page-link "
          itemClass="page-item"
          innerClass="pagination "
          activeClass="active"
          
        />
      </div>
    );
}

export default CustomPagination;
