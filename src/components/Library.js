import React from 'react'
import LibrarySong from './LibrarySong'
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''} `}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            song={song}
            id={song.id}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  )
}
export default Library
