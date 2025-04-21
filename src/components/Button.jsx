const Button = ({ label, onClick }) => {
    const style = {
      padding: "15px",
      backgroundColor: "#4b4b4b",
      color: "#fff",
      borderRadius: "10px",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
      transition: "0.2s",
    };
  
    const hoverStyle = {
      backgroundColor: "#666",
    };
  
    return (
      <button
        onClick={onClick}
        style={style}
        onMouseEnter={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = style.backgroundColor)}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  