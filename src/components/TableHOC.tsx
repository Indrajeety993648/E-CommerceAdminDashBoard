import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  Column,
  usePagination,
  useSortBy,
  useTable,
  TableInstance,
  TableOptions,
  HeaderGroup,
} from "react-table";

function TableHOC<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      } as any,
    };

    const tableInstance: TableInstance<T> = useTable<T>(
      options,
      useSortBy,
      usePagination
    );

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
    } = tableInstance;

    const {
      nextPage,
      pageCount,
      state: { pageIndex },
      previousPage,
      canNextPage,
      canPreviousPage,
    } = tableInstance.pageOption;

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
          {headerGroups.map((headerGroup: HeaderGroup<T>) => (
  <tr {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map((column: ColumnInstance<T>) => (
      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
        {column.render("Header")}
        {(column as any).isSorted && ( // <-- Access isSorted from the column
          <span>
            {" "}
            {(column as any).isSortedDesc ? (
              <AiOutlineSortDescending />
            ) : (
              <AiOutlineSortAscending />
            )}
          </span>
        )}
      </th>
    ))}
  </tr>
))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={() => previousPage()}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={() => nextPage()}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;