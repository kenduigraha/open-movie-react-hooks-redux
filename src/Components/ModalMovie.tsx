// eslint-disable-next-line
import React, { useState, Fragment } from 'react';
import { Modal } from 'antd';

interface IDataMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IModalMovieProps {
  movie: IDataMovie;
}

const IMAGE_NOT_FOUND = 'https://cdn.browshot.com/static/images/not-found.png';

const ModalMovie: React.FC<IModalMovieProps> = (props: IModalMovieProps) => {
  const [visible, isVisible] = useState(false);

  // eslint-disable-next-line
  const showModal = (e: any) => {
    e.preventDefault();
    isVisible(true);
  };

  // eslint-disable-next-line
  const onKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      isVisible(true);
    }
  };

  // eslint-disable-next-line
  const handleOk = (e: any) => {
    isVisible(false);
  };

  const { movie } = props;

  const poster = movie.Poster === 'N/A' ? IMAGE_NOT_FOUND : movie.Poster;

  return (
    <>
      <div
        role="presentation"
        onClick={(e) => showModal(e)}
        onKeyPress={(e) => onKeyPress(e)}
      >
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <Modal
        title={`${movie.Title} - ${movie.Year}`}
        visible={visible}
        onOk={handleOk}
        onCancel={handleOk}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false }}
      >
        <img
          width="100%"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </Modal>
    </>
  );
};

export default ModalMovie;
