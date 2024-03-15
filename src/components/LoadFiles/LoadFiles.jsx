import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// import {
//   Container,
//   Section,
//   H1,
//   // P,
//   // Span,
//   // Ul,
//   // Li,
//   // H4,
// } from 'pages/HomePage/HomePage.styled';

// import { selectLanguages } from 'redux/selectors';
// import lang from 'assets/json/language.json';


const LoadFiles = () => {
  const [_file, setFile] = useState(null);

  useEffect(() => {
    const handleChange = (e) => {
      setFile(e.target.files[0]);
    };

    document.getElementById("file-input").addEventListener("change", handleChange);

    return () => {
      document.getElementById("file-input").removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div>
      <input type="file" id="file-input" />
    </div>
  );
};

export default LoadFiles;
