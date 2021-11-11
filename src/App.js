<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
=======
import React, { useState } from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import GlobalStyle from './components/common/GlobalStyle';
>>>>>>> b81ddaac2d394df0f63887f6f0738050f056140c

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

function App() {
  const [isLoggedIn, useIsLoggedIn] = useState(false);

  return (
    <Router>
      <>
<<<<<<< HEAD
        {isLoggedIn && null} {/* 헤더 들어갈 자리 */}
=======
        <GlobalStyle />
        {isLoggedIn && null} { /* 헤더 들어갈 자리 */ }
>>>>>>> b81ddaac2d394df0f63887f6f0738050f056140c
        <Wrapper>
          <Routes isLoggedIn={isLoggedIn} />
          {/* Footer 들어갈 자리 */}
        </Wrapper>
      </>
    </Router>
  );
}

export default App;
