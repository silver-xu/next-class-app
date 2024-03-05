export interface ListingProps {
    title: string;
    linkUrl: string;
    thumbNail: string;
    location: string;
}

export const Listing = (listing: ListingProps) => {
    const { title, linkUrl, thumbNail, location } = listing;

    return (
        <div className="post">
            <div className="post__thumb">
                <a href={linkUrl}>
                    <img src={thumbNail} />
                </a>
            </div>
            <div className="post__info">
                <ul className="post__category">
                    <li>
                        <a title="Paris" href="02_city-details_1.html">
                            {location}
                        </a>
                    </li>
                </ul>
                <h3 className="post__title">
                    <a title={title} href={linkUrl}>
                        {title}
                    </a>
                </h3>
            </div>
        </div>
    );
};
