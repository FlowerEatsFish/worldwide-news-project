/**
 * Pagiantion.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SET_CURRENT_PAGE } from '../../action';
import { IReducerQueryToNewsAction } from '../../model/reducer';

interface IProps {
  isDisabled: boolean;
  pageGoto: number;
  onSetPageAndFetchNews: Function;
}

class PaginationNumber extends React.Component<IProps, {}> {
  render() {
    const { isDisabled, pageGoto, onSetPageAndFetchNews } = this.props;

    if (!isDisabled) {
      return (
        <span
          style={{ margin: '8px', cursor: 'pointer' }}
          onClick={() => onSetPageAndFetchNews(pageGoto)}
        >
          {pageGoto}
        </span>
      )
    }
    
    return null;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IReducerQueryToNewsAction>) => ({
  onSetPageAndFetchNews: (page: number) => dispatch({ type: SET_CURRENT_PAGE, value: page }),
});

export default connect(null, mapDispatchToProps)(PaginationNumber);
