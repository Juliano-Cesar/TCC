import * as React from "react";
import Button from "@mui/material/Button";

export default function buttonNew(temp) {
  return (
    <Button
      style={{
        color: "red",
        backgroundColor: "white",
        width: "100px",
        padding: "10px 60px",
        borderRadius: "10px",
        margin: "20px",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      {temp}
    </Button>
  );
}
