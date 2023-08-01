"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Medhi Hassan', 'Qasida', 1));
console.log(make_album('Gulam Ali', 'Gazal', 17));
console.log(make_album('Nusrat Fateh Ali Khan', 'Qawali', 10));
