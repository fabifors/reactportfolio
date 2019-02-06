import React, { Component, Fragment } from 'react';
import { Motion, spring } from 'react-motion';

// Spotify API lib
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyWrapper, SpotifySection, SpotifyAlbumCover, SpotifyText, SpotifyLink } from './styles';
const spotifyApi = new SpotifyWebApi();

class Spotify extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '', artists: [], uri: '' }
    }
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        const {
          name,
          album: { images },
          artists,
          external_urls: { spotify }
        } = response.item;

        const artistsLocal = [...artists];
        const artistsArray = [];

        artistsLocal.map(artist => {
          const { name, external_urls: { spotify } } = artist;
          const artistObject = {
            name,
            url: spotify
          }
          return artistsArray.push(artistObject);
        })

        this.setState({
          nowPlaying: {
            name: name,
            albumArt: images[0].url,
            artists: artistsArray,
            url: spotify
          }
        });
        console.log(response);
      }).catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getNowPlaying();
    setInterval(() => this.getNowPlaying(), 30000);
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  render() {

    const { loggedIn, nowPlaying: { name, artists, albumArt, url } } = this.state;
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
              {loggedIn
                ? null
                : <SpotifyLink href='https://infinite-taiga-49598.herokuapp.com/' > Login to Spotify </SpotifyLink>
              }
              <SpotifyAlbumCover alt="Album Cover Art" src={albumArt} />
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

            </SpotifyWrapper>
          )}
        </Motion>
      </Fragment>
    );
  }
}

export default Spotify;