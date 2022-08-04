import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <h1>메인 화면</h1>
      <nav>
        <ul>
          <Link to="card">카드 UI</Link>
        </ul>
        <ul>
          <Link to="form">입력 폼 UI</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
