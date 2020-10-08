import React, {useEffect, useState, Fragment} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ShowCard from '../ShowCard/ShowCard'
import PropTypes from 'prop-types'

const Search=({onAddFavorites,currentFav})=>{

    const [result, setResult]=useState([])
    const [searchInput, setSearchInput]= useState('')
    const [url, setUrl]=useState('')

    const onSearchForShow=(e)=> {
        e.preventDefault()
        setUrl(`http://api.tvmaze.com/search/shows?q=${searchInput}`)
    }

    useEffect(()=>{
        fetch(url).then(response => response.json()).then(data =>setResult(data.map(item => item.show)))
    },[url])

    const currentFavorites = currentFav.map(item => item.id)
    return (
        <Fragment>
            <SearchBar 
            value={searchInput} 
            onChangeHandler={(e) => setSearchInput(e.target.value)} 
            onClickHandler={onSearchForShow} 
            submitEnabled={true}/>
            {
            result && result.length > 0 && 
                <div className="list-container">
                    { 
                        result.map(show => 
                        <ShowCard key ={show.id} 
                        show={show} 
                        action={onAddFavorites} 
                        actionName={`ADD TO FAVORITES`} 
                        actionDisabled={currentFavorites.includes(show.id)}/>) 
                    }
                </div>
            }
        </Fragment>
    )
}

Search.propTypes={
    onAddFavorites: PropTypes.func,
    currentFav: PropTypes.array
}



export default Search