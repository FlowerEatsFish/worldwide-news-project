/**
 * Rendering news on card style.
 */

import * as React from 'react';

import { IArticle } from 'type/newsapi';

interface IProps {
  news: IArticle;
}

class NewsOnCard extends React.Component<IProps, {}> {
  public render() {
    const { title, description, url, publishedAt, urlToImage } = this.props.news;

    return (
      <div className="card" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <img className="card-img-top" src={urlToImage} alt={title} />
        <div className="card-body">
          <p className="card-text">
            {url ?
              <a href={url} title={title} target='_blank' rel='noopener noreferrer' style={{ fontSize: '1.5rem' }}>
                {title}
              </a> :
              <p style={{ fontSize: '1.5rem' }}>{title}</p>
            }
          </p>
          <p className="card-text">{description}</p>
          <p className="card-text">{publishedAt.substring(0, 10)}</p>
        </div>
      </div>
    );
  }
}

export default NewsOnCard;
