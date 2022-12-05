
import styled from 'styled-components';
import ImgBg from './image/Background1.jpg';

export const HeroContainer = styled.div`
  background:url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 4rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  font-family: 'Abril Fatface', cursive;
  margin-bottom: 1rem;
  box-shadow: 3px 5px #2D033B;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(1.8rem, 2vw, 2rem);
  font-family: 'Cormorant Garamond', serif;
  word-spacing: 0.5em;
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: ffc500;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
