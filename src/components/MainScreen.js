import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

function MainScreen({ shows }) {
  return (
    <div className="container">
      <h1 className="my-4">TV Shows</h1>
      <div className="row">
        {shows.map(show => (
          <div key={show.show.id} className="col-md-4">
            <Card className="mb-4">
              <CardImg top src={show.show.image?.medium} alt={show.show.name} />
              <CardBody>
                <CardTitle>{show.show.name}</CardTitle>
                <Link to={`/details/${show.show.id}`} className="btn btn-primary">View Details</Link>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainScreen;
