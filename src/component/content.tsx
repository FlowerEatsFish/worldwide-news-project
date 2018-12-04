/**
 * The component will fetch news after it is mounted, and then render the ones.
 */

import * as React from 'react';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IArticle } from 'type/newsapi';

import NewsOnList from './content/news-on-list';
import NewsOnCard from './content/news-on-card';

import { FETCH_NEWS_REQUEST } from '../action';
import { IState, IReducerNewsAction } from '../model/reducer';

interface IProps {
  mobileWidth: number;
  newsList: IArticle[];
  onFetchNewsOnInitial: Function;
}

class Content extends React.Component<IProps, {}> {
  componentWillMount() {
    // It is ready to fetch and render news during initial loading.
    const { onFetchNewsOnInitial } = this.props;
    onFetchNewsOnInitial();
  }

  render() {
    const { newsList, mobileWidth } = this.props;
    return (
      <React.Fragment>
        {/* Render it when the width is greater than the mobile mode */}
        <MediaQuery minWidth={mobileWidth + 1}>
          <div>
            { newsList.length !== 0 ?
              newsList.map(value => (
                <NewsOnCard news={value} key={value.title} />
              )) :
              <p>Loading...</p>
            }
          </div>
        </MediaQuery>

        {/* Render it when the width is less than the mobile mode */}
        <MediaQuery maxWidth={mobileWidth}>
          <ul className='list-group'>
            { newsList.length !== 0 ?
              newsList.map(value => (
                <NewsOnList news={value} key={value.title} />
              )) :
              <p>Loading...</p>
            }
          </ul>
        </MediaQuery>
      </React.Fragment>
      
    );
  }
}

const mapStateToProps = (state: IState) => ({
  newsList: state.newsList,
  mobileWidth: state.widthOnPixel.mobile,
});

const mapDispatchToProps = (dispatch: Dispatch<IReducerNewsAction>) => ({
  onFetchNewsOnInitial: () => dispatch({ type: FETCH_NEWS_REQUEST, value: [] }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
