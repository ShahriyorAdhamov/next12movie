const API_KEY= 'e7a166c8e7883a2717600311d8138c6b';

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&languages=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`
    }
}