import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <Link to="/">
                <div className="header-left">

                    <img width={40} height={40} src="/img/logo.png" alt="img"/>
                    <div className="header-info">
                        <h3>React Dnikers</h3>
                        <p>Магазин лучших кросовок</p>
                    </div>

                </div>
            </Link>
            <ul className="header-right">
                <li onClick={props.onClickCart} style={{cursor: "pointer"}}>
                    <img width={18} height={18} src="/img/cart.svg" alt="Корзина"/>
                    <span>1205.руб</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/favorite.svg" alt="Закладки"/>
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="Пользователь"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;