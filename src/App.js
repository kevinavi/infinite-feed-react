import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Card } from './components/Cards';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getListOfPhotos } from './services/unsplashService';

// Global style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

// Styled Title
const Title = styled.h3`
    text-align: center;
    padding: 10px 0px 0px 0px;
`;

// Wrraper for a card
const WrapperCard = styled.section`
  max-width: 70rem;
  margin: 4em auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
`;

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, [])

  // Fetch fetchPhotos 
  const fetchPhotos = async () => {
    const result = await getListOfPhotos();
    setPhotos([...photos, ...result]);
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Title>
        React InfiniteScroll Page
      </Title>
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchPhotos}
        hasMore={true}
        loader={<Loader />}
        >
        <WrapperCard>
          {photos.map(photo => (
            <Card url={photo.urls.small} key={photo.id} description={photo.alt_description}/>
          ))}
        </WrapperCard>
      </InfiniteScroll>
    </div>
  );
}

export default App;
