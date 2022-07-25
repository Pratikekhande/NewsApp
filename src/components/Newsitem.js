import React from "react";
//import PropTypes from 'prop-types'

const Newsitem = (props) => {
    // static propTypes = {

    // }

    let { title, description, imageUrl, newsUrl, author, date, source } =
        props;
    return (
        <div className="my-3 shadow-lg p-3 mb-5 bg-body rounded">
            <div className="card " /*style={{width: "18rem"}}*/>
                <span
                    className="position-absolute top-0  translate-middle badge rounded-pill bg-success "
                    style={{ left: "90%", zIndex: 1 }}
                >
                    {source}
                </span>
                <img
                    src={
                        !imageUrl
                            ? "https://images.hindustantimes.com/img/2022/01/02/1600x900/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1641084607931.jpeg"
                            : imageUrl
                    }
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {title}... <span className="badge bg-info text-dark">Latest</span>
                    </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {!author ? "unknown" : author} on{" "}
                            {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <a
                        rel="noreferrer"
                        href={newsUrl}
                        target="_blank"

                        className="btn btn-sm btn-dark"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Newsitem;
