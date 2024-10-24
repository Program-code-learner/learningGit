import React, { FormEvent, useState } from 'react';
import jsonData from '../assets/data.json'; // Adjust the path as necessary
import { createColumnHelper, useReactTable, ColumnDef, getCoreRowModel, flexRender, SortingState, getSortedRowModel, getFilteredRowModel, getPaginationRowModel } from '@tanstack/react-table';

// Define the structure of the data
interface DataType {
  id: number;             // 'id' should be a number
  name: string;          // 'name' should be a string
  email: string;         // 'email' should be a string
  contactNumber: string; // 'contactNumber' should be a string
}

const columnHelper = createColumnHelper<DataType>();

const columns = [
  columnHelper.accessor('id', {
    cell: (Info) => Info.getValue(),
    header: () => <span>Id</span>,
    footer: () => null,
  }),
  columnHelper.accessor('name', {
    cell: (Info) => Info.getValue(),
    header: () => <span>Name</span>,
    footer: () => null,
  }),
  columnHelper.accessor('email', {
    cell: (Info) => Info.getValue(),
    header: () => <span>Email</span>,
    footer: () => null,
  }),
  columnHelper.accessor('contactNumber', {
    cell: (Info) => Info.getValue(),
    header: () => <span>Contact Number</span>,
    footer: () => null,
  }),
];

function Table() {
  // const [data] = React.useState<DataType[]>(() => [...jsonData]); // Ensure the state is typed
  // const [user , setUser] = useState([]);
  const [searchValue ,  setSearchValue] = useState("");
 
  const [inputSearchValue, setInputSearchValue] = useState("");
  const submitSearchForm = (e:FormEvent) => {
    e.preventDefault();
    setSearchValue(inputSearchValue);
  };
  const data: DataType[]=React.useMemo(()=>jsonData as DataType[],[]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter , setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state:{
      sorting,
      globalFilter,
    },
    initialState:{
      pagination: {
        pageSize: 5,
      },
    },
    getCoreRowModel:getCoreRowModel(),
    onSortingChange:setSorting,
    getPaginationRowModel : getPaginationRowModel(),
    getSortedRowModel:getSortedRowModel(),
    onGlobalFilterChange:setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  })
  // console.log(table.getRowModel(),"row model-----");

  return (
    <div className='flex justify-center flex-col items-center'>
      <div >
        <input className='border-2 bg-black text-white'  value={globalFilter ?? ""}
        onChange={(e)=> setGlobalFilter(e.target.value)}
        placeholder='search' />
      </div>
      <table className='bg-gray-100 '>
        <thead  >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header)=>(
                <th className='p-16'  key={header.id}>
                  <div onClick={header.column.getToggleSortingHandler()}>
                    {
                      flexRender(header.column.columnDef.header, header.getContext())
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody >
          {
            table.getRowModel().rows.map(row=>(
              <tr  key={row.id}>
                {row.getVisibleCells().map((cell)=>(
                  <td className='pl-16' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        <span className='mr-2'>Items per page</span>
        <select value={table.getState().pagination.pageSize} onChange={(e)=>table.setPageSize(Number(e.target.value))}>
          {[5,10,20].map(pageSize=>(
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
      
    </div>
  );
}

export default Table;
