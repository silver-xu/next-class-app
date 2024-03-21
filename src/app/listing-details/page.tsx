import { Header } from "@/components/header";

import { Map } from "../../components/map";

import { DatePicker, InputNumber, Select } from "antd";
import { Footer } from "@/components/footer";
import "./listing-details.scss";

export default function Page() {
    return (
        <div id="wrapper">
            <Header />
            <div id="main" className="site-main single single-02">
                <div className="page-title page-title--small align-left">
                    <div className="container">
                        <div className="page-title__content">
                            <h1 className="page-title__name">
                                Kids Roller Skating Program
                            </h1>
                            <p className="page-title__slogan">Skating School</p>
                        </div>
                    </div>
                </div>
                <div className="place">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sidebar sidebar--shop sidebar--border fixed">
                                    <div className="widget widget-shadow widget-reservation">
                                        <h3>Book a free trial</h3>
                                        <div className="form-underline">
                                            <div className="row">
                                                <div className="field-left">
                                                    Date
                                                </div>
                                                <div className="field-right">
                                                    <DatePicker
                                                        placeholder=""
                                                        className="booking-date"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="field-left">
                                                    Time
                                                </div>
                                                <div className="field-right">
                                                    <Select
                                                        mode="tags"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        placeholder="Select preferred times"
                                                        options={[
                                                            {
                                                                value: "12:30pm",
                                                                label: "12:30pm",
                                                            },
                                                            {
                                                                value: "01:30pm",
                                                                label: "01:30pm",
                                                            },
                                                        ]}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="field-left">
                                                    Attendees
                                                </div>
                                                <div className="field-right">
                                                    <InputNumber
                                                        className="number-of-bookings"
                                                        min={1}
                                                        max={10}
                                                        defaultValue={3}
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                type="submit"
                                                name="submit"
                                                value="Request"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="place__left">
                                    <div className="place__box place__box-overview">
                                        <h3 className="top">Overview</h3>
                                        <div className="place__desc">
                                            <p>
                                                The Skate Studio provides
                                                classes for all ages and skill
                                                levels From beginner, to
                                                intermediate to advanced. We
                                                pride ourselves on providing
                                                classes that are welcoming,
                                                engaging, inclusive and fun!
                                                Here is what you can expect when
                                                you attend one of our classes:
                                            </p>
                                            <p>
                                                <b>BEGINNER</b>: Our beginner
                                                classes are for those who have
                                                never skated, or are in the
                                                early stages of their skating
                                                journey. During these classes
                                                you will learn:
                                            </p>
                                            <ul>
                                                <li>Correct skating posture</li>
                                                <li>Forward skating</li>
                                                <li>Basic one foot skating</li>
                                                <li>
                                                    Introduction into beginner
                                                    jumps and spins
                                                </li>
                                                <li>
                                                    Transition of weight during
                                                    skating
                                                </li>
                                                <li>How to stop</li>
                                            </ul>
                                            <p>
                                                <b>INTERMEDIATE</b>: Our
                                                intermediate classes build on
                                                from our beginner classes. These
                                                classes are for those that have
                                                moved up through the beginner
                                                classes or who already have some
                                                past skating experience. During
                                                these classes you will learn:
                                            </p>
                                            <ul>
                                                <li>
                                                    Basic backward skating,
                                                    including scissors/bubbles.
                                                </li>
                                                <li>
                                                    Introduction into forward
                                                    and backward crosspulls.
                                                </li>
                                                <li>
                                                    One foot skating - spirals.
                                                </li>
                                                <li>
                                                    Two foot jump with half
                                                    rotation
                                                </li>
                                                <li>Two and one foot spins</li>
                                                <li>
                                                    Transitions from forwards to
                                                    backwards
                                                </li>
                                                <li>
                                                    Intro into footwork
                                                    including 3 turns.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="feature-image">
                                            <img src="images/thumbnails/skating.jpg" />
                                        </div>
                                    </div>

                                    <div className="place__box place__box-map">
                                        <h3 className="place__title--additional">
                                            Location & Maps
                                        </h3>
                                        <div className="maps">
                                            <Map />
                                        </div>
                                        <div className="address">
                                            <i className="la la-map-marker"></i>
                                            1906 Market St San Francisco 94102
                                            <a href="#" title="Direction">
                                                (Direction)
                                            </a>
                                        </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
