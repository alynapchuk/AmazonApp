import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/I/71SLdCERfXL._SX3000_.jpg'
                    alt='banner' />
                <div className='home_row'>
                    <Product
                        id="001"
                        title='Philodendron Brandtianum'
                        price={59}
                        image='https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Philodendron-Brandtianum-Grow-Pot-Small_871579e3-4b32-42b3-ad5c-c32cc989b2b4_600x600.jpg?v=1628105829'
                        rating={3} />
                    <Product
                        id="002"
                        title='Monstera Deliciosa'
                        price={29}
                        image='https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Monstera-Deliciosa-Grow-Pot-Small_600x600.jpg?v=1646053549'
                        rating={5} />
                </div>
                <div className='home_row'>
                    <Product
                        id="003"
                        title='Alocasia Quilted Dreams'
                        price={59}
                        image='https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Alocasia-Quilted-Dreams-Grow-Pot-Small_600x600.jpg?v=1646149210'
                        rating={4} />
                    <Product
                        id="004"
                        title='Pothos Silver Satin'
                        price={59}
                        image='https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Pothos-Silver-Satin-Grow-Pot-Large_7d58fb49-dfce-44d7-ad44-d4bcf3a35e86_600x600.jpg?v=1645585919'
                        rating={5} />
                    <Product
                        id="005"
                        title='Calathea Rattlesnake'
                        price={27}
                        image='https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Calathea-Rattlesnake-Grow-Pot-Small_30a0728e-e14a-4286-b3e8-dba265e4170c_600x600.jpg?v=1646423898'
                        rating={2} />
                </div>
                <div className='home_row'>
                    <Product
                        id="006"
                        title='Begonia Polka Dot'
                        price={55}
                        image='https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Begonia-maculata-Grow-Pot-Large_600x600.jpg?v=1647806166'
                        rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home