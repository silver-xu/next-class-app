import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search.scss";

export const Search = () => (
    <div className="site-banner">
        <div className="container">
            <div className="site-banner__content">
                <h1 className="site-banner__title">
                    Explore free trial classes
                </h1>
                <div className="site-banner__search layout-02">
                    <div className="field-input">
                        <label>Find</label>
                        <input
                            className="site-banner__search__input open-suggestion"
                            id="s"
                            type="text"
                            name="s"
                            placeholder="A class on your mind"
                            autoComplete="off"
                        />
                    </div>
                    <div className="field-input">
                        <label>Where</label>
                        <input
                            className="site-banner__search__input open-suggestion"
                            id="loca"
                            type="text"
                            name="where"
                            placeholder="Your city"
                            autoComplete="off"
                        />
                    </div>
                    <div className="field-submit">
                        <button>
                            <FontAwesomeIcon icon={faSearch} width={16} />
                        </button>
                    </div>
                </div>
                <p className="site-banner__meta">
                    <span>Popular:</span>
                    <a title="Melbourne" href="city-details-1.html">
                        Melbourne
                    </a>
                    <a title="Sydney" href="city-details-1.html">
                        Sydney
                    </a>
                    <a title="Brisbane" href="city-details-1.html">
                        Brisbane
                    </a>
                </p>
            </div>
        </div>
    </div>
);
