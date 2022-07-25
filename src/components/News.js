import React, { Component } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  //  articles = [

  //  ]
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  CapitalizefirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title = `${this.CapitalizefirstLetter(this.props.category)}- NewsApp`
  }
  // async updateNews(){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=737b93ca9f004a969438da8b0eab5be2&page=${this.setState.page}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   this.setState({
  //     articles: parseddata.articles,
  //     totalResults: parseddata.totalResults,
  //   });
  //}
  async componentDidMount() {
    //this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=737b93ca9f004a969438da8b0eab5be2&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    })
    //this.props.setProgress(100)
    //this.updateNews();
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=737b93ca9f004a969438da8b0eab5be2&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    //this.setState({articles: parseddata.articles})
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
      loading: false,
    });
    // this.setState=this.state.page -1;
    // this.updateNews();
  };
  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
        }&category=${this.props.category
        }&apiKey=737b93ca9f004a969438da8b0eab5be2&page=${this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseddata = await data.json();
      //this.setState({articles: parseddata.articles})
      this.setState({
        page: this.state.page + 1,
        articles: parseddata.articles,
        loading: false,
      });
      // this.setState = this.state.page +1 ;
      // this.updateNews();
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '90px' }}>

          NewsApp - Top HeadLines On {this.CapitalizefirstLetter(this.props.category)}.
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>

              );

            })}


          <div>
            <div className="container my-3 d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>

          {/* <div className="col-md-4">
                      <Newsitem title="myTitle" description="myDescription"/>
                    </div>
                    <div className="col-md-4">
                      <Newsitem title="myTitle" description="myDescription"/>
                    </div> */}
        </div>
      </div>
    );
  }
}

export default News;
