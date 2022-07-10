import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles=[{
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Sarfaraz Khan: The 'wandering cricketer' on the road to stardom",
        "description": "Sarfaraz Khan's heavy scoring in domestic cricket has him knocking on the doors of Indian cricket.",
        "url": "https://www.bbc.co.uk/news/world-asia-india-61977063",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4024/production/_125702461_gettyimages-1236953409.jpg",
        "publishedAt": "2022-07-02T23:50:32Z",
        "content": "By Saurabh SomaniSports writer\r\nBefore India's squad for the 2014 Under-19 cricket World Cup left Bangalore, Naushad Khan had come down to the city to meet his son. \r\nSarfaraz Khan had found a spot a… [+5088 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": null,
        "title": "England v India: Jonny Bairstow touching new heights in Ben Stokes era",
        "description": "Jonny Bairstow's stellar form is a product of feeling valued, supported and important in the England team, says chief cricket writer Stephan Shemilt.",
        "url": "https://www.bbc.co.uk/sport/cricket/62030245",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/15832/production/_125741188_gettyimages-1406518240.jpg",
        "publishedAt": "2022-07-03T19:40:11Z",
        "content": "From scrapping to saving his career, to soaring into the form of his - or anyone else's - life.\r\nDuring England's awful Ashes campaign, there was a very real possibility that Jonny Bairstow's Test ca… [+5470 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Yorkshire charged by ECB after investigation into racism claims - Reuters.com",
        "description": "Yorkshire County Cricket Club and a number of individuals have been charged following an investigation into racism claims made by former player Azeem Rafiq, the England and Wales Cricket Board said on Wednesday, without naming the people in question.",
        "url": "https://www.reuters.com/lifestyle/sports/yorkshire-charged-by-ecb-after-investigation-into-racism-claims-2022-06-15/",
        "urlToImage": "https://www.reuters.com/resizer/6WzKyHpnkZoiUZtrIt8aSyzVTi0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RMEG7MPQ4FIVJPBK6CEOX6RGAI.jpg",
        "publishedAt": "2022-06-15T13:28:00Z",
        "content": "June 15 (Reuters) - Yorkshire County Cricket Club and a number of individuals have been charged following an investigation into racism claims made by former player Azeem Rafiq, the England and Wales … [+1947 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "Kyle Barr",
        "title": "Twitter Employees Aren't Going to Disney, But They Will Get a Visit From a Clown Called 'Musk'",
        "description": "Twitter employees singing “when you wish upon a star” seem to have accidentally performed an eldritch rite, and instead of summoning a magical cricket to whisk them away to a land of fun and wonder, employees have summoned the world’s richest billionaire to t…",
        "url": "https://gizmodo.com/twitter-disney-elon-musk-1849070372",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7b7317ddafdce1b81130cc1a6620c6a1.jpg",
        "publishedAt": "2022-06-16T14:35:00Z",
        "content": "Twitter employees singing when you wish upon a star seem to have accidentally performed an eldritch rite, and instead of summoning a magical cricket to whisk them away to a land of fun and wonder, em… [+2265 chars]"
    }]

    constructor(){
        super();
        
        this.state={
            articles:this.articles,
            loading:false
        }
    }

    componentDidMount(){
        
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=1f7b840bb5cd444e9b791b3906bd39a4"
    }

  render() {
    
    return (
      <div className='container my-3'>

        <h2 className='my-3'>News Monkey- Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-3 mx-4 my-4" key={element.url}>
                    <NewsItem title={element.title.slice(0,44)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
        

            })}
        </div>

      </div>
    )
  }
}

export default News