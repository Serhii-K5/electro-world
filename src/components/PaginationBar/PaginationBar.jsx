import { 
  DivPagination,
  DivShift,
  DivPage,
 } from "./PaginationBar.styled";

const PaginationBar = (data, page) => {
  const filteredData = data;
  const activePage = page;
  
  const onClickIncrease = () => {
    // filteredData && activePage < filteredData.length / 8 && setActivePage(activePage + 1);
    filteredData && activePage < filteredData.length / 8 && (activePage += 1);
  };
  
  const onClickDecrease  = () => {
    // activePage > 0 && setActivePage(activePage - 1);
    activePage > 0 && (activePage -= 1);
  };

  return (
    <DivPagination>
      {activePage > 1 && <DivShift onClick={onClickDecrease}>{"<<"}</DivShift>}
      {activePage === 1 && <DivPage style={{ backgroundColor: 'var(--bg-second-green)' }}>{activePage}</DivPage>}
      {activePage > 2 && <div style={{ width: '50px', textAlign: "center" }}>{"..."}</div>}
      {activePage > 1 && <DivPage onClick={onClickDecrease}>{activePage - 1}</DivPage>}
      {activePage > 1 && <DivPage style={{ backgroundColor: 'green' }}>{activePage}</DivPage>}
      {filteredData.length / 8 > activePage && <DivPage onClick={onClickIncrease}>{activePage + 1}</DivPage>}
      {filteredData.length / 8 > activePage + 1 && <div style={{ width: '50px', textAlign: "center" }}>{"..."}</div>}
      {filteredData.length / 8 > activePage && <DivShift onClick={onClickIncrease}>{">>"}</DivShift>}
    </DivPagination>
  );
};

export default PaginationBar();