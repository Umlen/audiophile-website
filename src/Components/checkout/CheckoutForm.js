'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';

import typography from '@/styles/typography.module.scss';
import checkout from '@/styles/checkout.module.scss';

function CheckoutForm(props) {
  const orderedProducts = props.cartItems && props.cartItems.map(({name, quantity}) => ({name, quantity}));
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: 'eMoney',
    },
    mode: "onSubmit",
  });

  const onSubmit = data => {
    fetch('/api/checkoutForm', {
        method: 'POST', 
        body: JSON.stringify({...data, orderedProducts}),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
      }
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong! Please try again');
        }
        response.json();
      })
      .then(props.orderStateToggler())
      .catch(error => alert(error));
  }

  return (
    <section className={`borderRadius ${checkout.whiteSection}`}>
      <h1 className={`${typography.mediumHeader} ${typography.boldText} ${checkout.marginBottom32}`}>checkout</h1>
      <form id='checkoutForm' onSubmit={handleSubmit(onSubmit)}>
        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${checkout.marginBottom16}`}>
          billing details
        </h4>
        <div className={checkout.gridWrapper}>
          <div className={checkout.labelInputWrapper}>
            <label 
              htmlFor='name' 
              className={`${typography.bold12px} ${errors.name && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}`}
            >
              Name
            </label>
            <input 
              id='name' type='text' placeholder='Enter your full name' 
              className={`borderRadius ${checkout.formInput} ${errors.name && checkout.errorInput}`}
              {...register('name', {required: true})}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label 
              htmlFor='email' 
              className={`
                ${typography.bold12px} 
                ${(errors.email && errors.email.type === 'pattern') && `${checkout.errorLabel} ${checkout.errorLabelFormat}`}
                ${(errors.email && errors.email.type === 'required') && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}
              `}
            >
              Email address
            </label>
            <input 
              id='email' type='email' placeholder='Enter your email' 
              className={`borderRadius ${checkout.formInput} ${errors.email && checkout.errorInput}`}
              {...register('email', {required: true, pattern: /^\w{1,}\@{1}[a-z]{1,}\.[a-z]{1,}$/})}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label 
              htmlFor='phone' 
              className={`
              ${typography.bold12px} 
              ${(errors.phone && errors.phone.type === 'pattern') && `${checkout.errorLabel} ${checkout.errorLabelFormat}`}
              ${(errors.phone && errors.phone.type === 'required') && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}
            `}
            >
              Phone number
            </label>
            <input 
              id='phone' type='tel' placeholder='e.g.: +1 123-456-7890' 
              className={`borderRadius ${checkout.formInput} ${errors.phone && checkout.errorInput}`}
              {...register('phone', {required: true, pattern: /^\+[0-9]{1,} [0-9]{3}-[0-9]{3}-[0-9]{4}$/})}
            />
          </div>
        </div>

        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${checkout.marginBottom16}`}>
          shipping info
        </h4>
        <div className={checkout.gridWrapper}>
          <div className={`${checkout.labelInputWrapper} ${checkout.gridInnerFullWidth}`}>
            <label 
              htmlFor='address' 
              className={`${typography.bold12px} ${errors.address && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}`}
            >
              Your Address
            </label>
            <input 
              id='address' type='text' placeholder='Enter your address' 
              className={`borderRadius ${checkout.formInput} ${errors.address && checkout.errorInput}`}
              {...register('address', {required: true})}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label 
              htmlFor='zipCode' 
              className={`${typography.bold12px} ${errors.zipCode && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}`}
            >
              ZIP Code
            </label>
            <input 
              id='zipCode' type='number' placeholder='Enter your ZIP code' 
              className={`borderRadius ${checkout.formInput} ${errors.zipCode && checkout.errorInput}`}
              {...register('zipCode', {required: true})}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label 
              htmlFor='city' 
              className={`${typography.bold12px} ${errors.city && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}`}
            >
              City
            </label>
            <input 
              id='city' type='text' placeholder='Enter your city' 
              className={`borderRadius ${checkout.formInput} ${errors.city && checkout.errorInput}`}
              {...register('city', {required: true})}
            />
          </div>
          <div className={checkout.labelInputWrapper}>
            <label 
              htmlFor='country' 
              className={`${typography.bold12px} ${errors.country && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}`}
            >
              Country
            </label>
            <input 
              id='country' type='text' placeholder='Enter your country'  
              className={`borderRadius ${checkout.formInput} ${errors.country && checkout.errorInput}`}
              {...register('country', {required: true})}
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
              {...register('paymentMethod', {required: true, onChange: props.cashPayToggler})} 
              value='eMoney' 
            />
            <div className={`borderRadius ${checkout.inputRadioWrapper}`}>
              <label htmlFor='eMoney' className={`${typography.bold12px} ${checkout.inputRadioLabel}`}>
                e-Money
              </label>
            </div>
            <input 
              id='cash' type='radio' className={checkout.inputRadio} 
              {...register('paymentMethod', {required: true, onChange: props.cashPayToggler})} 
              value='cash'
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
                <label 
                  htmlFor='eMoneyNumber' 
                  className={`${typography.bold12px} ${errors.eMoneyNumber && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}`}
                >
                  e-Money Number
                </label>
                <input 
                  id='eMoneyNumber' type='number' placeholder='Enter e-Money Number' 
                  className={`borderRadius ${checkout.formInput} ${errors.eMoneyNumber && checkout.errorInput}`}
                  {...register('eMoneyNumber', {required: true})}
                />
              </div>
              <div className={checkout.labelInputWrapper}>
                <label 
                  htmlFor='eMoneyPin' 
                  className={`${typography.bold12px} ${errors.eMoneyPin && `${checkout.errorLabel} ${checkout.errorLaberEmpty}`}`}
                >
                  e-Money PIN
                </label>
                <input 
                  id='eMoneyPin' type='number' placeholder='Enter e-Money PIN' 
                  className={`borderRadius ${checkout.formInput} ${errors.eMoneyPin && checkout.errorInput}`}
                  {...register('eMoneyPin', {required: true})}
                />
              </div>
            </div> 
        }
      </form>
    </section>
  );
}

export default CheckoutForm;