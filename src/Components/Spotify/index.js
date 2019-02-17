import React, { Component, Fragment } from 'react';
import { Motion, spring } from 'react-motion';

// Components
import { SpotifyWrapper, SpotifySection, SpotifyAlbumCover, SpotifyText, SpotifyLink } from './styles';

class Spotify extends Component {
  state = {
    status: false,
    nowPlaying: {
      song: {
        name: '',
        url: ''
      },
      album: {},
      artists: {}
    }
  }

  getNowPlaying() {
    fetch('https://brorarmand.herokuapp.com/my-recently-played')
      .then(res => {
        return res.json();
      })
      .then(json => this.setState({
        status: json.success,
        nowPlaying: json.nowPlaying
      }))
      .catch(err => console.log(err));
    console.log('This run')
  }

  componentDidMount() {
    this.getNowPlaying();
    setInterval(() => this.getNowPlaying(), 1000);
  }

  render() {

    const { status, nowPlaying: { song: { name, url }, artists, album } } = this.state;
    const { spotifyIsOpen } = this.props;

    return (
      <Fragment>
        <Motion
          defaultStyle={{ y: 100, opacity: 0 }}
          style={(spotifyIsOpen ? { y: spring(0), opacity: spring(1) } : { y: spring(100), opacity: spring(0) })}>

          {style => (
            <SpotifyWrapper style={
              {
                opacity: style.opacity,
                transform: `translateY(${style.y}%)`
              }}>
              {status
                ?
                (<>
                  <SpotifyAlbumCover alt="Album Cover Art" src={album.images[2].url} />
                  <SpotifySection>
                    <SpotifySection>
                      <SpotifyText bold>Song</SpotifyText>
                      <SpotifyLink href={url} title={name}>
                        {name}
                      </SpotifyLink>
                    </SpotifySection>
                    <SpotifySection>
                      <SpotifyText bold>Artists</SpotifyText>
                      {artists.map((artist, i) => <SpotifyLink href={artist.url} target="_blank" rel="noopener nofollow" key={i}>{artist.name}</SpotifyLink>)}
                    </SpotifySection>
                  </SpotifySection>
                </>)
                : <SpotifyText>Not listening to music atm</SpotifyText>
              }
            </SpotifyWrapper>
          )}
        </Motion>
      </Fragment>
    );
  }
}

export default Spotify;