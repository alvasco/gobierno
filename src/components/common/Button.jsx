'react';

const Button = ({texto}) => {
  return <>
  <button style={{
    background: '#23A455',
    color: '#fff',
    border: 'none',
    padding: '10px 58px',
    borderRadius: '50px',
    fontSize: '20px',
    marginBottom: '20px',
  }}>
      {texto}
  </button>
  </>;
};

export default Button;
