import styled from 'styled-components';
import { transition } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
// const transition = `250ms linear`;

export const PageContainer = styled.div`
  background-color: var(--bg-second);
`;

export const PathContainer = styled.div`
  // maxWidth: '1408px';
  min-width: 100vw;
  margin: 0 auto;
  padding: 10px 16px;
  background-color: var(--bg-primary);
`;

export const PathSpan = styled.span`
  padding-right: 20px;
  font-size: 16px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 16px;
  // max-width: 1440px;
  
  min-width: 100vw;
  min-height: 87vh;

  // background-color: #f6f8fd;
  // box-shadow: 0 0 0.75rem;
`;

export const Aside = styled.aside`
  width: 300px;
  // min-width: 15vw;
  background-color: var(--bg-primary);
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
  // min-width: 84vw;
  min-width: calc(100vw - 276px);
  padding-left: 16px;
`;

export const SectionBar = styled.div`
  display: flex;
  margin: 0 0 16px 0;
  background-color: var(--bg-primary);
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SortingDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const BuildingDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const Ul = styled.ul`
  display: flex;
  // margin: 0 auto;
  // margin-bottom: 8;
  // padding-left: 16px;
  // max-width: 1440px;  
  // min-width: 84vw;
  min-width: calc(100vw - 276px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  row-gap: 8px;
  padding-bottom: 30px;
`;

export const BtnDiv = styled.div`
  display: flex;
  margin: 0 auto 16px;
  width: 180px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-button-color);
  border-radius: 5px;
  color: var(--bg-primary);
  transition: background-color ${transition};

  &:hover,
  &:active,
  &:focus {
    background-color: var(--bg-active-button-color);
  }
`;