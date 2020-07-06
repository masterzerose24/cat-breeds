import React from 'react';
import { Home } from './Home';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCatDetails } from 'src/redux/actions/CatsActions';

const CatCard: React.FC<Home.ICatCard> = ({
  cat
}) => {
  const dispatch = useDispatch()
  const onViewDetails = () => {
    dispatch(setCatDetails(cat));
  }

  return (
    <Card className="catCard">
      <Card.Img src={ cat.url } />
      <Link to={ `cat/${cat.id}` } className="btn-details">
        <Button variant="primary"
          onClick={ onViewDetails }
        >View Details</Button>
      </Link>
    </Card>
  );
}

export default CatCard;
