import React from 'react';

interface TableProps {
  columns: string[];
  data: any[]; // Array of objects, each object is a row
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="w-full border-collapse bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="border border-light-border dark:border-dark-border p-2 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="border border-light-border dark:border-dark-border p-2">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
