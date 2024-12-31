import React from 'react';

function PermissionRow({ menu, permissions }) {
  return (
    <tr className="text-center border">
      <td className="p-2 border">{menu}</td>
      <td className="p-2 border">
        <label>
          <input type="radio" name={`menuExposure-${menu}`} value="O" checked={permissions.menuExposure === "O"} /> O
        </label>
        <label>
          <input type="radio" name={`menuExposure-${menu}`} value="X" checked={permissions.menuExposure === "X"} /> X
        </label>
      </td>
      <td className="p-2 border">
        <label>
          <input type="radio" name={`viewPermission-${menu}`} value="O" checked={permissions.viewPermission === "O"} /> O
        </label>
        <label>
          <input type="radio" name={`viewPermission-${menu}`} value="X" checked={permissions.viewPermission === "X"} /> X
        </label>
      </td>
      <td className="p-2 border">
        <label>
          <input type="radio" name={`editPermission-${menu}`} value="O" checked={permissions.editPermission === "O"} /> O
        </label>
        <label>
          <input type="radio" name={`editPermission-${menu}`} value="X" checked={permissions.editPermission === "X"} /> X
        </label>
      </td>
      <td className="p-2 border">
        <label>
          <input type="radio" name={`deletePermission-${menu}`} value="O" checked={permissions.deletePermission === "O"} /> O
        </label>
        <label>
          <input type="radio" name={`deletePermission-${menu}`} value="X" checked={permissions.deletePermission === "X"} /> X
        </label>
      </td>
      <td className="p-2 border">
        <label>
          <input type="radio" name={`downloadPermission-${menu}`} value="O" checked={permissions.downloadPermission === "O"} /> O
        </label>
        <label>
          <input type="radio" name={`downloadPermission-${menu}`} value="X" checked={permissions.downloadPermission === "X"} /> X
        </label>
      </td>
    </tr>
  );
}

export default PermissionRow;
