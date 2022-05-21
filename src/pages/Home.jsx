import Card from "../components/card";
import React from "react";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart,cartItems} ){
    return (
        <div className="content">
            <div className="content__header">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`  : "Все кросовки"}</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search"/>
                    {searchValue && <img
                        onClick={()=> setSearchValue("")}
                        className="clear close-cart"
                        src="img/btn-remove.svg"
                        alt="clear"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="sneakers">
                {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) =>
                        <Card
                            key = {index}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj) }
                            cartItems
                            added = {cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Home