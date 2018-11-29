import React from "react";
import PropTypes from "prop-types";

import List from "./List";
import Member from "./Member";

/**
 * TODO
 * Display a list of members
 */

 
export default function Members({}) {
    return (
        <List items={files} renderItem={(file, i) => <File name={file.name} />} />
    );

}