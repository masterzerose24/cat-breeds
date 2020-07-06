import React from 'react';
import './styles.scss';

import BreedsDropdown from './BreedsDropdown';
import CatCard from './CatCard';

import { Container, Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addToCatList } from 'src/redux/actions/CatsActions';

const RenderCatList: React.FC = () => {
  const catsList = useSelector((state: ReduxModels.IDefaultState) => state.cats.catsList);
  return <Row className="catsList">
    { !!catsList.length && catsList.map((item: any) => (
      <Col md={ 3 } sm={ 6 } key={ `${item.id}` }>
        <CatCard
          cat={ item }
        />
      </Col>
    )) }
    {
      !catsList.length && (<Col> No Cats Available</Col>)
    }
  </Row>
}

const HomeContainer = () => {
  const catsState = useSelector((state: ReduxModels.IDefaultState) => state.cats);
  const dispatch = useDispatch();

  const onLoadMore = () => {
    const nextPage = catsState.currentPage + 1;
    const selectedBreed = catsState.selectedBreed;
    dispatch(addToCatList(selectedBreed, nextPage));
  }

  return (
    <Container className="homeContainer">
      <h1>Cat Browser</h1>
      <BreedsDropdown />
      <RenderCatList />
      <Button
        variant="success"
        disabled={ !catsState.catsList.length }
        style={ { display: catsState.hasLoadMore ? 'block' : 'none' } }
        onClick={ onLoadMore }
      >Load More</Button>
    </Container>
  );
}

export default HomeContainer;
