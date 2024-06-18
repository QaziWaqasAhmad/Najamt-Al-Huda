import React from 'react'
import TextFeilds from './TextFeilds'
import Buttons from './Buttons'

const PaymentMethod = () => {
  return (
    <>
      <div className="steps-head text-center p-2 mt-4">
      <span className='fw-bold'>Payment Method</span>
      </div>
      <div className="payment-form mt-4">
       <div className="container">
        <div className="row">
            <div className="col-md-6">
            <TextFeilds
           id='user-name'
           type='text'
           label='User Name'
           className='username w-100'
           name='username'
        />
            </div>
            <div className="col-md-6">
            <TextFeilds
           id='cardNumber'
           type='text'
           label='Card Number'
           className='cardNumber w-100'
           name='cardNumber'
        />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <TextFeilds
           id='expirayDate'
           type='text'
           label='Expiration Date'
           className='expiry w-100'
           name='expiry'
        />
            </div>
            <div className="col-md-6">
            <TextFeilds
           id='cvv'
           type='text'
           label='CVV'
           className='cvv w-100'
           name='cvv'
        />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <TextFeilds
           id='country'
           type='text'
           label='Country'
           className='country w-100'
           name='country'
        />
            </div>
            <div className="col-md-6">
            <TextFeilds
           id='zip'
           type='text'
           label='Zip'
           className='zip w-100'
           name='zip'
        />
            </div>
        </div>
        <Buttons
        name='Pay Now'
        className='w-100'
        />
       </div>
      </div>
    </>
  )
}

export default PaymentMethod