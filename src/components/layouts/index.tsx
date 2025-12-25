import Header from "@app/components/layouts/header/Header";
import Footer from '@app/components/layouts/footer/Footer';

const LayoutContainer = ({ children,loginStatus }: any) => {  
    return (
      <>
        <Header />
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%', backgroundColor: "#f5f5f5" }}>
          {children}
        </div>
        {loginStatus && <Footer />}
      </>
    );
  };

export default LayoutContainer;
