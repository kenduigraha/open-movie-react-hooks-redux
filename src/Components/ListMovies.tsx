// eslint-disable-next-line
import React, { PureComponent } from 'react';
import Movie, { IDataMovie } from './Movie';

interface IPropsListMovies {
  movies: Array<IDataMovie>;
  handleInfinityUpdate: Function;
}

/**
 * ListMovies Component
 */
class ListMovies extends PureComponent<IPropsListMovies> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  // add event listener scrolling when there's new Props
  // eslint-disable-next-line
  componentWillReceiveProps(nextProps: any) {
    document.addEventListener('scroll', this.trackScrolling);
  }

  /**
   * remove event listener scroll
   */
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  /**
   * check reached bottom or not
   * @param {element} el
   */
  // eslint-disable-next-line
  isBottom(el: any) {
    if (el) return el.getBoundingClientRect().bottom <= window.innerHeight;
    return false;
  }

  handleInfinityUpdate() {
    this.props.handleInfinityUpdate();
  }

  /**
   * track scroll & hit API after reached
   */
  trackScrolling = () => {
    const wrappedElement = document.getElementById('content');
    if (
      //   this.props.driverList.isLoading === false &&
      this.isBottom(wrappedElement)
    ) {
      this.handleInfinityUpdate();

      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  render() {
    const { movies } = this.props;
    return (
      <div id="content">
        {movies.map((movie: IDataMovie) => (
          <Movie
            movie={movie}
            key={`${movie.imdbID}-${movie.Title}`}
            isDetailPage={false}
          />
        ))}
      </div>
    );
  }
}

export default ListMovies;
