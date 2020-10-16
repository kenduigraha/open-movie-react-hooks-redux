// eslint-disable-next-line
import React, { useState } from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';

interface IDataMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface IPopOverProps {
  children: React.ReactNode;
  movie: IDataMovie;
}

const PopOverTitle: React.FC<IPopOverProps> = (props: IPopOverProps) => {
  const [hovered, setHovered] = useState(false);

  const handleHoverChange = (visible: boolean) => {
    setHovered(visible);
  };

  const { children, movie } = props;

  const hoverContent = (
    <div>
      Click <Link to={`/movie/${movie.imdbID}`}>here</Link> to detail page
    </div>
  );

  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title={movie.Title}
      trigger="hover"
      visible={hovered}
      onVisibleChange={handleHoverChange}
    >
      {children}
    </Popover>
  );
};

export default PopOverTitle;
