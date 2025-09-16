import { ReactNode } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;