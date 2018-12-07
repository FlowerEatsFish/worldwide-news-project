/**
 * Rendering news on list style.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import { IArticle } from 'type/newsapi';

import { IState } from 'model/reducer';

interface IProps {
  news: IArticle;
  iphoneWidth?: number;
}

class NewsOnList extends React.Component<IProps, {}> {
  public render() {
    const { title, url, urlToImage, publishedAt } = this.props.news;
    const { iphoneWidth } = this.props;

    return (
      <li className='list-group-item'>
        {/* Render it when the width is greater than the iphone mode */}
        <MediaQuery minWidth={iphoneWidth + 1}>
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
            <div style={{ margin: 'auto' }}>
              <img src={urlToImage} alt={title} style={{ width: '100%' }} />
            </div>
            <div style={{ paddingLeft: '8px' }}>
              { url ?
                <a href={url} title={title} target='_blank' rel='noopener noreferrer'>
                  {title}
                </a> :
                <p>{title}</p>
              }
              <p style={{ margin: 0 }}>{publishedAt.substring(0, 10)}</p>
            </div>
          </div>
        </MediaQuery>

        {/* Render it when the width is less than the iphone mode */}
        <MediaQuery maxWidth={iphoneWidth}>
          <div>
            {url ?
              <a href={url} title={title} target='_blank' rel='noopener noreferrer'>
                {title}
              </a> :
              <p>{title}</p>
            }
            <p style={{ margin: 0 }}>{publishedAt.substring(0, 10)}</p>
          </div>
        </MediaQuery>
      </li>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  iphoneWidth: state.widthOnPixel.iphone,
});

export default connect(mapStateToProps, null)(NewsOnList);
