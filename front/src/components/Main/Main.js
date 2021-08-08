import React from "react";

import { makeStyles } from "@material-ui/styles";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Dropdown from "../Forms/Select/Select";
import BookForm from "../Forms/BookForm/BookForm";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    }
}));


export default function Main({children, ...props}) {
        const [books, setBooks] = React.useState([]);
        const classes = useStyles(props);

    function handleChange(value) {
        getList(value);
    }

    async function getList(subject) {
        let fullLink = `http://localhost:3010/books?subjects_like=` + subject;
        let response = await fetch(fullLink)
        let data = await response.json();
        let newState = data.map((e) => e);
        setBooks(newState);
    }


    return(
        <Box className={classes.root}>
            <Dropdown onChange={handleChange ?? ""} />
            <Container maxWidth="xlg">   
                <BookForm list={books ?? ""} />
            </Container>
        </Box>
    )
}