import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ marginTop: 80 }}>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
