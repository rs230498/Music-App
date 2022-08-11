import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMusicRecords } from '../redux/action';
import styled from "styled-components";

export const Single = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();
    const musicRecords = useSelector((store) => store.appreducer.musicRecords);
    const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
    const robin = (() => {
        navigate(`/`)
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
            currentMusic && setCurrentMusicAlbum(currentMusic);
        }
    }, [id, musicRecords]);
    console.log(currentMusicAlbum);
    return (
        <>
            <button onClick={robin}>Homepage</button>
            <MusicRecordsWrapper>

                <div>{currentMusicAlbum.name}</div>
                <div>
                    <img src={currentMusicAlbum.img} alt={currentMusicAlbum.name} />
                </div>
                <div>{currentMusicAlbum.genre}</div>
                <div>{currentMusicAlbum.year}</div>
                <Link to={`/music/${id}/edit`}>Edit</Link>
            </MusicRecordsWrapper>
        </>
    )
}

const MusicRecordsWrapper = styled.div`
  width: 300px;
  border: 1px solid green;
  margin:auto;
`;