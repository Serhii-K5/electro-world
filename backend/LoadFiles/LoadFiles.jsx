// import { useState, useEffect } from 'react';
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


// const LoadFiles = () => {
//   const [_file, setFile] = useState(null);

//   useEffect(() => {
//     const handleChange = (e) => {
//       setFile(e.target.files[0]);
//     };

//     document.getElementById("file-input").addEventListener("change", handleChange);

//     return () => {
//       document.getElementById("file-input").removeEventListener("change", handleChange);
//     };
//   }, []);

//   return (
//     <div>
//       <input type="file" id="file-input" />
//     </div>
//   );
// };

// export default LoadFiles;

import { useState, useEffect } from 'react';
const xml2js = require('xml2js');
const fs = require('fs');

const DATA_DIR = 'assets/json'; // Path to your "files" directory

const LoadFiles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const xmlData = await fs.promises.readFile('import.xml', 'utf8');
        const parser = new xml2js.Parser();
        const jsonData = await parser.parseStringPromise(xmlData);

        const categories = jsonData.TABLES.TABLE_CATEGORY[0].CATEGORY.map(
          category => ({
            id: category.CAT_ID[0],
            name: category.CAT_NAME[0],
            parentId: category.CAT_PARENTID[0],
            photo: category.PHOTO[0],
          })
        );

        const products = jsonData.TABLES.TABLE_PRODUCT[0].PRODUCT.map(
          product => ({
            id: product.ID[0],
            code: product.CODE[0],
            name: product.NAME[0],
            memo: product.MEMO[0],
            price: product.PRICE[0],
            quantity: product.QUANTITY[0],
            parentId: product.PARENTID[0],
            fullPath: product.FULLPATH[0],
            photo: product.PHOTO[0],
            ordered: 0,
          })
        );

        await fs.promises.mkdir(DATA_DIR, { recursive: true }); // Create directory if it doesn't exist
        await fs.promises.writeFile(
          `${DATA_DIR}/categories.json`,
          JSON.stringify(categories, null, 2)
        );
        await fs.promises.writeFile(
          `${DATA_DIR}/products.json`,
          JSON.stringify(products, null, 2)
        );

        console.log('Data saved successfully!');
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && <p>Data processed successfully!</p>}
    </div>
  );
}

export default LoadFiles;