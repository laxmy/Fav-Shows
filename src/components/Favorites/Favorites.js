import React,{Fragment} from 'react'
import ShowCard from '../ShowCard/ShowCard'
import PropTypes from 'prop-types';

const Favorites = ({onRemoveFavorites, currentFav}) =>{
    return (
    <Fragment>
        {
            (currentFav && currentFav.length > 0) ?
            (<div className="list-container">
                { currentFav.map(show => <ShowCard key ={show.id} show={show} action={onRemoveFavorites} actionName={`REMOVE FROM FAVORITES`}/>)}
            </div>)
            :
            (<p> You don't have any favorites yet</p>)  
        }
    </Fragment>
    )
}

Favorites.propTypes={
    onRemoveFavorites: PropTypes.func,
    currentFav: PropTypes.array
}


export default Favorites