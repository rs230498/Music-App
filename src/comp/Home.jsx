import React from 'react'
import styled from 'styled-components';
import FilterSort from './filter';
import MusicRecords from './Musicrecords';
import MainRoutes from './mainroutes';

const Homepage = () => {
  return (
  <HomepageWrapper>
  <FilterSortWraper>
  <FilterSort/>
  </FilterSortWraper>
  <MusicRecordsWrapper>
  <MusicRecords />
  </MusicRecordsWrapper>
  </HomepageWrapper>
  );
  };
  export default Homepage;
  const HomepageWrapper = styled.div`
  display: flex;`
  const FilterSortWraper= styled.div`
  width: 200px;
  border: 1px solid red`;
  const MusicRecordsWrapper = styled.div`
  width: 100%;
  border: 1px solid blue;
  display:grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, max-content) );
  grid-gap:20px 20px`;