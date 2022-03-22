const Layout: React.FC = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <main className="container p-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
