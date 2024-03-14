import React from 'react';
import { DivPagination, DivShift, DivPage } from './PaginationBar.styled';

const Pagination = ({
  activePage,
  onClickDecrease,
  onClickIncrease,
  totalItems,
  itemsPerPage,
}) => {
  return (
    <DivPagination>
      {activePage > 10 && <DivShift onClick={onClickDecrease}>{'<<'}</DivShift>}
      {activePage === 1 && (
        <DivPage style={{ backgroundColor: 'var(--bg-second-green)' }}>
          {activePage}
        </DivPage>
      )}
      {/* {activePage > 2 && (
        <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
      )} */}
      {activePage > 1 && (
        <DivPage onClick={onClickDecrease}>{activePage - 1}</DivPage>
      )}
      {activePage > 1 && (
        <DivPage style={{ backgroundColor: 'green' }}>{activePage}</DivPage>
      )}
      {totalItems / itemsPerPage > activePage && (
        <DivPage onClick={onClickIncrease}>{activePage + 1}</DivPage>
      )}
      {/* {totalItems / itemsPerPage > activePage + 1 && (
        <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
      )} */}
      {totalItems / itemsPerPage > activePage && (
        <DivShift onClick={onClickIncrease}>{'>>'}</DivShift>
      )}
    </DivPagination>
  );
};

export default Pagination;

// import { useState } from 'react';

// const Pagination = ({ totalItems, itemsPerPage }) => {
//     const [currentPage, setCurrentPage] = useState(1);

//     // Вычисляем общее количество блоков
//     const [currentBlockPage, setCurrentBlockPage] = useState(() => Math.ceil(activePage / 10));

//     // Вычисляем общее количество страниц
//     const totalPages = Math.ceil(totalItems / itemsPerPage);

//     // Функция для изменения текущей страницы
//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     // Генерируем номера страниц для отображения в пагинации
//     const getPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(i);
//         }
//         return pageNumbers;
//     };

//     // Функция для рендеринга навигационных элементов
//     const renderPageNumbers = () => {
//         const pageNumbers = getPageNumbers();

//         return pageNumbers.map(number => (
//             <li key={number} className={number === currentPage ? 'active' : null}>
//                 <button onClick={() => handlePageChange(number)}>
//                     {number}
//                 </button>
//             </li>
//         ));
//     };

//     return (
//         <div className="pagination">
//             <ul>
//                 {renderPageNumbers()}
//             </ul>
//         </div>
//     );
// };

// export default Pagination;
