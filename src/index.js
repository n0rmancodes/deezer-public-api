var rp = require('request-promise');
const apiUrl = 'https://api.deezer.com/'

function DeezerOpenApi() {
  this.apiUrl = apiUrl;
}
/*
 *  ALBUM
 */
DeezerOpenApi.prototype.album = function(id, limit, index) {
  var url = 'album/' + id;
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.album.comments = function(id, limit, index) {
  var url = 'album/' + id + '/comments';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.album.fans = function(id, limit, index) {
  var url = 'album/' + id + '/fans';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.album.tracks = function(id, limit, index) {
  var url = 'album/' + id + '/tracks';
  return rq(url, index, limit);
};
/*
 *  ARTIST
 */
DeezerOpenApi.prototype.artist = function(id, limit, index) {
  var url = 'artist/' + id;
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.artist.top = function(id, limit, index) {
  var url = 'artist/' + id + '/top';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.artist.albums = function(id, limit, index) {
  var url = 'artist/' + id + '/albums';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.artist.comments = function(id, limit, index) {
  var url = 'artist/' + id + '/comments';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.artist.fans = function(id, limit, index) {
  var url = 'artist/' + id + '/fans';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.artist.related = function(id, limit, index) {
  var url = 'artist/' + id + '/related';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.artist.radio = function(id, limit, index) {
  var url = 'artist/' + id + '/radio';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.artist.playlists = function(id, limit, index) {
  var url = 'artist/' + id + '/playlists';
  return rq(url, index, limit);
};
/*
 *  CHART
 */
DeezerOpenApi.prototype.chart = function(limit, index) {
  var url = 'chart/';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.tracks = function(limit, index) {
  var url = 'chart/0/tracks';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.albums = function(limit, index) {
  var url = 'chart/0/albums';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.artists = function(limit, index) {
  var url = 'chart/0/artists';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.playlists = function(limit, index) {
  var url = 'chart/0/playlists';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.podcasts = function(limit, index) {
  var url = 'chart/0/podcasts';
  return rq(url, index, limit);
};

/*
 *  COMMENT
 */
DeezerOpenApi.prototype.comment = function(id, limit, index) {
  var url = 'comment/'+id;
  return rq(url, index, limit);
};
/*
 *  EDITORIAL
 */
DeezerOpenApi.prototype.editorial = function(id, limit, index) {
  var url = 'editorial/'+((id)?id:'');
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.editorial.selection = function(id, date, limit, index) {
  var url = 'editorial/' + id + '/selection';
  if (date) url = url + '&date=' + date;
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.editorial.charts = function(id, limit, index) {
  var url = 'editorial/' + id + '/charts';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.editorial.releases = function(id, limit, index) {
  var url = 'editorial/' + id + '/releases';
  return rq(url, index, limit);
};
/*
 *  EPISODE
 */
DeezerOpenApi.prototype.episode = function(id, limit, index) {
  var url = 'episode/'+id;
  return rq(url, index, limit);
};
/*
 *  GENRE
 */
DeezerOpenApi.prototype.genre = function(id, limit, index) {
  var url = 'genre/'+((id)?id:'');
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.genre.artists = function(id, limit, index) {
  var url = 'genre/' + id + '/artists';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.genre.podcasts = function(id, limit, index) {
  var url = 'genre/' + id + '/podcasts';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.genre.radios = function(id, limit, index) {
  var url = 'genre/' + id + '/radios';
  return rq(url, index, limit);
};
/*
 *  INFOS
 */
DeezerOpenApi.prototype.infos = function() {
  var url = 'infos';
  return rq(url);
};
/*
 *  OPTIONS
 */
DeezerOpenApi.prototype.options = function() {
  var url = 'options';
  return rq(url);
};
/*
 *  PLAYLIST
 */
DeezerOpenApi.prototype.playlist = function(id, limit, index) {
  var url = 'playlist/' + id;
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.playlist.comments = function(id, limit, index) {
  var url = 'playlist/' + id + '/comments';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.playlist.fans = function(id, limit, index) {
  var url = 'playlist/' + id + '/fans';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.playlist.tracks = function(id, limit, index) {
  var url = 'playlist/' + id + '/tracks';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.playlist.radio = function(id, limit, index) {
  var url = 'playlist/' + id + '/radio';
  return rq(url, index, limit);
};
/*
 *  PODCAST
 */
DeezerOpenApi.prototype.podcast = function(id, limit, index) {
  var url = 'podcast/' + ((id)?id:'');
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.podcast.episodes = function(id, limit, index) {
  var url = 'podcast/' + id + '/episodes';
  return rq(url, index, limit);
};
/*
 *  RADIO
 */
DeezerOpenApi.prototype.radio = function(id, limit, index) {
  var url = 'radio/' + ((id)?id:'');
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.radio.genres = function(id, limit, index) {
  var url = 'radio/genres';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.radio.top = function(id, limit, index) {
  var url = 'radio/top';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.radio.lists = function(id, limit, index) {
  var url = 'radio/lists';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.radio.tracks = function(id, limit, index) {
  var url = 'radio/' + id + '/tracks';
  return rq(url, index, limit);
};
/*
 *  SEARCH
 */
DeezerOpenApi.prototype.search = function(options, order, limit, index) {
  var url = 'search?q=';
  var query = '';
  if (typeof options === 'object') {
    for (var key in options) {
      query = query + key + ':"' + options[key] + '" ';
    }
  } else {
    query = options;
  }
  url = url + query;

  return rq(url, index, limit, order);
};

DeezerOpenApi.prototype.search.artist = function(query, order, limit, index, strict) {
  var url = 'search/artist?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerOpenApi.prototype.search.playlist = function(query, order, limit, index, strict) {
  var url = 'search/playlist?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerOpenApi.prototype.search.podcast = function(query, order, limit, index, strict) {
  var url = 'search/podcast?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerOpenApi.prototype.search.radio = function(query, order, limit, index, strict) {
  var url = 'search/radio?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerOpenApi.prototype.search.track = function(query, order, limit, index, strict) {
  var url = 'search/track?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerOpenApi.prototype.search.user = function(query, order, limit, index, strict) {
  var url = 'search/user?q=' + query;
  return rq(url, index, limit, order, strict);
};
function rq(url, index, limit, order, strict){
  if(!url.includes("?")) url = url + '?';
  if (index && index !== 0) url = url + '&index=' + index;
  if (limit && limit !== 0) url = url + '&limit=' + limit;
  if (order) url = url + '&order=' + order;
  if (strict) url = url + '&strict=on';
  if(url.endsWith('?')) url = url.slice(0, -1);
  console.log(url);
  return rp({
    url: apiUrl + url,
    json: true
  });
}
module.exports = DeezerOpenApi;
