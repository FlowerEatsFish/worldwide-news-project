/**
 * Pagiantion.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SET_CURRENT_PAGE } from '../../action';
import { IReducerQueryToNewsAction, IState } from '../../model/reducer';

interface IProps {
  currentPage?: number;
  isDisabled: boolean;
  pageGoto: number;
  onSetPageAndFetchNews: Function;
}

class PaginationNumber extends React.Component<IProps, {}> {
  render() {
    const { currentPage, isDisabled, pageGoto, onSetPageAndFetchNews } = this.props;

    if (!isDisabled) {
      return (
        <li className={`page-item ${isDisabled ? 'disabled' : null} ${pageGoto === currentPage ? 'active' : null}`}>
          <a
            className='page-link'
            href='#'
            onClick={() => onSetPageAndFetchNews(pageGoto)}
          >
            {pageGoto}
          </a>
        </li>
      )
    }
    
    return null;
  }
}

const mapStateToProps = (state: IState) => ({
  currentPage: state.queryToNews.page,
});

const mapDispatchToProps = (dispatch: Dispatch<IReducerQueryToNewsAction>) => ({
  onSetPageAndFetchNews: (page: number) => dispatch({ type: SET_CURRENT_PAGE, value: page }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationNumber);
