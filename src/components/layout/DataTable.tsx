import * as React from "react";
import styled from "styled-components";

interface DataTableProps {
  columns: string[];
  widths?: string[];
}

const DataTable: React.SFC<DataTableProps> = ({
  children,
  widths,
  columns
}) => (
  <Wrapper>
    <thead>
      <tr>
        {columns.map((column, i) => (
          <th
            key={i}
            style={widths && widths[i] ? { width: widths[i] } : undefined}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </Wrapper>
);

export default DataTable;

const Wrapper = styled("table")`
  margin-bottom: 0;
  border-top: 1px solid darken(0.05, "#ebebea");
  border-bottom: 1px solid darken(0.05, "#ebebea");

  thead {
    tr {
      th {
        padding: 1rem;
        text-align: left;
        border-bottom: 2px solid darken(0.05, "#ebebea");
      }
    }
  }

  tbody {
    tr {
      border-top: 1px solid darken(0.05, "#ebebea");

      &:nth-child(even) {
        background: darken(0.025, "#ebebea");
      }

      td {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
      }
    }
  }
`;
