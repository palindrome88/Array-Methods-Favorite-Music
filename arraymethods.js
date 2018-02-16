const songs = [
    {
        song: "Jump (For My Love)"
    },
    {
        song: "Foolish"
    },
    {
        song: "I Will Follow You Into the Dark"
    },
    {
        song: "'Cause I'm A Man"
    },
    {
        song: "Gloria"
    },
    {
        song: "One Hour Ahead of the Posse"
    },
    {
        song: "I Can Change"
    },
    {
        song: "Redbone"
    },
    {
        song: "Sad Songs (Say So Much)"
    },
    {
        song: "Don't Dream It's Over"
    }

], 
    albums = [
    {
        album: "Break Out (1984 Version)"
    },
    {
        album: "Concrete Rose"
    },
    {
        album: "Plans"
    },
    {
        album: "Currents"
    },
    {
        album: "The Best of Branigan"
    },
    {
        album: "Burl Ives Greatest Hits"
    },
    {
        album: "Awaken, My Love!"
    },
    {
        album: "Breaking Hearts"
    },
    {
        album: "Crowded House"
    },
], 
    artists = [
    {
        band: "The Pointer Sisters"
    },
    {
        band: "Ashanti"
    },
    {
        band: "Death Cab for Cutie"
    },
    {
        band: "LCD Soundsystem"
    },
    {
        band: "Tame Impala"
    },
    {
        band: "Gloria Branigan"
    },
    {
        band: "Burl Ives"
    },
    {
        band: "Childish Gambino"
    },
    {
        band: "Elton John"
    },
    {
        band: "Crowded House"
    }
];

let selection = 0; // connect to button or something


function Music (artists, albums, songs, selection){
    this.musicInfo = {
        artist : artists[selection].band,
        album : albums[selection].album,
        song : songs[selection].song
    }
}

Music.prototype = {

    constructor : Music,

    sayName : function(){
        console.log(this.musicInfo);
    },

    toString : function(){
        return artists[selection].band + " " + albums[selection].album + " " + songs[selection].song + " -- You did it!";
    }

}

var musicSelect1 = new Music(artists, albums, songs, selection);

console.log(musicSelect1);
musicSelect1.sayName(); //AHH It's works!!!! :-DDDDDDD omfg
console.log(musicSelect1.toString());
function InsertMusic(artists, albums, songs){

    this.InsertMusic = {
        
    }
}