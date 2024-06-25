import React, { useEffect } from "react";
import "./Tracker.css";

function Table({ initiative, headings, table_Rows }) {
  function renderTableHeader() {
    return headings.map((obj, index) => {
      return <th key={index}>{obj.name}</th>;
    });
  }

  const convertTimeStamp = (date) => {
    const dateParts = date.split("-");
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2));
  };
  function renderTableData() {
    return table_Rows?.map((rowData, id) => {
      return (
        <tr key={id}>
          <td id="task_ID_Row">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M18 14L15.5 12.5L13 14V6H18V14Z"
                fill="#31ee34"
              />
            </svg>
            {rowData.userId}
          </td>
          <td id="task_Title_Row">{rowData.username}</td>
          <td>{rowData.email}</td>
          <td>{rowData.password}</td>
          <td>{convertTimeStamp(rowData.lastLoggedIn).toLocaleString()}</td>
          <td>{convertTimeStamp(rowData.createdAt).toLocaleString()}</td>
          {/* <td>{rowData.createdAt}</td> */}
        </tr>
      );
    });
  }

  return (
    <div className="tracker_Body_Wrapper">
      <div className="tracker_Body">
        <div className="tracker_Title_Holder">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M1 3H23L12 22" fill="#d3ad44" />
          </svg>
          <span> User Data</span>
        </div>
        <hr style={{ color: "grey", width: "97%" }} />
        <div className="progress_Bar"></div>
        <table id="Tasks">
          <tbody>
            <tr id="heading_Row">{renderTableHeader()}</tr>
            {renderTableData()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
