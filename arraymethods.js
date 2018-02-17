var songs = [
    {
        song: "Jump (For My Love)",
        id: 1
        
    },
    {
        song: "Foolish",
        id: 2
    },
    {
        song: "I Will Follow You Into the Dark",
        id: 3
    },
    {
        song: "'Cause I'm A Man",
        id: 4
    },
    {
        song: "Gloria",
        id: 5
    },
    {
        song: "One Hour Ahead of the Posse",
        id: 6
    },
    {
        song: "I Can Change",
        id: 7
    },
    {
        song: "Redbone",
        id: 8
    },
    {
        song: "Sad Songs (Say So Much)",
        id: 9
    },
    {
        song: "Don't Dream It's Over",
        id: 10
    }

], albums = [
    {
        album: "Break Out (1984 Version)",
        id: 1
    },
    {
        album: "Concrete Rose",
        id: 2
    },
    {
        album: "Plans",
        id: 3
    },
    {
        album: "This is Happening",
        id: 4
    },
    {
        album: "Currents",
        id: 5
    },
    {
        album: "The Best of Branigan",
        id: 6
    },
    {
        album: "Burl Ives Greatest Hits",
        id: 7
    },
    {
        album: "Awaken, My Love!",
        id: 8
    },
    {
        album: "Breaking Hearts",
        id: 9
    },
    {
        album: "Crowded House",
        id: 10
    },
], artists = [
    {
        band: "The Pointer Sisters",
        id: 1
    },
    {
        band: "Ashanti",
        id: 2
    },
    {
        band: "Death Cab for Cutie",
        id: 3
    },
    {
        band: "LCD Soundsystem",
        id: 4
    },
    {
        band: "Tame Impala",
        id: 5
    },
    {
        band: "Gloria Branigan",
        id: 6
    },
    {
        band: "Burl Ives",
        id: 7
    },
    {
        band: "Childish Gambino",
        id: 8
    },
    {
        band: "Elton John",
        id: 9
    },
    {
        band: "Crowded House",
        id: 10
    }
];

let selection = 0; // connect to button or something


function Music (selection){
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

function Collection(selection){
    this.musicInfo = {
        songs,
        artists,
        albums
    }
}

// Extends from Music
Collection.prototype = new Music(selection);

Collection.prototype.constructor = Collection;

// Custom Prototypes
Collection.prototype.push = function(band, album, song) { 
    let id = artists.length+1;
    artists.push({band, id}), 
    id = albums.length+1;
    albums.push({album, id}),
    id = songs.length+1;
    songs.push({song, id})
    
}

Collection.prototype.returnID = function(ID) {
    let _artist, _album, _song;
    artists.forEach(function(item){
        if(ID === item.id){
            
            _artist = item; 
        }
    });
    albums.forEach(function(item){
        if(ID === item.id){
            
            _album = item; 
        }
    });
    songs.forEach(function(item){
        if(ID === item.id){
            
            _song = item; 
        }
    });
    return {_artist, _album, _song};
}


// Collection object which needs to be connected to HTML
let musicCollection = new Collection(selection);
console.log(musicCollection);

musicCollection.sayName();
musicCollection.push("Beyonce", "B'day", "Deja Vu");
console.log(musicCollection.returnID(7));


