import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kLPwfkuRW94pMbpr6NNQ50Rw00JVV45eCY';

const onToken = token => {
    console.log(token);
    alert('Payment successful! Thank you for your purchase! Expect to recieve your purchase never :D');
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