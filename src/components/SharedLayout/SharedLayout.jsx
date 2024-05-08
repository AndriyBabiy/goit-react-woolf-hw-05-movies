// import { SearchBar } from 'components/SearchBar/SearchBar';
import { Suspense } from 'react';
import {
  LinkWrapper,
  NavBar,
  NavLinkStyled,
  PageBody,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <PageBody>
      <NavBar>
        <LinkWrapper>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </LinkWrapper>
      </NavBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </PageBody>
  );
};
