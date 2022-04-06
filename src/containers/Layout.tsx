import Footer from "../components/footer";
import Header from "../components/header";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
