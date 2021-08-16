import React from 'react';

const LibrarySong = ({song,songs , setCurrentSong,id,audioRef,setSongs}) => {

    const onSelectHandler = async()=>{
        await setCurrentSong(song)
        audioRef.current.play();

        //Add active state 
        const newSongs = songs.map((song)=>{
            if(song.id===id){
                return {
                    ...song,
                    active:true,
                }
            }else{
                return{
                    ...song,
                    active:false,
                }
            }
        })
        setSongs(newSongs)
    }
    
   

    return (
        <div onClick={onSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
        <img alt={song.name} src={song.cover}></img>
        <div className='song-description'>
        <h3>{song.name}</h3>
        <h4> {song.artist}</h4>
        </div>


        </div>
    )
}

export default LibrarySong
