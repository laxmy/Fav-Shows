import React from 'react'
import classes from './ShowCard.module.css'
import PropTypes from 'prop-types'

const ShowCard = ({ action, actionName, actionDisabled = false, show }) => {

    return (
        <div className={classes.showCard}>
            { show.image !== null ?
                <img className={classes.cardImage} src={show.image.medium} alt={show.name} /> :
                <div className={classes.noImage}><h6>NA</h6></div>}
            <div className={classes.cardContent}>
                <h4>{show.name}</h4>
                {show.genres && <div>{show.genres.map((genre, index) => <span key={index} className={classes.showGenre}>{genre}</span>)}</div>}
                <p>Language: {show.language}</p>
                <button className={classes.action}
                    onClick={() => action(show)}
                    disabled={actionDisabled}> {actionName}</button>
            </div>
        </div>
    )
}

ShowCard.propTypes = {
    action: PropTypes.func,
    actionName: PropTypes.string,
    actionDisabled: PropTypes.bool,
    show: PropTypes.object
}


export default ShowCard


