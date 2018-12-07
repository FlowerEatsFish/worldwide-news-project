/**
 * Pagiantion.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import PaginationButton from 'component/pagination/button';
import PaginationNumber from 'component/pagination/number';

import { IState } from 'model/reducer';

interface IProps {
  currentPage?: number;
  iphoneWidth?: number;
  maxPage?: number;
  mobileWidth?: number;
}

class Pagination extends React.Component<IProps, {}> {
  render() {
    const { currentPage, iphoneWidth, mobileWidth, maxPage } = this.props;

    return (
      <ul className='pagination justify-content-center' style={{ marginTop: '1rem' }}>
        <PaginationButton pageGoto={currentPage - 1} isDisabled={currentPage - 1 <= 0} text={'Prev'} />

        {/* Render it when the width is greater than the iphone mode */}
        <MediaQuery minWidth={iphoneWidth + 1}>
          <MediaQuery minWidth={mobileWidth + 1}>
            <PaginationNumber pageGoto={currentPage - 3} isDisabled={currentPage - 3 <= 0} />
          </MediaQuery>
          
          <PaginationNumber pageGoto={currentPage - 2} isDisabled={currentPage - 2 <= 0} />
        </MediaQuery>

        <PaginationNumber pageGoto={currentPage - 1} isDisabled={currentPage - 1 <= 0} />
        <PaginationNumber pageGoto={currentPage} isDisabled={false} />
        <PaginationNumber pageGoto={currentPage + 1} isDisabled={currentPage + 1 > maxPage} />

        {/* Render it when the width is greater than the iphone mode */}
        <MediaQuery minWidth={iphoneWidth + 1}>
          <PaginationNumber pageGoto={currentPage + 2} isDisabled={currentPage + 2 > maxPage} />
          <MediaQuery minWidth={mobileWidth + 1}>
            <PaginationNumber pageGoto={currentPage + 3} isDisabled={currentPage + 3 > maxPage} />
          </MediaQuery>
        </MediaQuery>

        <PaginationButton pageGoto={currentPage + 1} isDisabled={currentPage + 1 > maxPage} text={'Next'} />
      </ul>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  currentPage: state.queryToNews.page,
  iphoneWidth: state.widthOnPixel.iphone,
  mobileWidth: state.widthOnPixel.mobile,
  maxPage: Math.floor(state.maxNewsNumber / state.queryToNews.pageSize) + 1,
});

export default connect(mapStateToProps, null)(Pagination);
