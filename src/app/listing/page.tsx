import {
    PhoneOutlined,
    MailOutlined,
    GlobalOutlined,
    HeartOutlined,
} from "@ant-design/icons";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import styles from "./page.module.scss";
import { Map } from "@/components/map";
import { Rate } from "antd";

const mapBoxApiKey = process.env.MAPBOX_API_KEY;

export default function Listing() {
    return (
        <div className={styles.contentWrapper}>
            <Header theme="light" />
            <Gallery startIndex={3} curveTop={false} />
            <h2>Mock Arts Studio</h2>
            <div className={styles.infoWrapper}>
                <div className={styles.category}>Art Classes</div>
                <p className={styles.address}>
                    327 Whitehorse Rd, Balwyn VIC 3103
                </p>
            </div>
            <div className={styles.reviews}>
                <h3>Reviews</h3>
                <span className={styles.ratingLabel}>5.0</span>
                <Rate disabled value={5} className={styles.rating} />
                <span className={styles.ratingLabel}>15 reviews</span>
                <h4>Jinah Park</h4>
                <p>Also good thing is we can bring our drinks and food.</p>
            </div>
            <div className={styles.contacts}>
                <PhoneOutlined />
                <MailOutlined />
                <GlobalOutlined />
                <HeartOutlined />
            </div>
            <div className={styles.directions}>
                <h3>Directions</h3>
                <Map
                    mapBoxApiKey={mapBoxApiKey}
                    location={{ latitude: -37.8126, longitude: 145.08014 }}
                    streetAddress="327 Whitehorse Rd, Balwyn VIC 3103"
                />
            </div>
            <div className={styles.courses}>
                <h3>Courses</h3>
                <h4>Art Classes for 2024</h4>
                <p>
                    <ul>
                        <li>
                            1. Graphite & Charcoal Drawing
                            <ul>
                                <li>Duration: 6 weeks</li>
                                <li>Commencement Date: 15th January 2024</li>
                                <li>Price: $170</li>
                            </ul>
                        </li>
                        <li>
                            2.Chalk & Oil Pastels
                            <ul>
                                <li>Duration: 6 weeks</li>
                                <li>Commencement Date: 26th February 2024</li>
                                <li>Price: $170</li>
                            </ul>
                        </li>
                        <li>
                            3.Watercolour
                            <ul>
                                <li>Duration: 9 weeks</li>
                                <li>Commencement Date: 27th May 2024</li>
                                <li>Price: $245</li>
                            </ul>
                        </li>
                        <li>
                            4.Acrylics
                            <ul>
                                <li>Duration: 9 weeks</li>
                                <li>Commencement Date: 5th August 2024</li>
                                <li>Price: $265</li>
                            </ul>
                        </li>
                        <li>
                            5.Water-based Oil Painting
                            <ul>
                                <li>Duration: 9 weeks</li>
                                <li>Commencement Date: 14th October 2024</li>
                                <li>Price: $265</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Enrolment Process</h4>
                    <p>
                        To enrol in any of our art classes, please contact us
                        at:
                    </p>
                    <p>Phone: 03 5334 1217</p>
                    <p>Email: sturtgalley@post.com</p>
                    <p>
                        We look forward to helping you unleash your creativity!
                    </p>
                    <h4>Note: </h4>
                    <p>
                        Each class provides supplies that will be kept by
                        students at the end of the program.
                    </p>
                </p>
            </div>
            <div className={styles.aboutUs}>
                <h3>About us</h3>
                <p>
                    At Sturt Street Gallery, we are passionate about fostering
                    creativity and artistic expression in individuals of all
                    ages. With a rich history of providing high-quality art
                    classes, we have established ourselves as a premier
                    institution for art education.
                </p>
                <h4>Our Story</h4>
                <p>
                    For years, we have been dedicated to helping individuals
                    unlock their full potential through the power of art. Our
                    journey began with a simple yet powerful idea: to create a
                    space where people could come together to learn, grow, and
                    express themselves creatively. Today, we take pride in being
                    a hub for artistic exploration, innovation, and community
                    building.
                </p>
                <h4>Our Philosophy</h4>
                <p>
                    We believe that art is a powerful tool for personal growth,
                    self-expression, and social connection. Our philosophy is
                    centered around the idea that everyone has the potential to
                    create something remarkable, regardless of their age, skill
                    level, or background. We strive to provide a supportive and
                    inspiring environment that encourages our students to take
                    risks, experiment with new techniques, and push the
                    boundaries of their creativity.
                </p>
            </div>
        </div>
    );
}
