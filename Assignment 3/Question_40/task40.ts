
interface Album{
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks: number): Album{
    let album: Album = {artist, title};
if(tracks){
     album.tracks = tracks;
}
return album;
}
console.log(make_album('Medhi Hassan', 'Qasida', 1));
console.log(make_album('Gulam Ali', 'Gazal', 17));
console.log(make_album('Nusrat Fateh Ali Khan', 'Qawali', 10));


