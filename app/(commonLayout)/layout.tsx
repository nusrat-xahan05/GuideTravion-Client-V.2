import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import StickyNavbarWrapper from "@/components/shared/StickyNavbarWrapper";
export const dynamic = "force-dynamic";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="font-body">
            <StickyNavbarWrapper>
                <Navbar></Navbar>
            </StickyNavbarWrapper>

            {children}

            <Footer />
        </div>
    );
};

export default CommonLayout;