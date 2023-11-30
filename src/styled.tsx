import styled from 'styled-components';

export const CardImageContainer = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardImage = styled.img`
  aspect-ratio: 63 / 88;
  height: 20rem;
`;

export const CardPlaceholder = styled.div`
  aspect-ratio: 63 / 88;
  border: 0.1rem solid black;
  height: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Heading2 = styled.h2`
  font-size: 1.5rem;
  height: 1.5rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #3bcffc;
  border: unset;
  border-radius: 0.5rem;
  color: white;
`;
