/**
 * Pagiantion.
 */

import * as React from 'react';
import { connect } from 'react-redux';

import PaginationButton from './pagination/button';
import PaginationNumber from './pagination/number';

import { IState } from '../model/reducer';

interface IProps {
  currentPage?: number;
  maxPage?: number;
}

class Pagination extends React.Component<IProps, {}> {
  render() {
    const { currentPage, maxPage } = this.props;

    return (
      <div className='pagination'>
        <PaginationButton pageGoto={currentPage - 1} isDisabled={currentPage - 1 <= 0} text={'Prev'} />
        <PaginationNumber pageGoto={currentPage - 3} isDisabled={currentPage - 3 <= 0} />
        <PaginationNumber pageGoto={currentPage - 2} isDisabled={currentPage - 2 <= 0} />
        <PaginationNumber pageGoto={currentPage - 1} isDisabled={currentPage - 1 <= 0} />
        <PaginationNumber pageGoto={currentPage} isDisabled={false} />
        <PaginationNumber pageGoto={currentPage + 1} isDisabled={currentPage + 1 > maxPage} />
        <PaginationNumber pageGoto={currentPage + 2} isDisabled={currentPage + 2 > maxPage} />
        <PaginationNumber pageGoto={currentPage + 3} isDisabled={currentPage + 3 > maxPage} />
        <PaginationButton pageGoto={currentPage + 1} isDisabled={currentPage + 1 > maxPage} text={'Next'} />
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  currentPage: state.queryToNews.page,
  maxPage: Math.floor(state.maxNewsNumber / state.queryToNews.pageSize) + 1,
});

export default connect(mapStateToProps, null)(Pagination);
