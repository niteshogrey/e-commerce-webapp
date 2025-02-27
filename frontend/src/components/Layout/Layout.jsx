import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";
import  { Toaster } from 'react-hot-toast';

const Layout = ({ 
  children, 
  title = "Default Title", 
  description = "Default Description", 
  keywords = "Default, Keywords", 
  author = "Default Author"
  }) => {
  return (
    <div>
      <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "71vh" }}>
        <Toaster/>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
