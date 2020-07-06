import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';

import catsActions from 'src/redux/actions/CatsActions';
import { useDispatch, useSelector } from 'react-redux';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const BreedsDropdown = () => {
  const dispatch = useDispatch();
  const catsState = useSelector((state: ReduxModels.IDefaultState) => state.cats);
  const query = useQuery();
  const breedId = query.get('breed') || '';
  useEffect(() => {
    dispatch(catsActions.getCatBreeds());
  }, [catsState.breeds.length]);

  const onBreedChange = (breed: string) => {
    dispatch(catsActions.getCatList(breed, 1));
  }
  useEffect(() => {
    if (breedId)
      onBreedChange(breedId)
  }, [breedId])


  return (
    <div className="breedsDropdown">
      <Form>
        <Form.Label>Breeds</Form.Label>
        { !!catsState.breeds.length &&
          <Form.Control as="select"
            onChange={ e => onBreedChange(e.target.value) }
            disabled={ !catsState.breeds.length }
            defaultValue={ breedId }
          >
            <option> Select a breed </option>
            { catsState.breeds.map(item => (
              <option value={ item.id } key={ item.id }> { item.name } </option>
            )) }
          </Form.Control>
        }
      </Form>
    </div>
  );
}

export default BreedsDropdown;
