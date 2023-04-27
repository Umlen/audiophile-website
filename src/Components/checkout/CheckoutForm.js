import { useState } from 'react';
import Image from 'next/image';

import typography from '@/styles/typography.module.scss';
import checkout from '@/styles/checkout.module.scss';

function CheckoutForm(props) {
  const [checkoutInfo, setCheckoutInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'eMoney'
  });

  function handleChange(e) {
    setCheckoutInfo(prevInfo => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value
      }
    });
  }

  return (
    <section className={`borderRadius ${checkout.whiteSection}`}>
      <h1 className={`${typography.mediumHeader} ${typography.boldText} ${checkout.marginBottom32}`}>checkout</h1>
      <form id='checkoutForm' action=''>
        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${checkout.marginBottom16}`}>
          billing details
        </h4>
        <div className={checkout.gridWrapper}>
          <div className={checkout.labelInputWrapper}>
            <label htmlFor='name' className={typography.bold12px}>Name</label>
            <input 
              id='name' type='text' placeholder='Enter your full name' required 
              className={`borderRadius ${checkout.formInput}`}
              value={checkoutInfo.name}
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label htmlFor='email' className={typography.bold12px}>Email address</label>
            <input 
              id='email' type='email' placeholder='Enter your email' required 
              className={`borderRadius ${checkout.formInput}`}
              value={checkoutInfo.email}
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label htmlFor='phone' className={typography.bold12px}>Phone number</label>
            <input 
              id='phone' type='tel' placeholder='e.g.: +1 123-456-7890' required 
              pattern='\+[0-9]{1,} [0-9]{3}-[0-9]{3}-[0-9]{4}'
              className={`borderRadius ${checkout.formInput}`}
              value={checkoutInfo.phone}
              name='phone'
              onChange={handleChange}
            />
          </div>
        </div>

        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${checkout.marginBottom16}`}>
          shipping info
        </h4>
        <div className={checkout.gridWrapper}>
          <div className={`${checkout.labelInputWrapper} ${checkout.gridInnerFullWidth}`}>
            <label htmlFor='address' className={typography.bold12px}>Your Address</label>
            <input 
              id='address' type='text' placeholder='Enter your address' required 
              className={`borderRadius ${checkout.formInput}`}
              value={checkoutInfo.address}
              name='address'
              onChange={handleChange}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label htmlFor='zipCode' className={typography.bold12px}>ZIP Code</label>
            <input 
              id='zipCode' type='number' placeholder='Enter your ZIP code' required 
              className={`borderRadius ${checkout.formInput}`}
              value={checkoutInfo.zipCode}
              name='zipCode'
              onChange={handleChange}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label htmlFor='city' className={typography.bold12px}>City</label>
            <input 
              id='city' type='text' placeholder='Enter your city' required 
              className={`borderRadius ${checkout.formInput}`}
              value={checkoutInfo.city}
              name='city'
              onChange={handleChange}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label htmlFor='country' className={`${typography.bold12px}`}>Country</label>
            <input 
              id='country' type='text' placeholder='Enter your country' required 
              className={`borderRadius ${checkout.formInput}`}
              value={checkoutInfo.country}
              name='country'
              onChange={handleChange}
            />
          </div>
        </div>

        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${checkout.marginBottom16}`}>
          payment details
        </h4>
        <div className={checkout.gridWrapper}>
          <p className={`${typography.bold12px} ${checkout.marginBottom16}`}>Payment Method</p>
          <div>
            <input 
              id='eMoney' type='radio' className={checkout.inputRadio} 
              value='eMoney' 
              name='paymentMethod' 
              checked={checkoutInfo.paymentMethod === 'eMoney'}
              onChange={(e) => {handleChange(e); props.cashPayToggler();}}
            />
            <div className={`borderRadius ${checkout.inputRadioWrapper}`}>
              <label htmlFor='eMoney' className={`${typography.bold12px} ${checkout.inputRadioLabel}`}>
                e-Money
              </label>
            </div>
            <input 
              id='cash' type='radio' className={checkout.inputRadio}
              value='cash' 
              name='paymentMethod'  
              checked={checkoutInfo.paymentMethod === 'cash'}
              onChange={(e) => {handleChange(e); props.cashPayToggler();}}
            />
            <div className={`borderRadius ${checkout.inputRadioWrapper}`}>
              <label htmlFor='cash' className={`${typography.bold12px} ${checkout.inputRadioLabel}`}>
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        {
          props.isCashPay ? 
            <div className={checkout.flexContainer}>
              <Image src='/assets/icons/checkout/icon-cash-on-delivery.svg' width={48} height={48} alt='' />
              <p className={typography.baseText}>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery 
                courier arrives at your residence. Just make sure your address is correct so that your 
                order will not be cancelled.
              </p>
            </div>
          :
            <div className={checkout.gridWrapper}>
              <div className={checkout.labelInputWrapper}>
                <label htmlFor='eMoneyNumber' className={typography.bold12px}>e-Money Number</label>
                <input 
                  id='eMoneyNumber' type='number' placeholder='Enter e-Money Number' required 
                  className={`borderRadius ${checkout.formInput}`}
                />
              </div>
              <div className={checkout.labelInputWrapper}>
                <label htmlFor='eMoneyPin' className={typography.bold12px}>e-Money PIN</label>
                <input 
                  id='eMoneyPin' type='number' placeholder='Enter e-Money PIN' required 
                  className={`borderRadius ${checkout.formInput}`}
                />
              </div>
            </div> 
        }
      </form>
    </section>
  );
}

export default CheckoutForm;