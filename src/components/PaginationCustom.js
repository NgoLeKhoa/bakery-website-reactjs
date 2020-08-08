import React from "react";
import { Pagination } from "react-bootstrap";

function PaginationCustom(props) {
    const pageNumbers = [];
    for (let i=1; i <= Math.ceil(props.totalProducts/props.productsPerPage); i++ ) {
        pageNumbers.push(i)
    }

    const elmPagination = pageNumbers.map((page, idx) => {
        const onClick = (typeOfAction) => {
            props.onChangePageNumber(typeOfAction, page)
        }
        return (
                <Pagination.Item 
                    key={idx}
                    active={props.currentPage === page} 
                    onClick={()=> onClick("paginate")}
                >
                    {page}
                </Pagination.Item>
        )
    })

    return (
            <Pagination size="lg" className="justify-content-center mb-5">
                {elmPagination}
            </Pagination>
    )
}

export default PaginationCustom;