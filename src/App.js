// eslint-disable-next-line no-unused-vars
import React from "react";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
       async function fetchData(){
           const cartResponse = await axios.get("https://61f6f6242e1d7e0017fd6fae.mockapi.io/cart");
           const favoritesResponse = await axios.get("https://61f6f6242e1d7e0017fd6fae.mockapi.io/favorites");
           const itemsResponse = await axios.get("https://61f6f6242e1d7e0017fd6fae.mockapi.io/items");
           setCartItems(cartResponse.data)
           setFavorites(favoritesResponse.data)
           setItems(itemsResponse.data)

       }
        fetchData();
    }, [])

    const onAddToCart = async (obj) => {
        console.log(obj)
        try {
            const findItem = cartItems.find((item) => Number(item.id) === Number(obj.id));

            if (findItem) {
                await axios.delete(`https://61f6f6242e1d7e0017fd6fae.mockapi.io/cart/${findItem.id}`);
                setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                setCartItems((prev) => [...prev, obj])
                const {data} = await axios.post('https://61f6f6242e1d7e0017fd6fae.mockapi.io/cart', obj);
                setCartItems((prev) =>
                    prev.map((item) => {
                    if(item.id === data.id){
                        return {
                            ...item,
                            id: data.id
                        };
                    }
                    return item
                }))
            }
        } catch (error) {

        }
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://61f6f6242e1d7e0017fd6fae.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
    }


    const onAddToFavorite = async (obj) => {
        try{
        if(favorites.find(favObj => favObj.id === obj.id)){
            axios.delete(`https://61f6f6242e1d7e0017fd6fae.mockapi.io/favorites/${obj.id}`);
        } else{
            const {data} = await axios.post("https://61f6f6242e1d7e0017fd6fae.mockapi.io/favorites", obj);
            setFavorites((prev) => [...prev, data])
        }}
        catch (error){
            alert("не удалось добавить в фовариты")
        }

    }


    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="wrapper">
            <div className="wrapper clear">
                {cartOpened && <Drawer
                    onRemove={onRemoveItem}
                    items={cartItems} onClose={() => {
                    setCartOpened(false)
                }}
                />}
            </div>

            <Header
                onClickCart={() => {setCartOpened(true)}}
                onAddToCart={onAddToCart}
            />


            <Routes>
                <Route path="/" exact element={<Home
                    items={items}
                    cartItems ={cartItems}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                />}/>
            </Routes>

            <Routes>
                <Route path="/favorites" element={<Favorites
                    items={favorites} onAddToFavorite={onAddToFavorite}
                />}/>
            </Routes>


        </div>
    );
}

export default App;
