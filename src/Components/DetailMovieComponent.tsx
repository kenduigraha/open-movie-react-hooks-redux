// eslint-disable-next-line
import React from 'react';
import { Typography, Row, Col, Card, Rate, Divider } from 'antd';

import { IDataDetailMovie } from '../store/reducer/omdbDetailReducer';
import Movie from './Movie';

const { Text, Title } = Typography;

interface IDetailMovieProps {
  movie_detail: IDataDetailMovie;
}

const DetailMovieComponent: React.FC<IDetailMovieProps> = (
  props: IDetailMovieProps,
) => {
  const { movie_detail: movieDetail } = props;

  const Credit = () => (
    <>
      <div>
        <Text strong>Rated: </Text>
        {movieDetail.Rated} | <Text strong>Released: </Text>
        {movieDetail.Released}
      </div>
      <div>
        <Text strong>Genre: </Text>
        {movieDetail.Genre}
      </div>
      <div>
        <Text strong>Director: </Text>
        {movieDetail.Director}
      </div>
      <div>
        <Text strong>Awards: </Text>
        {movieDetail.Awards}
      </div>
      <div>
        <Text strong>Country: </Text>
        {movieDetail.Country}
      </div>
    </>
  );

  return (
    <div>
      <Row>
        <Col span={24}>
          <Divider dashed />
          <Title>{movieDetail.Title}</Title>
        </Col>
      </Row>
      <Row gutter={[8, 8]} justify="start" align="middle">
        <Col span={8}>
          <Movie movie={movieDetail} isDetailPage={true} />
        </Col>
        <Col span={16}>
          <Row>
            <Col span={24}>
              <Title mark>Rating</Title>
              <Title type="success">{movieDetail.imdbRating}</Title>
              <Rate
                allowHalf
                defaultValue={Number(movieDetail.imdbRating) / 2}
              />
            </Col>
          </Row>
          <Row justify="center">
            {movieDetail.Ratings.map((rating) => (
              <Col span={6} key={`-${rating.Value}`}>
                <Card style={{ width: 'auto' }}>
                  <p>Source: {rating.Source}</p>
                  <p>Value: {rating.Value}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Divider dashed />
      <Row>
        <Col span={24}>{Credit()}</Col>
      </Row>
    </div>
  );
};

export default DetailMovieComponent;
