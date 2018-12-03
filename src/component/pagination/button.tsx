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
  text: string;
  onSetPageAndFetchNews: Function;
}

class PaginationButton extends React.Component<IProps, {}> {
  render() {
    const { isDisabled, pageGoto, text, onSetPageAndFetchNews } = this.props;

    return (
      <button
        onClick={() => onSetPageAndFetchNews(pageGoto)}
        disabled={isDisabled}
      >
        {text}
      </button>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IReducerQueryToNewsAction>) => ({
  onSetPageAndFetchNews: (page: number) => dispatch({ type: SET_CURRENT_PAGE, value: page }),
});

export default connect(null, mapDispatchToProps)(PaginationButton);
