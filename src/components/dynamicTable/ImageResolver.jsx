import React from "react";
import { TableCell } from "@mui/material";

const ImageResolver = ({ row }) => {
  return (
    <TableCell padding="normal">
      <a href={row}>
      <img
        src={
          row
        }
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
      </a>
    </TableCell>
  );
};

export default ImageResolver;
