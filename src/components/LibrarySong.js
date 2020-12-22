import React from 'react'

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  setIsPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song)
    await audioRef.current.play()

    setIsPlaying(true)
    const newSong = songs.map((song) =>
      song.id === id ? { ...song, active: true } : { ...song, active: false }
    )
    setSongs(newSong)
  }

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
