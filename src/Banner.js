import {Button} from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./Banner.css";
import Search from "./Search";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                {
                showSearch && <Search/>
            }

                <Button className="banner__searchButton"
                    onClick={
                        () => setShowSearch(!showSearch)
                    }
                    variant="outlined">
                    {
                    showSearch ? "Hide" : "Search Dates"
                } </Button>
            </div>
            <div className="banner__info mx-2 p-2 justify-content-center">
                <h1 className="text-center fs-4 p-2">
                    Get out and stretch your imagination
                </h1>
                <p className="fs-6 my-4">
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </p>
                {/* <div className="mx-auto p-2 text-center"> */}
                    <Button className="p-2 my-4"
                        onClick={
                            () => history.push("/search")
                        }
                        variant="outlined">
                        Explore nearby
                    </Button>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Banner;
