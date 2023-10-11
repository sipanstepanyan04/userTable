import React, { useState, useEffect } from "react";

export function Row({ editRow, onDelete, arg }) {
  return (
    <tr>
      <td>{arg.id}</td>
      <td>{arg.name}</td>
      <td>{arg.email}</td>
      <td>{arg.phone}</td>
      <td>{arg.address.street}</td>
      <td>{arg.address.suite}</td>
      <td>{arg.company.name}</td>
      <td>
        <button onClick={onDelete(arg.id)} className="delete">
          delete
        </button>

        <button onClick={editRow(arg.id)} className="edit">
          edit
        </button>
      </td>
    </tr>
  );
}
