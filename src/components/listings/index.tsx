import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Listing } from "./listing";
import "./listings.scss";

export const Listings = () => (
    <div className="container">
        <h2 className="title title--more offset-item">
            Featured Classes
            <a title="View more" href="#">
                View more
                <FontAwesomeIcon icon={faAngleRight} width={10} />
            </a>
        </h2>
        <div className="news__content offset-item">
            <div className="row">
                <Listing
                    title="Skating School - Kids Roller Skating Program (5 - 10 yrs)"
                    linkUrl="http://google.com"
                    thumbNail="images/thumbnails/skating.jpg"
                    location="Box Hill"
                />
                <Listing
                    title="Ballet Studio - Junior Ballet Program"
                    linkUrl="http://google.com"
                    thumbNail="images/thumbnails/ballet.jpg"
                    location="South Melbourne"
                />
                <Listing
                    title="Gym Studio - Junior Gymnasium Program"
                    linkUrl="http://google.com"
                    thumbNail="images/thumbnails/gymnasium.jpg"
                    location="Mont Albert"
                />
                <Listing
                    title="Baskeball Lessons - Junior (8-10 yrs)"
                    linkUrl="http://google.com"
                    thumbNail="images/thumbnails/basketball.jpg"
                    location="Box Hill"
                />
                <Listing
                    title="Tennis Lessons - Blue (5-7 yrs)"
                    linkUrl="http://google.com"
                    thumbNail="images/thumbnails/tennis.jpg"
                    location="Doncaster"
                />
                <Listing
                    title="Piano Private Lessons - Any age"
                    linkUrl="http://google.com"
                    thumbNail="images/thumbnails/piano.jpg"
                    location="Glen Waverley"
                />
            </div>
        </div>
    </div>
);
