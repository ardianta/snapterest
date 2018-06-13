var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
    getInitialState: function(){
        console.log('[Snaptertest] StreamTweet: 1. Running getInitialState()');

        return{
            numberOfCharactersIsIncresing: null,
            headerText: null
        }
    },

    componenWillReceiveProps: function (nextProps){
        console.log('[Snapterest] StreamTweet: 4. Running componenWillReceiveProps()');

        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        var headerText;

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });

        if( isNumberOfCharactersIncreasing ){
            headerText = "Number of characters is increasing";
        } else {
            headerText = "Latest public photo from Twitter";
        }

        this.setState({
            headerText: headerText
        });

        window.snapterest.numberOfReceivedTweets++;
    },

    shouldComponentUpdate: function (next, nextState) {
        console.log("[snapterest] StreamTweet: 5. Running shouldComponentUpdate()");

        return (nextProps.tweet.text.length > 1);
    },

    compontentWillUpdate: function (nextProps, nextState){
        console.log("[Sanpterest] StreamTweet: 6. Running componentWillUpdate()");
    },

    componentDidUpdate: function (prevProps, prevState){
        console.log("[Snapterest] StreamTweet: 7. Running componentDidUpdate()");

        window.snapterest.numberOfDosplayedTweets++;
    },

    render: function () {
        console.log('[Snaptertest] StreamTweet: Running render()');

        return(
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
            </section>
        );
    }
});

module.exports = StreamTweet;
