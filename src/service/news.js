const news_url = 'http://newsapi.org/v2/top-headlines';
const countryCode  = 'au';
const apiKey = '11ea89dce76e41c189cd067090ad4e12';

//Get news
export async function getNews(category='general'){
    let news = await fetch(`${news_url}?country=${countryCode
 }&category=${category}`,{
        headers:{
            'X-API-KEY':apiKey
        }
    });

    let result = await news.json();
    news = null;
    return result.articles
}