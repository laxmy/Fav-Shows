 
import React from 'react'
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
    return (
        <form onSubmit={props.onClickHandler} className={classes.formWrapper}>
            <div className={classes.SearchBarWrapper}>
                <div className={classes.InputFieldWrapper}>
                    <input
                        type="text"
                        id="searchInput"
                        name="searchInput"
                        placeholder="Look for a tv show"
                        value={props.value}
                        onChange={props.onChangeHandler}
                        style={(props.error) ? { 'borderBottomColor': 'red' } : null}
                        required />
                    {props.error && <label className={classes.InputError}>Please enter valid city</label>}
                </div>
                <div className={classes.ButtonWrapper}>
                    <button
                        name="searchSubmit"
                        type="submit"
                        disabled={!props.submitEnabled}>Search
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SearchBar


