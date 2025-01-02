import React from "react";

interface Column {
  header: string;
  accessor?: string;
  renderActions?: (item: any) => React.ReactNode;
  renderStatus?: (item: any) => React.ReactNode;
}

interface ExchangeCommonTableProps {
  columns: Column[];
  data: any[];
  renderActions?: (item: any) => React.ReactNode;
}

const ExchangeCommonTable: React.FC<ExchangeCommonTableProps> = ({ columns, data, renderActions }) => {
  return (
    <table className="table-auto w-full text-left border-collapse border-t-2 border-gray-500">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="border px-4 py-2">{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-t whitespace-nowrap">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="border px-4 py-2">
                {/* 액세스 가능한 데이터 */}
                {column.accessor ? item[column.accessor] : null}

                {/* 비고 칸에 renderActions 적용 */}
                {column.renderActions && renderActions && renderActions(item)}

                {/* 상태 열에 renderStatus 적용 */}
                {column.renderStatus && column.renderStatus(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExchangeCommonTable;
