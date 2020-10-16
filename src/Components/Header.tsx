// eslint-disable-next-line
import React from 'react';

interface IHeaderProps {
  text: string;
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <header className="app-header">
      <h2>{props.text}</h2>
    </header>
  );
};

export default Header;
