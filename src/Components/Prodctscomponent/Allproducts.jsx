import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './allproducts.css'; // Import your CSS file
import { Grid } from '@mui/material';

function Allproducts() {
    const baseUrl = 'https://portal.umall.in/';
    const navigate = useNavigate(); // Initialize useNavigate hook
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

    // Show only the first 4 images if showAll state is false
    const filteredProducts = showAll ? products : products.slice(5, 11);

    // Function to handle navigation to another page
    const handleShowAll = () => {
        navigate('/allpopular', { state: { products: data } });
    };

    const truncateText = (text) => {
        const words = text.split(' ');
        if (words.length > 4) {
            return words.slice(0, 2).join(' ') ;
        }
        return text;
    };

    return (
        <Grid container className="products-container">
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="allproducts">
                    <div className="allproductsheads">
                        <p className='latesthead'> Latest Products</p> {/* Change text to "Latest Products" */}
                        <p className='latestc2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                            accusamus nobis quidem. Quisquam laboriosam tempore amet eum nulla
                            ullam dolores! Perferendis blanditiis beatae molestias. Blanditiis
                            consequatur odit labore molestias suscipit.
                        </p>
                        <div className="category"></div>
                    </div>
                    <Grid container spacing={1}>
                        {/* Map through the filtered products array and render each product */}
                        {filteredProducts.map((product) => (
                            <Grid key={product.id} item xs={4} sm={4} md={4} lg={2}>
                                <div className="cardsingle">
                                    <div
                                        className="card-image"
                                        style={{
                                            backgroundImage: `url('${baseUrl}${product.image}')`, // Concatenate base URL with image path
                                        }}
                                    />
                                    <div className="card-details">
                                        <p className='productname'>{truncateText(product.name)}</p>
                                        <p className='desc'>{truncateText(product.desc)}</p>
                                        <div>     
                                            <p className='offer'>Offer price: {product.offerprice}</p>
                                            <p className='actual'>Price: {product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    {/* Button to toggle showAll state */}
                    {!showAll && (
                        <div className="view-all-button">
                           <button onClick={handleShowAll} className='custom'>Show more</button>
                        </div>
                    )}
                </div>
            </Grid>
        </Grid>
    );
}

export default Allproducts;
