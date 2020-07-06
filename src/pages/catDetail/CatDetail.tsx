import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getCatDetails } from 'src/redux/actions/CatsActions';
import { useSelector, useDispatch } from 'react-redux';

const CatDetail = () => {
  const catsState = useSelector((state: ReduxModels.IDefaultState) => state.cats);
  const dispatch = useDispatch();
  const params: any = useParams();

  useEffect(() => {
    if (!params.catId) return;
    const catId = params.catId || '';
    dispatch(getCatDetails(catId));
  }, [params.catId])

  const { selectedCat } = catsState
  const details = selectedCat && selectedCat.breeds && selectedCat.breeds[0];
  return (
    <Card className="catDetails">
      {
        !selectedCat.url && <h3>Loading</h3>
      }
      {
        !!selectedCat.url && (
          <>
            <Link to={ `/?breed=${catsState.selectedBreed}` }>
              <Button className="btn-back" variant="primary">Back</Button>
            </Link>
            <Card.Img src={ selectedCat.url } />
            <Card.Body>
              <h4>{ details.name }</h4>
              <h5>{ details.origin }</h5>
              <h6>{ details.temperament }</h6>
              <p>{ details.description }</p>
            </Card.Body>
          </>
        )
      }
    </Card>
  );
}

export default CatDetail;
