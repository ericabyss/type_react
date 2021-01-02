import React, { useRef } from "react";
//import { Layout } from "..";
import FeedPresenter from "./FeedPresenter";

const FeedContainer = () => {

    const scrollEl = useRef(null);

    const handleScroll = () => {
        console.log("scroll");
    }

    console.log(scrollEl);
    console.log(document.getElementById("wrapper"));

    return <FeedPresenter scrollEl = {scrollEl} handleScroll={handleScroll}/>;
};

export default FeedContainer;