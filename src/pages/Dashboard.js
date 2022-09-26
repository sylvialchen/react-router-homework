import React from "react";
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
    // console.log(props.theseStocks)
    let allStocks = props.theseStocks.map((stock, index) => {
        return (
        <tr key={index}>
        <td><Link to={`/stocks/${stock.symbol}`}>
            {stock.name}</Link></td>
        <td>${stock.lastPrice}</td>
        <td>{stock.change}</td>
        </tr>)})

    return <><table><tbody><tr>
        <th>Company Name</th>
        <th>Price</th> 
        <th>Change</th></tr>
        {allStocks}
        </tbody></table></>
} 
export default Dashboard