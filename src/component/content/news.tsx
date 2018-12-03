/**
 * Rendering news.
 */

import * as React from 'react';

import { IArticle } from '../../model/news-api';

interface IProps {
  news: IArticle;
}

class News extends React.Component<IProps, {}> {
  public render() {
    const { title, author, description, url, publishedAt } = this.props.news;

    return (
      <div className='news'>
        { url ?
          <a href={url} title={title} target='_blank' rel='noopener noreferrer'>
            <h4>{title}</h4>
          </a> :
          <h4>{title}</h4>
        }
        <p>
          <span>{author}</span>
          <span>{publishedAt}</span>
        </p>
        <p>{description}</p>
      </div>
    );
  }
}

export default News;
