const URL = 'https://api.polygon.io';
const APIKey = 'TKVSXdx635Dera7_JxMwbX3fQBc1Q77t';
const ticker = document.querySelector('textarea');

function fetchMarketDetails() {
    // Fetches Current Trading Status of Markets
    fetch(`${URL}/v1/marketstatus/now?apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((marketStatusNow) => {
            console.log(marketStatusNow);
    });
    // Fetches Upcoming Market Holidays
    fetch(`${URL}/v1/marketstatus/upcoming?apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((marketStatusUpcoming) => {
            console.log(marketStatusUpcoming);
    });
};

function fetchTickerDetails() {
    fetch(`${URL}/v3/reference/tickers/ticker=AAPL&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerDetails) => {
            console.log(tickerDetails);
    });
};

function fetchTickerOpenClose() {
    fetch(`${URL}/v1/open-close/AAPL/2023-03-02?adjusted=true&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerOpenClose) => {
            console.log(tickerOpenClose);
    });
};

function fetchTickerPrevClose() {
    fetch(`${URL}/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerOpenClose) => {
            console.log(tickerOpenClose);
    });
};

function fetchDividend(e) {
    e.preventDefault();
    fetch(`${URL}/v3/reference/dividends?ticker=${ticker.value.toUpperCase()}&limit=1000&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerDividend) => {
            console.log(tickerDividend);
    });
};

function fetchStockSplit() {
    fetch(`${URL}/v2/reference/splits?ticker=AAPL&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerSplits) => {
            console.log(tickerSplits);
    });
};

function fetchTickerNews() {
    fetch(`${URL}/v2/reference/news?ticker=AAPL&apiKey=${APIKey}`)
        .then((response) => response.json())
        .then((tickerNews) => {
            console.log(tickerNews);
    });
};

export {fetchMarketDetails, fetchTickerDetails, fetchTickerOpenClose, fetchTickerPrevClose, fetchDividend, fetchStockSplit, fetchTickerNews}