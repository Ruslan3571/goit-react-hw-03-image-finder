import { Component } from 'react';

import { getImage } from '../service/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: null,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, query, images } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });

      getImage(query, page).then(res => {
        if (!res.hits.length) {
          alert(`Please, try another one`);
          return;
        }
        this.setState({
          images: [...images, ...res.hits],
          totalHits: res.totalHits,
          isLoading: false,
        });
      });
    }
  }

  handelSubmit = text => {
    this.setState({
      query: text,
      images: [],
      page: 1,
      totalHits: null,
    });
  };

  showScroll = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { handelSubmit, showScroll } = this;
    const { totalHits, isLoading, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={handelSubmit} />
        {isLoading && <Loader />}

        {images && <ImageGallery imagesList={images} />}
        {totalHits > 12 && (
          <>
            <Button onShow={showScroll} />
          </>
        )}
      </>
    );
  }
}
