import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMusicRecords } from "../redux/action";
import  {Link}  from "react-router-dom";
import MainRoutes from "./mainroutes";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.appreducer.musicRecords);
  console.log(musicRecords)
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      //dispatch(getMusicRecords())
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);

  return (
    <>
      {musicRecords.length > 0 &&
        musicRecords.map((album) => {
          return (
            <MusicRecordsWrapper key={album.id}>
              <Link to={`/music/${album.id}`}>
              <div>{album.name}</div>
              <div>
                <img src={album.img} alt={album.name} />
              </div>
              <div>{album.genre}</div>
              <div>{album.year}</div>
              </Link>
            </MusicRecordsWrapper>
          );
        })}
    </>
  );
};

export default MusicRecords;

const MusicRecordsWrapper = styled.div`
  width: 300px;
  border: 1px solid green;
`;
