import { RightOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";

import { CompactSearch } from "@/components/compactSearch";
import { Header } from "@/components/header";
import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

export default function Result() {
    return (
        <div className={styles.contentWrapper}>
            <Header theme="light" />
            <CompactSearch />
            <div className={styles.floatButton}>
                <Button type="primary">
                    <EnvironmentOutlined />
                    Map View
                </Button>
            </div>

            <div className={styles.searchResultWrapper}>
                <ul>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                    <li className={styles.searchResult}>
                        <div className={styles.infoWrapper}>
                            <h2>Rio Dance Studio</h2>
                            <span className={styles.ratingLabel}>5.0</span>
                            <Rate
                                disabled
                                value={5}
                                className={styles.rating}
                            />
                            <p className={styles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                        <RightOutlined className={styles.chevron} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
