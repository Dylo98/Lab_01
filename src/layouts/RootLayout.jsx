import NavBarMenu from '../components/NavBarMenu';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

function RootLayout({ children }) {
  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Laboratorium 1', link: '/lab1' },
    { id: 3, label: 'Laboratorium 2', link: '/lab2' },
  ];

  return (
    <>
      <NavBarMenu items={menuItems} />

      <Container className="mt-4">{children}</Container>
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
