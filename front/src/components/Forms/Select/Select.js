import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


export default function Dropdown(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [selected, setSelected] = React.useState("");

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let response = await fetch(`http://localhost:3010/subjects`)
            let data = await response.json();
            let newState = data.map((e) => e);
            setItems(newState);
        }
        fetchData()
        setLoading(false);
    }, []);

    const handleMuiSelectOnChange = (event) => {
        event.persist(); //get rid of pool
        setSelected(event.target.value);
        props.onChange(event.target.value);

    };   

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="select-dropdown-label">Choose subject</InputLabel>
            <Select
                disabled={loading}
                labelId="select-dropdown-label"
                id="select-dropdown-select"
                value={selected}
                onChange={handleMuiSelectOnChange}
            >
            {items && items.map((item) =>
            <MenuItem key={item} value={item}>{item}</MenuItem>
        )}
            </Select>            
        </FormControl>
    )
}