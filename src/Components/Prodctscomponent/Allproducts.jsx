import React, { useState } from 'react';
import { useQuery } from 'react-query';
import './allproducts.css'; // Import your CSS file
import { Grid } from '@mui/material';

function Allproducts() {
    const baseUrl = 'https://portal.umall.in/';
    const [showAll, setShowAll] = useState(false); // State to control whether to show all products or not

    // Fetching product data
    const fetchProductData = async () => {
        const response = await fetch('https://portal.umall.in/api/popular_products?shopid=15&userid=652', {
            method: 'POST', // Use POST method
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}), // Empty body as no additional data is needed for this request
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    };

    // React Query to fetch data
    const { isLoading, isError, data, error } = useQuery('productData', fetchProductData);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    // Extract product information from the data object
    const products = data?.popularproducts.data || [];
    console.log(products);

    // Exclude first 5 images
    const filteredProducts = showAll ? products.slice(5) : products.slice(5, 9);

    return (
        <Grid container justifyContent="center" className="products-container">
            <Grid item xs={12} sm={10} md={8} lg={11}>
                <div className="allproducts">
                    <div className="allproductsheads">
                        <p className='popularhead'> Popular Products</p>
                        <p className='popularc2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            accusamus nobis quidem. Quisquam laboriosam tempore amet eum nulla
                            ullam dolores! Perferendis blanditiis beatae molestias. Blanditiis
                            consequatur odit labore molestias suscipit.
                        </p>
                        <div className="category"></div>
                    </div>
                    <Grid container spacing={10}>
                        {/* Map through the filtered products array and render each product */}
                        {filteredProducts.map((product) => (
                            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                                <div className="cardsingle">
                                    <div
                                        className="card-image"
                                        style={{
                                            backgroundImage: `url('${baseUrl}${product.image}')`, // Concatenate base URL with image path
                                        }}
                                    />
                                    <div className="card-detailscard-details">
                                        <p className='productname'>{product.name}</p>
                                        <p className='desc'>{product.desc} </p>
                                        <div>     <p className='offer'>Offer price: {product.offerprice}</p>
                                        <p className='actual'>Price: {product.price}</p></div>
                                   
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    {/* Button to toggle showAll state */}
                    {!showAll && (
                        <div className="view-all-button">
                           <button  onClick={() => setShowAll(true)} className='custom'>Showmore</button>
                        </div>
                    )}
                </div>
            </Grid>
        </Grid>
    );
}

export default Allproducts;
