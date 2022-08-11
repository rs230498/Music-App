import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMusicRecords, updateMusicRecord } from "../redux/action";
const EditMusicRecord = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();
    const musicRecords = useSelector((store) => store.appreducer.musicRecords);
    const [music,setmusic] = useState("")
    const [artist,setartist] = useState("")

    const handlesubmit = ((e)=>{
        e.preventDefault()
        if(music && artist)
        {
            const payload = {
                name:music,
                artist:artist
            }
            dispatch(updateMusicRecord(id,payload)).then((r)=>{
                dispatch(getMusicRecords()).then(()=>{
                    console.log("ro")
                    navigate(`/music/${id}`)
                })
            })
        }

    })

    useEffect(() => {
        if (musicRecords.length === 0) {
            dispatch(getMusicRecords());
        }
    }, [musicRecords.length, dispatch])

    useEffect(() => {
        if (id) {
            // filter the album based on the id
            const currentMusic = musicRecords.find((album) => album.id === id);
            if(currentMusic)
            {
                setmusic(currentMusic.name)
                setartist(currentMusic.artist)
            }
        }
    }, [id, musicRecords]);
    console.log(music,artist);
    return (
        <div>
            <h1>Edit Page</h1>
            <form onSubmit={handlesubmit}>
            <div>
                <label>Edit Music Name </label>
                <input value={music} onChange={(e)=>setmusic(e.target.value)}/>
            </div>
            <div>
                <label>Edit Artish Name</label>
                <input value={artist} onChange={(e)=>setartist(e.target.value)}/>
            </div>
            <button type="submit">Update</button>
            </form>
        </div>
)};
export default EditMusicRecord;