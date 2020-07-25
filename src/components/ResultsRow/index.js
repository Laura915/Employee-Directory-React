import React from "react";

function ResultsRow(props) {
  return (
    <tr>
      <th><img alt={props.image} src={props.image} /></th>
      <th>{props.name}</th>
      <th>{props.phone}</th>
      <th>{props.email}</th>
    </tr>
  );
}

export default ResultsRow;



