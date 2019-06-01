var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// access Library - playlist
// for (var { t01: one } of tracks)
var printPlaylists = function() {
  var finalResult = "";
  for (var i in library.playlists) {
    var currentPlaylists = library.playlists[i];
    var playlistId = currentPlaylists.id;
    var playlistName = currentPlaylists.name;
    var numTracks = currentPlaylists.tracks.length;
    var finalResult =
      playlistId + ": " + playlistName + " - " + numTracks + " tracks";

    console.log(finalResult);
  }
};
printPlaylists();

// // prints a list of all tracks, in the form:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function() {
  let trackList = "";
  for (let i in library.tracks) {
    let allTracks = library.tracks[i];
    let trackId = allTracks.id;
    let trackNames = allTracks.name;
    let trackArt = allTracks.artist;
    let trackAlbum = allTracks.album;
    let trackList =
      trackId + ": " + trackNames + " " + trackArt + " (" + trackAlbum + ")";

    console.log(trackList);
  }
};
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
  var playList = "";
  var currentPlaylist = library.playlists.p01;
  var playlistId = currentPlaylist.id;
  var playlistName = currentPlaylist.name;
  var numTracks = currentPlaylist.tracks.length;
  var playList =
    playlistId + ": " + playlistName + " - " + numTracks + " tracks";
  console.log(playList);

  var trackNameOne = "";
  var trackOne = library.tracks.t01;
  var trackId = trackOne.id;
  var trackNames = trackOne.name;
  var trackArt = trackOne.artist;
  var trackAlbum = trackOne.album;
  var trackNameOne =
    trackId + ": " + trackNames + " " + trackArt + " (" + trackAlbum + ")";
  console.log(trackNameOne);
  var trackNameTwo = "";
  var trackTwo = library.tracks.t02;
  var trackTwoId = trackTwo.id;
  var trackTwoNames = trackTwo.name;
  var trackTwoArt = trackTwo.artist;
  var trackTwoAlbum = trackTwo.album;
  var trackNameTwo =
    trackTwoId +
    ": " +
    trackTwoNames +
    " " +
    trackTwoArt +
    " (" +
    trackTwoAlbum +
    ")";
  console.log(trackNameTwo);
  // }
};
//
printPlaylist();

// adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {
  var trackId = library.tracks.t03.id;
  var playlistId = library.playlists.p01.tracks;
  var addTrack = playlistId + ", " + trackId;
  console.log(addTrack);
};
addTrackToPlaylist();

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library

var addTrack = function(name, artist, album) {
  var id = uid();
  library.tracks[id] = {
    id: id,
    name: "name",
    artist: "artist",
    album: "album"
  };
  console.log(library.tracks);
};
addTrack();
// adds a playlist to the library

var addPlaylist = function(name) {
  var id = uid();
  library.playlists[id] = { id: id, name: "name", tracks: " " };
  console.log(library.playlists);
};
addPlaylist();
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {};
