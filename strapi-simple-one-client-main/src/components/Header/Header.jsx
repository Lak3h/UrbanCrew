import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/Aboutpage")}>About</li>
                        <li onClick={() => navigate("/Products")}>Products</li>
                    
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        URBANCREW EQUIPMENTS
                    </div>
                    <div className="right">
                        
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>

                 {/* Hamburger Icon */}
                 <div className="hamburger-icon" onClick={toggleMenu}>
                 <div className={`bar ${isMenuOpen ? "open" : ""}`} />
                 <div className={`bar ${isMenuOpen ? "open" : ""}`} />
                 <div className={`bar ${isMenuOpen ? "open" : ""}`} />
             </div>

                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
            {/* Navigation Links */}
            {isMenuOpen && (
                <div className="mobile-nav-links">
                    <ul>
                        <li onClick={() => { navigate("/"); toggleMenu(); }}>Home</li>
                        <li onClick={() => { navigate("/Aboutpage"); toggleMenu(); }}>About</li>
                        <li onClick={() => { navigate("/Products"); toggleMenu(); }}>Products</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
