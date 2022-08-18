import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    

    constructor(){
        super();
        
        this.state={
            articles:[],
            loading:false,
            page:1
            
        }
    }

    async componentDidMount(){
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f7b840bb5cd444e9b791b3906bd39a4&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();

        // console.log(parsedData);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
    
    handlePrevClick=async()=>{
        console.log('Previous');
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f7b840bb5cd444e9b791b3906bd39a4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json();

        // console.log(parsedData);
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
    }

    handleNextClick=async()=>{
        console.log('Next');
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }else{
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f7b840bb5cd444e9b791b3906bd39a4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data=await fetch(url);
            let parsedData=await data.json();
    
            // console.log(parsedData);
            this.setState({
                page:this.state.page+1,
                articles:parsedData.articles
            })
        }
 
        
    }

  render() {
    
    return (
      <div className='container my-3'>

        <center><h2 className='my-3'>News Monkey- Top Headlines</h2></center>
        <Spinner/>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3 mx-4 my-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&#8592; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
        </div>
      </div>
    )
  }
}

export default News