import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div style={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const styles = {
    layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh"
    }
}
export default Layout;