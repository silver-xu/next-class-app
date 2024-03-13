import { Header } from "@/components/header";

import "./listing-details.scss";

export default function Page() {
    return (
        <div id="wrapper">
            <Header />
            <div id="main" className="site-main single single-02">
                <div className="page-title page-title--small align-left">
                    <div className="container">
                        <div className="page-title__content">
                            <h1 className="page-title__name">Skating School</h1>
                            <p className="page-title__slogan">Box Hill North</p>
                        </div>
                    </div>
                </div>
                <div className="place">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="place__left">
                                    <ul className="place__breadcrumbs breadcrumbs">
                                        <li>
                                            <a title="Beginner" href="#">
                                                Beginner
                                            </a>
                                        </li>
                                        <li>
                                            <a title="5-12 yrs" href="#">
                                                5-12 yrs
                                            </a>
                                        </li>
                                        <li></li>
                                    </ul>
                                    <div className="place__box place__box--npd">
                                        <h1>Kids Roller Skating Program</h1>
                                    </div>
                                    <div className="place__box place__box-overview">
                                        <h3>Overview</h3>
                                        <div className="place__desc">
                                            The Grade I-listed British Library
                                            is the largest national library in
                                            the world with over 150 million
                                            catalogued items held inside, some
                                            dating back as far as 2000 BC. It’s
                                            home to 15th-century editions of
                                            Chaucer’s Canterbury Tales, original
                                            song sheets penned by the Beatles
                                            and the memorandum written by Lord
                                            Nelson two days before the Battle of
                                            Trafalgar. It also receives a copy
                                            of every single book published in
                                            the UK and Ireland. The Grade
                                            I-listed British Library is the
                                            largest national library in the
                                            world with over 150 million
                                            catalogued items held inside, some
                                            dating back as far as 2000 BC. It’s
                                            home to 15th-century editions of
                                            Chaucer’s Canterbury Tales, original
                                            song sheets penned by the Beatles
                                            and the memorandum written by Lord
                                            Nelson two days before the Battle of
                                            Trafalgar. It also receives a copy
                                            of every single book published in
                                            the UK and Ireland.
                                        </div>
                                        <a
                                            href="#"
                                            className="show-more"
                                            title="Show More"
                                        >
                                            Show more
                                        </a>
                                    </div>
                                    <div className="place__box place__box-map">
                                        <h3 className="place__title--additional">
                                            Location & Maps
                                        </h3>
                                        <div className="maps">
                                            <div id="map"></div>
                                        </div>
                                        <div className="address">
                                            <i className="la la-map-marker"></i>
                                            1906 Market St San Francisco 94102
                                            <a href="#" title="Direction">
                                                (Direction)
                                            </a>
                                        </div>
                                    </div>
                                    <div className="place__box">
                                        <h3>Contact Info</h3>
                                        <ul className="place__contact">
                                            <li>
                                                <i className="la la-phone"></i>
                                                <a
                                                    title="00 343 7859"
                                                    href="tel:003437859"
                                                >
                                                    00 343 7859
                                                </a>
                                            </li>
                                            <li>
                                                <i className="la la-globe"></i>
                                                <a
                                                    title="www.abcsite.com"
                                                    href="www.abcsite.com"
                                                >
                                                    www.abcsite.com
                                                </a>
                                            </li>
                                            <li>
                                                <i className="la la-facebook-f"></i>
                                                <a
                                                    title="fb.com/abc"
                                                    href="fb.com/abc"
                                                >
                                                    facebook.com/getgolo
                                                </a>
                                            </li>
                                            <li>
                                                <i className="la la-instagram"></i>
                                                <a
                                                    title="instagram.com/abc"
                                                    href="instagram.com/abc"
                                                >
                                                    instagram.com/getgolo
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="place__box place__box-open">
                                        <h3 className="place__title--additional">
                                            Opening Hours
                                        </h3>
                                        <table className="open-table">
                                            <tbody>
                                                <tr>
                                                    <td className="day">
                                                        Monday
                                                    </td>
                                                    <td className="time">
                                                        8:00 am - 10:00 pm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="day">
                                                        Tuesday
                                                    </td>
                                                    <td className="time">
                                                        8:00 am - 10:00 pm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="day">
                                                        Wednesday
                                                    </td>
                                                    <td className="time">
                                                        8:00 am - 10:00 pm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="day">
                                                        Thursday
                                                    </td>
                                                    <td className="time">
                                                        8:00 am - 10:00 pm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="day">
                                                        Friday
                                                    </td>
                                                    <td className="time">
                                                        8:00 am - 10:00 pm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="day">
                                                        Saturday
                                                    </td>
                                                    <td className="time">
                                                        8:00 am - 10:00 pm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="day">
                                                        Sunday
                                                    </td>
                                                    <td className="time">
                                                        Close
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="place__box">
                                        <h3>FAQ's</h3>
                                        <ul className="faqs-accordion">
                                            <li>
                                                <h4>
                                                    What are the ingredients or
                                                    taste profile for the
                                                    signature sauce?
                                                </h4>
                                                <div className="desc">
                                                    <p>
                                                        We are currently
                                                        offering free shipping
                                                        throughout Northern
                                                        California on all orders
                                                        over $80. Peninsula to
                                                        San Francisco can
                                                        receive next day
                                                        delivery.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>
                                                    How far does free delivery
                                                    extend to? To San Francisco?
                                                </h4>
                                                <div className="desc">
                                                    <p>
                                                        We are currently
                                                        offering free shipping
                                                        throughout Northern
                                                        California on all orders
                                                        over $80. Peninsula to
                                                        San Francisco can
                                                        receive next day
                                                        delivery.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>
                                                    How far does free delivery
                                                    extend to? To San Francisco?
                                                </h4>
                                                <div className="desc">
                                                    <p>
                                                        We are currently
                                                        offering free shipping
                                                        throughout Northern
                                                        California on all orders
                                                        over $80. Peninsula to
                                                        San Francisco can
                                                        receive next day
                                                        delivery.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="place__box place__box--reviews">
                                        <h3 className="place__title--reviews">
                                            Review (3)
                                            <span className="place__reviews__number">
                                                4.2
                                                <i className="la la-star"></i>
                                            </span>
                                        </h3>
                                        <ul className="place__comments">
                                            <li>
                                                <div className="place__author">
                                                    <div className="place__author__avatar">
                                                        <a
                                                            title="Sebastian"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="images/avatars/male-4.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="place__author__info">
                                                        <a
                                                            title="Sebastian"
                                                            href="#"
                                                        >
                                                            Sebastian
                                                        </a>
                                                        <div className="place__author__star">
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <span>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                            </span>
                                                        </div>
                                                        <span className="time">
                                                            October 1, 2019
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="place__comments__content">
                                                    <p>
                                                        Went there last Saturday
                                                        for the first time to
                                                        watch my favorite djs
                                                        (Kungs, Sam Feldet and
                                                        Watermat) and really had
                                                        a great experience. The
                                                        atmosphere is amazing
                                                        and I am going next
                                                        week.
                                                    </p>
                                                </div>
                                                <a
                                                    title="Reply"
                                                    href="#"
                                                    className="place__comments__reply"
                                                >
                                                    <i className="la la-comment-dots"></i>
                                                    Reply
                                                </a>
                                                <ul>
                                                    <li>
                                                        <div className="place__author">
                                                            <div className="place__author__avatar">
                                                                <a
                                                                    title="Chiemeka"
                                                                    href="#"
                                                                >
                                                                    <img
                                                                        src="images/avatars/male-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="place__author__info">
                                                                <a
                                                                    title="Chiemeka"
                                                                    href="#"
                                                                >
                                                                    Chiemeka
                                                                </a>
                                                                <div className="place__author__star">
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <i className="la la-star"></i>
                                                                    <span>
                                                                        <i className="la la-star"></i>
                                                                        <i className="la la-star"></i>
                                                                        <i className="la la-star"></i>
                                                                        <i className="la la-star"></i>
                                                                        <i className="la la-star"></i>
                                                                    </span>
                                                                </div>
                                                                <span className="time">
                                                                    October 1,
                                                                    2019
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="place__comments__content">
                                                            <p>
                                                                Thank you for
                                                                your kind
                                                                words.It was
                                                                truly very nice
                                                                to meet you. I
                                                                am glad to read
                                                                you enjoyed the
                                                                area and the
                                                                cottage.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="place__author">
                                                    <div className="place__author__avatar">
                                                        <a
                                                            title="Nitithorn"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="images/avatars/female-4.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="place__author__info">
                                                        <a
                                                            title="Nitithorn"
                                                            href="#"
                                                        >
                                                            Nitithorn
                                                        </a>
                                                        <div className="place__author__star">
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <i className="la la-star"></i>
                                                            <span>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                                <i className="la la-star"></i>
                                                            </span>
                                                        </div>
                                                        <span className="time">
                                                            October 1, 2019
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="place__comments__content">
                                                    <p>
                                                        Went there last Saturday
                                                        for the first time to
                                                        watch my favorite djs
                                                        (Kungs, Sam Feldet and
                                                        Watermat) and really had
                                                        a great experience.
                                                    </p>
                                                </div>
                                                <a
                                                    title="Reply"
                                                    href="#"
                                                    className="place__comments__reply"
                                                >
                                                    <i className="la la-comment-dots"></i>
                                                    Reply
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="review-form">
                                            <h3>Write a review</h3>
                                            <form action="#">
                                                <div className="rate">
                                                    <span>Rate This Place</span>
                                                    <div className="stars">
                                                        <a
                                                            href="#"
                                                            title="star-1"
                                                        >
                                                            <i className="la la-star"></i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            title="star-2"
                                                        >
                                                            <i className="la la-star"></i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            title="star-3"
                                                        >
                                                            <i className="la la-star"></i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            title="star-4"
                                                        >
                                                            <i className="la la-star"></i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            title="star-5"
                                                        >
                                                            <i className="la la-star"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="field-textarea">
                                                    <img
                                                        className="author-avatar"
                                                        src="images/avatars/male-1.jpg"
                                                        alt=""
                                                    />
                                                    <textarea
                                                        name="review_text"
                                                        placeholder="Write a review"
                                                    ></textarea>
                                                </div>
                                                <div className="field-submit">
                                                    <input
                                                        type="submit"
                                                        className="btn"
                                                        value="Submit"
                                                        name="submit"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar sidebar--shop sidebar--border fixed">
                                    <div className="widget widget-shadow widget-reservation">
                                        <h3>Book a free trial</h3>
                                        <div className="form-underline">
                                            <input
                                                type="submit"
                                                name="submit"
                                                value="Request"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="similar-places">
                    <div className="container">
                        <h2 className="similar-places__title title">
                            Similar places
                        </h2>
                        <div className="similar-places__content">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="place-item layout-02 place-hover">
                                        <div className="place-inner">
                                            <div className="place-thumb">
                                                <a
                                                    className="entry-thumb"
                                                    href="04_place-details-1.html"
                                                >
                                                    <img
                                                        src="images/listing/03.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="golo-add-to-wishlist btn-add-to-wishlist "
                                                    data-place-id="185"
                                                >
                                                    <span className="icon-heart">
                                                        <i className="la la-bookmark large"></i>
                                                    </span>
                                                </a>
                                                <a
                                                    className="entry-category purple"
                                                    href="#"
                                                >
                                                    <i className="las la-spa"></i>
                                                    <span>Massage</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="author"
                                                    title="Author"
                                                >
                                                    <img
                                                        src="images/avatars/male-4.jpg"
                                                        alt="Author"
                                                    />
                                                </a>
                                            </div>
                                            <div className="entry-detail">
                                                <div className="entry-head">
                                                    <div className="place-type list-item">
                                                        <span>Massage</span>
                                                    </div>
                                                    <div className="place-city">
                                                        <a href="#">Lyon</a>
                                                    </div>
                                                </div>
                                                <h3 className="place-title">
                                                    <a href="04_place-details-1.html">
                                                        Vivi Body Spa
                                                    </a>
                                                </h3>
                                                <div className="close-now">
                                                    <i className="las la-door-closed"></i>
                                                    Close now
                                                </div>
                                                <div className="entry-bottom">
                                                    <div className="place-preview">
                                                        <div className="place-rating">
                                                            <span>5.0</span>
                                                            <i className="la la-star"></i>
                                                        </div>
                                                        <span className="count-reviews">
                                                            (2 Reviews)
                                                        </span>
                                                    </div>
                                                    <div className="place-price">
                                                        <span>$$</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="place-item layout-02 place-hover">
                                        <div className="place-inner">
                                            <div className="place-thumb">
                                                <a
                                                    className="entry-thumb"
                                                    href="04_place-details-1.html"
                                                >
                                                    <img
                                                        src="images/listing/07.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="golo-add-to-wishlist btn-add-to-wishlist "
                                                    data-place-id="185"
                                                >
                                                    <span className="icon-heart">
                                                        <i className="la la-bookmark large"></i>
                                                    </span>
                                                </a>
                                                <a
                                                    className="entry-category orange"
                                                    href="#"
                                                >
                                                    <i className="las la-cocktail"></i>
                                                    <span>Nightlife</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="author"
                                                    title="Author"
                                                >
                                                    <img
                                                        src="images/avatars/male-3.jpg"
                                                        alt="Author"
                                                    />
                                                </a>
                                            </div>
                                            <div className="entry-detail">
                                                <div className="entry-head">
                                                    <div className="place-type list-item">
                                                        <span>Nightlife</span>
                                                    </div>
                                                    <div className="place-city">
                                                        <a href="#">Bordeaux</a>
                                                    </div>
                                                </div>
                                                <h3 className="place-title">
                                                    <a href="04_place-details-1.html">
                                                        Jardin Club
                                                    </a>
                                                </h3>
                                                <div className="open-now">
                                                    <i className="las la-door-open"></i>
                                                    Open now
                                                </div>
                                                <div className="entry-bottom">
                                                    <div className="place-preview">
                                                        <div className="place-rating">
                                                            <span>5.0</span>
                                                            <i className="la la-star"></i>
                                                        </div>
                                                        <span className="count-reviews">
                                                            (2 Reviews)
                                                        </span>
                                                    </div>
                                                    <div className="place-price">
                                                        <span>$$</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="place-item layout-02 place-hover">
                                        <div className="place-inner">
                                            <div className="place-thumb">
                                                <a
                                                    className="entry-thumb"
                                                    href="04_place-details-1.html"
                                                >
                                                    <img
                                                        src="images/listing/01.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="golo-add-to-wishlist btn-add-to-wishlist "
                                                    data-place-id="185"
                                                >
                                                    <span className="icon-heart">
                                                        <i className="la la-bookmark large"></i>
                                                    </span>
                                                </a>
                                                <a
                                                    className="entry-category rosy-pink"
                                                    href="#"
                                                >
                                                    <i className="las la-utensils"></i>
                                                    <span>Restaurant</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="author"
                                                    title="Author"
                                                >
                                                    <img
                                                        src="images/avatars/female-4.jpg"
                                                        alt="Author"
                                                    />
                                                </a>
                                            </div>
                                            <div className="entry-detail">
                                                <div className="entry-head">
                                                    <div className="place-type list-item">
                                                        <span>Restaurant</span>
                                                    </div>
                                                    <div className="place-city">
                                                        <a href="#">Paris</a>
                                                    </div>
                                                </div>
                                                <h3 className="place-title">
                                                    <a href="04_place-details-1.html">
                                                        Vago Restaurant
                                                    </a>
                                                </h3>
                                                <div className="open-now">
                                                    <i className="las la-door-open"></i>
                                                    Open now
                                                </div>
                                                <div className="entry-bottom">
                                                    <div className="place-preview">
                                                        <div className="place-rating">
                                                            <span>5.0</span>
                                                            <i className="la la-star"></i>
                                                        </div>
                                                        <span className="count-reviews">
                                                            (2 Reviews)
                                                        </span>
                                                    </div>
                                                    <div className="place-price">
                                                        <span>$$</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="place-item layout-02 place-hover">
                                        <div className="place-inner">
                                            <div className="place-thumb">
                                                <a
                                                    className="entry-thumb"
                                                    href="04_place-details-1.html"
                                                >
                                                    <img
                                                        src="images/listing/04.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="golo-add-to-wishlist btn-add-to-wishlist "
                                                    data-place-id="185"
                                                >
                                                    <span className="icon-heart">
                                                        <i className="la la-bookmark large"></i>
                                                    </span>
                                                </a>
                                                <a
                                                    className="entry-category charcoal-purple"
                                                    href="#"
                                                >
                                                    <i className="las la-shopping-bag"></i>
                                                    <span>Shop</span>
                                                </a>
                                                <a
                                                    href="#"
                                                    className="author"
                                                    title="Author"
                                                >
                                                    <img
                                                        src="images/avatars/male-2.jpg"
                                                        alt="Author"
                                                    />
                                                </a>
                                            </div>
                                            <div className="entry-detail">
                                                <div className="entry-head">
                                                    <div className="place-type list-item">
                                                        <span>Shopping</span>
                                                    </div>
                                                    <div className="place-city">
                                                        <a href="#">Paris</a>
                                                    </div>
                                                </div>
                                                <h3 className="place-title">
                                                    <a href="04_place-details-1.html">
                                                        Antoinette
                                                    </a>
                                                </h3>
                                                <div className="open-now">
                                                    <i className="las la-door-open"></i>
                                                    Open now
                                                </div>
                                                <div className="entry-bottom">
                                                    <div className="place-preview">
                                                        <span className="no-reviews">
                                                            (no reviews)
                                                        </span>
                                                    </div>
                                                    <div className="place-price">
                                                        <span>Free</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
