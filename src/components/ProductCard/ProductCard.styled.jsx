import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 274px;
  flex-direction: column;
  gap: 28px;
`;

export const Img = styled.img`
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  color: var(--text-color-primary-black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Span = styled.span`
  color: var(--text-color-blue);
  margin-left: 4px;
`;

export const Year = styled.span`
  margin-left: 4px;
`;

export const RentalPrice = styled.p`
  color: var(--text-color-primary-black);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;

export const Ul = styled.ul`
  display: flex;
  margin-bottom: 4px;
  width: 274px;
  align-items: center;
  gap: 6px;
`;

export const Li = styled.li`
  height: 18px;
  padding-right: 6px;
  color: var(--text-color-secondary-black);
  font-size: 12px;
  line-height: 1.5;
  border-right: 1px solid var(--text-color-secondary-black);

  &:last-child {
    border-right: none;
    padding: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: var(--text-color-blue);
  color: #FFF;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  border-radius: 12px;
  transition: background-color 250ms linear;

  &:hover {
    background-color: var(--bg-active-button-color);
  }
`;

export const OrderBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  margin: 0;
  padding: 0;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.2);
  }
`;
