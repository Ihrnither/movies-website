import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ marginTop: 80 }}>{props.children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
