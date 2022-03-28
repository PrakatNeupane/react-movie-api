import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CustomCard = ({ movie, fun }) => {
    return (
        <Card style={{ width: '18rem' }} className='mt-3'>
            <Card.Img variant="top" src={movie?.Poster} />
            <Card.Body>
                <Card.Title>{movie?.Title}</Card.Title>
                <Card.Title>{movie?.imdbRating}</Card.Title>
                <div className='d-flex justify-content-between'>
                    <Button variant='info' onClick={() => fun('happy', movie)}>Happy</Button>
                    <Button variant='secondary' onClick={() => fun('lazy', movie)}>Lazy</Button>
                </div>


            </Card.Body>
        </Card>
    )
}
