import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { CustomCard } from '../Card/CustomCard'
import { fetchMovie } from '../helper/AxiosHelper';

export const SearchForm = ({ handleOnAddToList }) => {

    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState({})

    const handleOnChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    }

    const handleOnSubmit = async e => {
        e.preventDefault();
        const movie = await fetchMovie(search);
        setMovie(movie.data)
    }
    return (
        <>

            <Form onSubmit={handleOnSubmit}>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form.Control placeholder="Search..."
                            onChange={handleOnChange}
                            required />
                    </Col>
                    <Col>
                        <Button
                            variant="warning"
                            type="submit"
                            value="search"
                        >Search
                        </Button>
                    </Col>
                </Row>
            </Form>


        </>
    )
}
