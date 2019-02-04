import React, { Component } from 'react';

// Spotify API lib
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyWrapper } from './styles';
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
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        console.log(response);
        this.setState({
          nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[0].url
          }
        });
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
    return (
      <SpotifyWrapper>
        {this.state.loggedIn ? null : <a href='https://infinite-taiga-49598.herokuapp.com/' > Login to Spotify </a>}
        <div>
          Now Playing: {this.state.nowPlaying.name}
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: '100%' }} />
        </div>
      </SpotifyWrapper>
    );
  }
}

export default Spotify;