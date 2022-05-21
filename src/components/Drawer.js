function Drawer({onClose, onRemove, items = []}) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="drawer-title">
                    Корзина <img onClick={onClose} className="close-cart" src="img/btn-remove.svg" alt="closeCart"/>
                </h2>
                {
                    items.length > 0 ?
                        (
                            <div>
                                <div className="items">
                                    {items.map((obj) => (
                                        <div key={obj.id} className="cart-item">
                                            <div className="card-item-img"
                                                 style={{backgroundImage: `url(${obj.imageURL})`}}></div>
                                            <div className="cart-item__description">
                                                <p>${obj.title}</p>
                                                <b>${obj.price}.</b>
                                            </div>
                                            <img onClick={() => onRemove(obj.id)} className="btn-remove"
                                                 src="/img/btn-remove.svg" alt="remove"/>
                                        </div>
                                    ))}
                                </div>
                                <div className="basket-total-block">
                                    <ul>
                                        <li>
                                            <span>итого</span>
                                            <div></div>
                                            <b>21 498 руб. </b>
                                        </li>
                                        <li>
                                            <span>Налог 5%: </span>
                                            <div></div>
                                            <b>1074 руб. </b>
                                        </li>
                                    </ul>
                                    <button className="green-button">Оформить заказ
                                        <img src="/img/arrow-btn.svg" alt="arrow"/>
                                    </button>
                                </div>
                            </div>
                        )
                        :
                        (<div className="cartEmpty">
                            <img className="mb-20" width="120px" src={"img/empty-cart.jpg"} alt="Empty"/>
                            <h2>Корина пуста</h2>
                            <p className="opacity-6">Добавь хоть что-то</p>
                            <button onClick={onClose} className="green-button">
                                <img src="img/arrow-btn.svg" alt="Arrow"/>
                                Вернуться назад
                            </button>
                        </div>)
                }

            </div>
        </div>
    )
}

export default Drawer;