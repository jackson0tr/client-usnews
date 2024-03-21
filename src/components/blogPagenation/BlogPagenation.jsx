const BlogPagination = ({
    currentPage,
    totalItems,
    onPageChange,
    isPreviousData,
}) => {
    const pageCount = Math.ceil(totalItems / 9);

    const handlePrevClick = () => onPageChange(currentPage - 1);
    const handleNextClick = () => onPageChange(currentPage + 1);

    return (
        <div className="btn-group">
            <button
                className="btn"
                disabled={currentPage === 1 || isPreviousData}
                onClick={handlePrevClick}
            >
                «
            </button>
            <button className="btn">Page {currentPage}</button>
            <button
                className="btn"
                disabled={
                    currentPage === pageCount || isPreviousData}
                onClick={handleNextClick}
            >
                »
            </button>
        </div>
    )
}

export default BlogPagination;