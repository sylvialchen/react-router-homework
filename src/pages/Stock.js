import React from "react";

const Stock = (props) => {
    // console.log(props.match.params.symbol)
    const matchingStock = props.theseStocks.filter((stock) => stock.symbol === props.match.params.symbol)[0]
    return ( 
    <>
    <h1>{matchingStock.name}</h1>
    <h3>Symbol: {matchingStock.symbol}</h3>
    <h3>Last Price: {matchingStock.lastPrice}</h3>
    <h3>Change: {matchingStock.change}</h3>
    <h3>High: {matchingStock.high}</h3>
    <h3>Low: {matchingStock.low}</h3>
    <h3>Open: {matchingStock.open}</h3>
    </>  
    )
}
export default Stock