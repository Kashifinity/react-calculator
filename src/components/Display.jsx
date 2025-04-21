const Display = ({ value }) => {
    const style = {
      backgroundColor: "#3c3c3c",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      textAlign: "right",
      fontSize: "24px",
      fontFamily: "monospace",
      overflowX: "auto",
    };
  
    return <div style={style}>{value || "0"}</div>;
  };
  
  export default Display;
  