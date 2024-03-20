import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
import { FILTER_PANEL_WIDTH } from 'constantValues/constants';


export const PageContainer = styled.div`
  background-color: var(--second-white);
`;

export const PathContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 10px 16px;
  background-color: var(--primary-white);
`;

export const PathSpan = styled.span`
  padding-right: 20px;
  font-size: 16px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  width: 100vw;
  min-height: 87vh;
`;

export const Aside = styled.aside`
  width: calc(${FILTER_PANEL_WIDTH } + 70px);
  background-color: var(--primary-white);
`;

export const H4 = styled.h4`
  padding: 16px 0;
  text-align: center;
`;

export const AsideDiv = styled.div`
  padding: 0 16px;
`;

export const Section = styled.section`
  margin: 0 auto;
  width: calc(100vw - ${FILTER_PANEL_WIDTH} + 70px);
  padding-left: 16px;
`;

export const SectionBar = styled.div`
  display: flex;
  margin: 0 0 16px 0;
  background-color: var(--primary-white);
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: calc(100vw - 300px - 70px);
  min-height: 50px;
`;

export const SortingDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const BuildingDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const ImgContainer = styled.div`
  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  width: calc(100vw - ${FILTER_PANEL_WIDTH});
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  row-gap: 8px;
  padding-bottom: 30px;
`;

export const Li = styled.li`
  min-height: 170px;
  width: calc(100vw - 370px);
`;

export const BtnDiv = styled.div`
  display: flex;
  margin: 0 auto 16px;
  width: 180px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-blue);
  border-radius: 5px;
  color: var(--primary-white);
  transition: background-color ${transition};

  &:hover,
  &:active,
  &:focus {
    background-color: var(--active-blue);
  }
`;
