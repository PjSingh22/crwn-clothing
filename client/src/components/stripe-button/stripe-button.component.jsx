import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kLPwfkuRW94pMbpr6NNQ50Rw00JVV45eCY';

const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
    .then(response => {
      alert('Payment Successful! Thank you for your purchase, expect your item to be delivered never :D');
    })
    .catch(error => {
      console.log('Payment error ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure to use the provided credit card credentials.');
    });
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Co.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey} 
    />
  )
};

export default StripeCheckoutButton;