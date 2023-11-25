import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "redux/operations";

import CarCard from "components/ProductCard/ProductCard";
import { selectProducts } from "redux/selectors";

import {
  Ul,
  // Button,  // V1 - пагінація з додаванням елементів по натисканню кнопки
  DivShift,   // V2 - пагінація з заміщенням елементів
  DivPagination,  // V2 - пагінація з заміщенням елементів
  DivPage,    // V2 - пагінація з заміщенням елементів
} from './CatalogPage.styled';

// import FilterPanel from 'components/FilterPanel/FilterPanel';


// V1 - пагінація з додаванням елементів по натисканню кнопки
// const CatalogCarsPage = () => {
//   const dispatch = useDispatch();
//   const products = useSelector(selectProducts);
//   const [filteredData, setFilteredData] = useState(products);

//   const [activePage, setActivePage] = useState(0);
//   const [activeFilter, setActiveFilter] = useState(false);
  
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const handleFilter = filteredData => {
//     setActiveFilter(true);
//     setActivePage(0);
//     setFilteredData(filteredData);
//   };

//   const onClickPagination = () => {
//     // setPaginationArray(filteredData.slice(activePage, activePage + 8));
//     setActivePage(activePage + 8);
//   }

//   return (
//     <div style={{ padding: '50px' }}>
//       <FilterPanel data={products} onFilter={handleFilter} />
//       {filteredData.length === 0 && products.length > 0 && !activeFilter && setFilteredData(products)}
//       {filteredData.length > 0 && (
//         <Ul>
//           {filteredData.map((item, index) => (
//             index < activePage + 8 && <li key={item.id}>
//               <CarCard card={item} />
//             </li>
//           ))};
//         </Ul>
//       )}
//       <Button
//         onClick={onClickPagination}
//         style={activePage + 8 > filteredData.length ? {display: "none"} : {display: "block"}}
//       >
//         Load more
//       </Button>
//     </div>
//   );
// };

// export default CatalogCarsPage;


// V2 - пагінація з заміщенням елементів
import products1 from "../../assets/json/products.json";
const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [filteredData, setFilteredData] = useState(products.length > 0 ? products : products1);

  const [activePage, setActivePage] = useState(1);
  const [activeFilter, setActiveFilter] = useState(false);

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleFilter = filteredData => {
    setActiveFilter(true);
    setActivePage(0);
    setFilteredData(filteredData);
  };

  const onClickIncrease  = () => {
    activePage < filteredData.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };

  return (
    <div style={{ padding: '50px', display: 'flex' }}>
      <aside>
        <p>fjslkj</p>
        <p>gfjdfg</p>
      </aside>
      <section>        
      {/* <FilterPanel data={products} onFilter={handleFilter} /> */}
      {filteredData.length === 0 && products.length > 0 && !activeFilter && setFilteredData(products)}
      {filteredData.length > 0 && (
        <Ul>
          {filteredData.map((item, index) => (            
            index < activePage * 8 && <li key={item.id}>
              <CarCard card={item} />
            </li>
          ))}
        </Ul>
      )}
      <DivPagination>
        {activePage > 1 && <DivShift onClick={onClickDecrease}>{"<<"}</DivShift>}
        {activePage === 1 && <DivPage style={{ backgroundColor: 'green' }}>{activePage}</DivPage>}
        {activePage > 1 && <DivPage onClick={onClickDecrease}>{activePage - 1}</DivPage>}
        {activePage > 1 && <DivPage>{"..."}</DivPage>}
        {activePage > 1 && <DivPage style={{ backgroundColor: 'green' }}>{activePage}</DivPage>}
        {filteredData.length / 8 > activePage && <DivPage onClick={onClickIncrease}>{activePage + 1}</DivPage>}
        {filteredData.length / 8 > activePage + 1 && <DivPage>{"..."}</DivPage>}
        {filteredData.length / 8 > activePage + 1 && <DivShift onClick={onClickIncrease}>{">>"}</DivShift>}
      </DivPagination>
      
      </section>
    </div>
  );
};

export default CatalogCarsPage;
