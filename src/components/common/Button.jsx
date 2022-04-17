"react";

const Button = ({ texto, link }) => {
  return (
    <>
      <a
        style={{
          background: "#23A455",
          color: "#fff",
          border: "none",
          padding: "10px 58px",
          borderRadius: "50px",
          fontSize: "20px",
          marginBottom: "20px",
          cursor: "pointer",
          textDecoration: "none",
          
        }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {texto}
      </a>
    </>
  );
};

export default Button;
