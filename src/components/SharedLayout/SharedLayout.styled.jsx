import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PageBody = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(5)};

  margin: 0 auto;
  margin-top: 90px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const NavBar = styled.div`
  padding: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.white};

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-bottom-left-radius: ${({ theme }) => theme.spacing(2.5)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing(2.5)};

  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  text-transform: uppercase;

  transition-property: color, background-color;
  transition-duration: 0.2s;

  transform: scale(0.9);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.dark};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};

    padding: 6px 12px;
    border-radius: 4px;

    /* transform: scale(1); */
    pointer-events: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  margin-left: ${({ theme }) => theme.spacing(5)};
`;
