import React from "react";

import "./Grid.scss";

const Grid = ({ columns, children }) => {
  const gridClassName = `Grid Grid_${columns}`;
  return <div className={gridClassName}>{children}</div>;
};

export default Grid;
