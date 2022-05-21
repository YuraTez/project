
import React from "react"
import styles from "./card.module.scss";

function Card({title, imageURL, price, id, onFavorite, onPlus, favorited = false, added = false}){
    const [isAdded, SetIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = {title, parentId:id, imageURL, price, id}


    const onClickPlus = ()=>{
        onPlus(obj);
        SetIsAdded(!isAdded)
    }

    const onClickFavorite = ()=>{
        onFavorite(obj)
        setIsFavorite(!isFavorite)
    }

    return(
        <div className={styles.card}>
        <div className="favorite">
            <img onClick={onClickFavorite} src={isFavorite ? "img/heart-liked.svg" : "img/heart-unliked.jpg"} alt="unliked"/>
        </div>
        <img width={133} height={112} src={imageURL} alt="sneakers"/>
        <h5>{title}</h5>
        <div className="card-bottom">
            <div className="card-bottom__price">
                <span>Ценa</span>
                <b>{price}</b>
            </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"  } alt="plus"/>
        </div>
    </div>
    )
}

export default Card;