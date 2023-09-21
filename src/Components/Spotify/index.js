import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Components
import {
  SpotifyWrapper as StyledSpotifyWrapper,
  SpotifySection,
  SpotifyAlbumCover,
  SpotifyText,
  SpotifyLink,
} from './styles';

const AnimatedSpotifyWrapper = animated(StyledSpotifyWrapper);

const Spotify = ({ spotifyIsOpen }) => {
  const [status, setStatus] = useState(false);
  const [nowPlaying, setNowPlaying] = useState({
    song: {
      name: '',
      url: '',
    },
    album: {},
    artists: {},
  });

  const getNowPlaying = () => {
    fetch('https://brorarmand.herokuapp.com/my-recently-played')
      .then((res) => res.json())
      .then((json) => {
        setStatus(json.success);
        setNowPlaying(json.nowPlaying);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNowPlaying();
    const interval = setInterval(() => getNowPlaying(), 10000);
    return () => clearInterval(interval);
  }, []);

  const style = useSpring({
    y: spotifyIsOpen ? 0 : 100,
    opacity: spotifyIsOpen ? 1 : 0,
    from: { y: 100, opacity: 0 },
  });

  return (
    <AnimatedSpotifyWrapper
      style={{
        opacity: style.opacity,
        transform: style.y.to((y) => `translateY(${y}%)`),
      }}
    >
      {status ? (
        <>
          <SpotifyAlbumCover
            alt="Album Cover Art"
            src={nowPlaying.album.images[2].url}
          />
          <SpotifySection>
            <SpotifySection>
              <SpotifyText bold>Song</SpotifyText>
              <SpotifyLink
                href={nowPlaying.song.url}
                title={nowPlaying.song.name}
              >
                {nowPlaying.song.name}
              </SpotifyLink>
            </SpotifySection>
            <SpotifySection>
              <SpotifyText bold>Artists</SpotifyText>
              {nowPlaying.artists.map((artist, i) => (
                <SpotifyLink
                  href={artist.url}
                  target="_blank"
                  rel="noopener nofollow"
                  key={i}
                >
                  {artist.name}
                </SpotifyLink>
              ))}
            </SpotifySection>
          </SpotifySection>
        </>
      ) : (
        <SpotifyText>Not listening to music atm</SpotifyText>
      )}
    </AnimatedSpotifyWrapper>
  );
};

export default Spotify;
