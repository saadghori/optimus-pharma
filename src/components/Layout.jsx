// components/Layout.js
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
