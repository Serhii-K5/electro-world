import { useEffect, useState } from 'react';
import {
  UlPagination,
  LiPagination,
  DivShift,
  DivPage,
} from './PaginationBar.styled';

import doubleChevron from "assets/images/svg/double-chevron.svg";

const Pagination = ({ activePage, onChangePage, totalItems, itemsPerPage }) => {
  const blockPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlockPage, setCurrentBlockPage] = useState(() => Math.ceil(activePage / blockPage));
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setCurrentPage(activePage);
  }, [activePage]);
  
  // Функция для изменения текущей страницы
  const handlePageChange = (page) => {
    setCurrentPage(page);
    onChangePage(page);
  };

  // Генерируем номера страниц для отображения в пагинации
  const getPageNumbers = () => {
      const pageNumbers = [];
      for (let i = (currentBlockPage - 1) / blockPage + 1; i <= totalPages && i <= (currentBlockPage + 1) * blockPage; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
  };

  // Функция для рендеринга навигационных элементов
  const renderPageNumbers = () => {
      const pageNumbers = getPageNumbers();

      return pageNumbers.map(number => (
        <LiPagination key={number} className={number === currentPage ? 'active' : null}>
          <DivPage onClick={(e) => handlePageChange(number)}>{number}</DivPage>
        </LiPagination>
      ));
  };
  
  const handleOnClick = (value) => {
    setCurrentBlockPage(currentBlockPage + value);
    onChangePage((currentBlockPage + value) * blockPage + 1);
  };

  return (
    <div className="pagination">
      <UlPagination>
        <li>
          {currentBlockPage > 1 && (
            <DivShift onClick={() => handleOnClick(-1)}>
              <img src={doubleChevron} alt="double chevron to the left" style={{ transform: 'rotate(180deg)' }}/>
            </DivShift>
          )}
        </li>
        {renderPageNumbers()}
        <li>
          {Math.ceil(totalItems / itemsPerPage / blockPage) > activePage && (
            <DivShift onClick={() => handleOnClick(1)}>
              <img src={doubleChevron} alt="double chevron to the right" />
            </DivShift>
          )}
        </li>
      </UlPagination>
    </div>
  );
};

export default Pagination;
