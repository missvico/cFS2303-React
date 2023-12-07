

function Pagination({currPage, setCurrPage, totalPages}) {

    function handlePageChange(newValue){
        setCurrPage(newValue)
    }
    const pageLinks = []
    for(let i = 1; i<=totalPages; i++){
        pageLinks.push(
            <li class="page-item">
                <a class="page-link" onClick={()=>handlePageChange(i)}>
                    {i}
                </a>
            </li>
        )
    }


  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" onClick={()=>handlePageChange(currPage-1)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageLinks}
        <li class="page-item">
          <a class="page-link" onClick={()=>handlePageChange(currPage+1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination
