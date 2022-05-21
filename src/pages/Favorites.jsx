import Card from "../components/card";
import React from "react";

function Favorites({items, onAddToFavorite, onAddToCart } ){
    return (
        <div className="content">
            <div className="content__header">
                <h1>Мои закладки</h1>
            </div>
            <div className="sneakers sneakers--favorites">
                {items.map((item, index) =>
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