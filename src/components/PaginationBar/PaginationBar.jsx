// import React from 'react';
// import { DivPagination, DivShift, DivPage } from './PaginationBar.styled';

// const Pagination = ({
//   activePage,
//   onClickDecrease,
//   onClickIncrease,
//   totalItems,
//   itemsPerPage,
// }) => {
//   return (
//     <DivPagination>
//       {activePage > 10 && <DivShift onClick={onClickDecrease}>{'<<'}</DivShift>}
//       {activePage === 1 && (
//         <DivPage style={{ backgroundColor: 'var(--bg-second-green)' }}>
//           {activePage}
//         </DivPage>
//       )}
//       {/* {activePage > 2 && (
//         <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
//       )} */}
//       {activePage > 1 && (
//         <DivPage onClick={onClickDecrease}>{activePage - 1}</DivPage>
//       )}
//       {activePage > 1 && (
//         <DivPage style={{ backgroundColor: 'green' }}>{activePage}</DivPage>
//       )}
//       {totalItems / itemsPerPage > activePage && (
//         <DivPage onClick={onClickIncrease}>{activePage + 1}</DivPage>
//       )}
//       {/* {totalItems / itemsPerPage > activePage + 1 && (
//         <div style={{ width: '50px', textAlign: 'center' }}>{'...'}</div>
//       )} */}
//       {totalItems / itemsPerPage > activePage && (
//         <DivShift onClick={onClickIncrease}>{'>>'}</DivShift>
//       )}
//     </DivPagination>
//   );
// };

// export default Pagination;

import { useState } from 'react';
import { DivPagination, DivShift, DivPage } from './PaginationBar.styled';

// const Pagination = ({ totalItems, itemsPerPage }) => {
const Pagination = ({
  activePage,
  onClickDecrease,
  onClickIncrease,
  totalItems,
  itemsPerPage,
}) => {
  const blockPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Вычисляем общее количество блоков
  const [currentBlockPage, setCurrentBlockPage] = useState(() => Math.ceil(activePage / blockPage));

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Функция для изменения текущей страницы
  const handlePageChange = (page) => {
      setCurrentPage(page);
  };

  // Генерируем номера страниц для отображения в пагинации
  const getPageNumbers = () => {
      const pageNumbers = [];
      for (let i = (currentBlockPage - 1) / blockPage + 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      // for (let i = 1; i <= totalPages; i++) {
      //     pageNumbers.push(i);
      }
      return pageNumbers;
  };

  // Функция для рендеринга навигационных элементов
  const renderPageNumbers = () => {
      const pageNumbers = getPageNumbers();

      return pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active' : null}>
              <button onClick={() => handlePageChange(number)}>
                  {number}
              </button>
          </li>
      ));
  };
  
  const handleOnClick = (value) => {
    setCurrentBlockPage(currentBlockPage + value);
    value > 0 ? onClickDecrease() : onClickIncrease();
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          {activePage > blockPage && (
            <DivShift onClick={() => handleOnClick(-1)}>{'<<'}</DivShift>
          )}
        </li>
        {renderPageNumbers()}
        <li>
          {totalItems / itemsPerPage > activePage && (
            <DivShift onClick={() => handleOnClick(1)}>{'>>'}</DivShift>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
