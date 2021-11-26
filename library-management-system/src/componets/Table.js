import styled from "styled-components";

import { capitalizeFirstLetter } from "../shared/utils";
const StyledTable = styled.table`
   border: none;
   border-collapse: separate;
   caption-side: top;
   td,
   th {
      border: 1px solid;
   }
   td {
      padding: 5px 10px;
   }
   tbody tr {
      :nth-of-type(even) {
         background-color: ${(props) => props.theme.primary.light};
      }
      :hover {
         background-color: ${(props) => props.theme.primary.dark};
      }
   }
   thead > tr {
      background-color: ${(props) => props.theme.primary.main};
      text-align: center;
   }
   tr > th {
      padding: 0.25em 0.5em;
   }
   tr > td {
      cursor: pointer;
   }
   caption{
      font-size: 0.9em;
      padding: ${(props) => props.theme.spacing(1)};
      font-weight: bold;
      text-align: center;
   }
`;

const TableMarkup = ({ titles, data, handleClick, caption }) => {
   return (
      <StyledTable>
         <caption>{caption}</caption>
         <colgroup>
            {titles.map((title, index) => {
               return <col key={index} />;
            })}
         </colgroup>
         <thead>
            <tr>
               {titles.map((title, index) => {
                  return <th key={index}>{capitalizeFirstLetter(title)}</th>;
               })}
            </tr>
         </thead>
         <tbody>
            {data.map((item, index) => {
               return (
                  <tr key={index} onClick={() => handleClick(item.id)}>
                     {titles.map((title, index) => {
                        return ( 
                           <td key={index}>
                              {typeof item[title] === "boolean"
                                 ? item[title]
                                    ? "Yes"
                                    : "No"
                                 : item[title]}
                           </td>
                        );
                     })}
                  </tr>
               );
            })}
         </tbody>
      </StyledTable>
   );
};

const Table = ({ data, handleRowClick, instruction }) => {
   return data && data.length>0 ? (
      <TableMarkup
         titles={Object.keys(data[0])}
         data={data}
         handleClick={handleRowClick ? handleRowClick : ()=>{}}
         caption={instruction ? instruction : ""}
      />
   ) : (
      "No data to populate"
   );
};

export default Table;
