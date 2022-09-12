import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";


const Table = ({columns,onSort,sort,data}) => {
    return(
        <table className="table table-hover">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sort={sort}

            />
            <TableBody
                items={data}
                columns={columns}
            />
        </table>
    );
}

export default Table;