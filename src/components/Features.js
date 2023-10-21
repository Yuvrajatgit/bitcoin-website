import React, {useState, useEffect} from 'react';
import './Features.css';
import axios from 'axios';
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'

function Features() {
  
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(()=>{
    const api = 'CG-nfroUo8xvzLbvqxN5C6dy94R'
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${api}`;
    const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setData(json);
        } catch (error) {
          console.log("error", error);
          setError(error);
        }
      };
  
      fetchData();
  },[])

  return (
    <div className='featured'>
      <div className='container'>
        <div className='leftFeatured'>
           <h2>
            Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin
           </h2>
           <p>See all available assets: Cryptocurrencies and NFT's</p>
           <button className='btn'>See More Coins</button>
        </div>

        <div className='rightFeatured'>
        {data?.map(el => (
            <div key={el.id} className='card'>
            <div className='top'>
             <img src={el.image} alt={el.name}/>
            </div>
            <div>
             <h5>{el.name}</h5>
             <p>₹{el.current_price.toLocaleString()}</p>
            </div>
            {el.price_change_percentage_24h < 0 ? (
                <span className='red'>
                    <FiArrowDown className='icon'/>
                    {el.price_change_percentage_24h.toFixed(2)}%
                </span>
            ) : (
                <span className='green'>
                    <FiArrowUpRight className='icon'/>
                    {el.price_change_percentage_24h.toFixed(2)}%
                </span>
            )}
         </div>
        ))}
       </div>
      </div>
    </div>
  )
}

export default Features;
