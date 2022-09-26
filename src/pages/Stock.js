import React from "react";

const Stock = (props) => {
    // console.log(props.match.params.symbol)
    const matchingStock = props.theseStocks.filter((stock) => stock.symbol === props.match.params.symbol)
    return ( 
    <>
    <h1>{matchingStock[0].name}</h1>
    <h3>Symbol: {matchingStock[0].symbol}</h3>
    <h3>Last Price: {matchingStock[0].lastPrice}</h3>
    <h3>Change: {matchingStock[0].change}</h3>
    <h3>High: {matchingStock[0].high}</h3>
    <h3>Low: {matchingStock[0].low}</h3>
    <h3>Open: {matchingStock[0].open}</h3>
    </>  
    )
}
export default Stock