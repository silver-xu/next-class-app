import Image from "next/image";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "@/app/layout";

import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Contact Us",
    description: "nextclass. | Contact Us",
};

export default function Search() {
    return (
        <Layout>
            <div>
                <Header theme="light" />
                <div className={styles.contentWrapper}>
                    <header>
                        <h2>About Us</h2>
                    </header>

                    <section>
                        <h3>Our Mission</h3>
                        <p>
                            At NextClass, our mission is to simplify the process
                            of finding and enrolling in extra-curricular
                            activities for children. We understand the
                            challenges parents face in identifying the right
                            classes that match their child's interests,
                            schedules, and budgets. Our goal is to provide a
                            comprehensive platform that brings all this
                            information together in one place.
                        </p>
                        <Image
                            src="/about-us/violin.jpeg"
                            alt="Violin"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                marginBottom: "20px",
                            }}
                        />
                    </section>
                    <section>
                        <h3>Our Story</h3>
                        <p>
                            NextClass was born out of a personal journey and a
                            deep-seated need to make a difference. As a father
                            of a 5-year-old daughter attending Presbyterian
                            Ladies College, I found myself constantly struggling
                            to find suitable after-school activities for her.
                            The process was not only time-consuming but also
                            incredibly frustrating. Despite living in an age of
                            technological advancements, the search for
                            extra-curricular classes felt archaic, reminiscent
                            of the 1990s.
                        </p>
                        <p>
                            The idea for NextClass came to me during one of
                            those long, arduous searches. I realized that there
                            had to be a better way—a more efficient and
                            user-friendly solution that could help parents like
                            me. I envisioned a platform where all the necessary
                            information about after-school classes could be
                            found in one place, making it easier for parents to
                            make informed decisions about their children's
                            activities.
                        </p>
                        <Image
                            src="/about-us/ballet.jpeg"
                            alt="Ballet dancing"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <p>
                            With this vision in mind, I embarked on the journey
                            to create NextClass. It started as a community
                            project, driven by the desire to help other parents
                            navigate the often overwhelming world of
                            extra-curricular activities. I began by focusing on
                            Arts classes in Victoria, with the aim of expanding
                            the platform's coverage to include a wider range of
                            activities and locations.
                        </p>
                        <p>
                            The journey has not been without its challenges, but
                            the support and feedback from the community have
                            been incredibly encouraging. Each step forward has
                            been fueled by the stories of parents who have found
                            value in NextClass, and the joy of children who have
                            discovered new passions through the classes listed
                            on our platform.
                        </p>
                        <p>
                            Today, NextClass stands as a testament to the power
                            of community-driven solutions. We are committed to
                            continuously growing and enhancing our platform to
                            better serve the needs of parents and children
                            alike. Our story is one of perseverance, innovation,
                            and a deep commitment to making a positive impact on
                            the lives of families.
                        </p>
                        <Image
                            src="/about-us/roller.jpeg"
                            alt="Roller skating"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                marginBottom: "20px",
                            }}
                        />
                    </section>
                    <section>
                        <h3>What We Offer</h3>
                        <p>
                            Currently, NextClass focuses on Arts classes in
                            Victoria, with plans to expand our coverage to
                            include a wider range of activities and locations
                            within the next three months. Our platform allows
                            parents to:
                        </p>
                        <ul>
                            <li>
                                Search for classes based on activity types and
                                locations
                            </li>
                            <li>View detailed class timetables</li>
                            <li>Access contact details for class providers</li>
                            <li>Compare class provider ratings</li>
                        </ul>
                        <p>
                            We are committed to continuously growing and
                            enhancing our platform to better serve the needs of
                            our community.
                        </p>
                    </section>
                    <section>
                        <h3>Our Vision</h3>
                        <p>
                            Our vision is to become the go-to resource for
                            parents seeking extra-curricular activities for
                            their children. By providing a user-friendly and
                            comprehensive platform, we aim to make the process
                            of finding and enrolling in classes as seamless as
                            possible, ultimately helping children discover their
                            passions and interests.
                        </p>
                    </section>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}
