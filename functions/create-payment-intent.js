require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

// Netlify - Serverliess functions: https://docs.netlify.com/functions/overview/
exports.handler = async function (event, context) {
    if (event.body) {
        // Only need cart variable for displaying more complex checkout form
        const { /*cart, */ total_amount, shipping_fee } = JSON.parse(event.body);
        const calculateOrderAmount = () => total_amount + shipping_fee;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: 'usd',
            });
            return {
                statusCode: 200,
                body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ msg: error.message }),
            }
        }
    }

    return {
        statusCode: 200,
        body: 'Create Payment Intent',
    };
};