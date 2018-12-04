/**
 * The component will fetch news after it is mounted, and then render the ones.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IArticle } from 'type/newsapi';

import News from './content/news';

import { FETCH_NEWS_REQUEST } from '../action';
import { IState, IReducerNewsAction } from '../model/reducer';

interface IProps {
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
    const { newsList } = this.props;
    return (
      <ul className='list-group'>
        { newsList.length !== 0 ?
          newsList.map(value => <News news={value} key={value.title} />) :
          <p>Loading...</p>
        }
      </ul>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  newsList: state.newsList,
});

const mapDispatchToProps = (dispatch: Dispatch<IReducerNewsAction>) => ({
  onFetchNewsOnInitial: () => dispatch({ type: FETCH_NEWS_REQUEST, value: [] }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
