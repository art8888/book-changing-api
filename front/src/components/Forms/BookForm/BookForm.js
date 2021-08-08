import React from "react";

import Item from "./Item";

export default function BookForm(props) {
    const list = props.list;

    return (
        <React.Fragment>
            {list && list.map((item) => <Item value={item} /> )}
        </React.Fragment>
    )
}