const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <main className="container">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
