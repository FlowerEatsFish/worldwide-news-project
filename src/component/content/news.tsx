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
      <li className='list-group-item'>
        { url ?
          <a href={url} title={title} target='_blank' rel='noopener noreferrer'>
            <h4>{title}</h4>
          </a> :
          <h4>{title}</h4>
        }
        <p>{author}</p>
        <p>{publishedAt}</p>
        <p>{description}</p>
      </li>
    );
  }
}

export default News;
