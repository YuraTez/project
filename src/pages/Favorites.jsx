import React from "react";
import Card from "../components/card";
import AppContext from "../context";

function Favorites({ onAddToFavorite, onAddToCart } ){
    const {favorites} = React.useContext(AppContext);

    return (
        <div className="content">
            <div className="content__header">
                <h1>Мои закладки</h1>
            </div>
            <div className="sneakers sneakers--favorites">
                {favorites.map((item, index) =>
                        <Card
                            key = {index}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            favorited = {true}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Favorites