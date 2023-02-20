import React from 'react';
import { connect } from 'react-redux';
import { sortAscending, sortDescending } from '../../../redux/actions/actions';
import { ShowWindowDimensions } from '../../show-window-dimensions';
import style from './sort-button.module.css';

const SortButtonContainer = (props) => {
  const windowWidth = ShowWindowDimensions().props.children[1];
  const ascending = props.books && props.books.sort((a, b) => Math.ceil(a.rating) - Math.ceil(b.rating));
  return (
    <div className={style.sortButton}>
      <button
        className={style.iconBox}
        type='button'
        onClick={
          props.sortButton === 'DESC'
            ? () => props.sortAscending(ascending)
            : () => props.sortDescending(ascending && ascending.reverse())
        }
      >
        <img
          className={props.sortButton === 'DESC' ? style.sortButton__icon_descending : style.sortButton__icon_ascending}
          src={props.icon}
          alt='sort icon'
        />
      </button>
      {windowWidth >= 630 && <p className={style.sortButton__text}>{props.text}</p>}
    </div>
  );
};
const mapStateToProps = (state) => ({
  sortButton: state.books.sortButton,
});
const mapDispatchToProps = {
  sortDescending,
  sortAscending,
};
export const SortButton = connect(mapStateToProps, mapDispatchToProps)(SortButtonContainer);