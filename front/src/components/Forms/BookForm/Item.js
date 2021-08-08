import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '100%',
          flexGrow: 1,
        },
    },
    title: {
        padding: theme.spacing(1),
        maxWidth: '100%',
    },
    box: {
        padding: theme.spacing(1),
        margin: '2ch',
        maxWidth: '100%',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
    },
}));

export default function Item(item) {
    const classes = useStyles();
    const value = item.value;
    console.log(value);
    return (
        <Paper variant="outlined" square className={classes.box}>
        <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3} alignContent="center">
        <Grid item>
        <Typography variant="h6" className={classes.title}>About author</Typography>
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Author name" value={value.authors[0].name} />
            </FormControl>       
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Birth date" value={value.authors[0].birth_year} />
            </FormControl>            
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Death date" value={value.authors[0].death_year} />
            </FormControl>            
        </Grid>
        <Grid item>
            <Typography variant="h6" className={classes.title}>Bookshelves</Typography>
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Book ID" value={value.id} />
            </FormControl>  
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Book title" value={value.title} />
            </FormControl>                     
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Book language" value={value.languages[0]} />
            </FormControl>  
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Type of media" value={value.media_type} />
            </FormControl>                    
            <FormControl className={classes.formControl}>
                <TextField id="outlined-basic" label="Bookshelve" value={value.bookshelves[0]} />
            </FormControl>
        </Grid>       
        <Grid item>
            <Typography variant="h6" className={classes.title}>Downloads</Typography>
            <FormControl className={classes.formControl}>
                 <TextField id="outlined-basic" label="Total download" value={value.download_count} />
            </FormControl>                    
        </Grid>          
        </Grid>
        <Grid container spacing={3}>
            <Grid item>
                <Typography variant="h6" className={classes.title}>Book subjects</Typography>
                {value.subjects.map((subject) => 
                    <FormControl className={classes.formControl}>
                     <TextField id="outlined-basic" label="Book subject" value={subject} />
                    </FormControl>
                )}
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item>
                <Typography variant="h6" className={classes.title}>Formats</Typography>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="EPUB" value={value.formats['application/epub+zip']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="PDF" value={value.formats['application/pdf']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="ZIP" value={value.formats['application/zip']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="JPEG" value={value.formats['image/jpeg']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="RDF+XML" value={value.formats['application/rdf+xml']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="x-mobipocket-ebook" value={value.formats['application/x-mobipocket-ebook']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="PRS.TEX" value={value.formats['application/prs.tex']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="HTML" value={value.formats['text/html; charset=utf-8']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="txt/Plain (ASCII)" value={value.formats['text/plain; charset=us-ascii']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="txt/Plain (ISO-8859-1)" value={value.formats['text/plain; charset=iso-8859-1']} />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="txt/Plain (UTF-8)" value={value.formats['text/plain; charset=utf-8']} />
                </FormControl>
            </Grid>  
        </Grid>
        </form>            
        </Paper>

    )

}    