'use client';

import Image from 'next/image';
import { FunctionComponent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductInCartType } from '@/types/types';

import typography from '@/styles/typography.module.scss';
import stylesCheckout from '@/styles/checkout.module.scss';

type CheckoutFormProps = {
  cart: ProductInCartType[];
  isCashPay: boolean;
  cashPayToggler: () => void;
  orderStateToggler: () => void;
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: 'eMoney' | 'cash',
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

const CheckoutForm: FunctionComponent<CheckoutFormProps> = (props) => {
  const {cart, isCashPay, cashPayToggler, orderStateToggler} = props;
  const orderedProducts = cart.map(({name, quantity}) => ({name, quantity}));
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: 'eMoney',
      eMoneyNumber: '',
      eMoneyPin: '',
    },
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
      .then(() => orderStateToggler())
      .catch(error => alert(error));
  }

  return (
    <section className={`borderRadius ${stylesCheckout.whiteSection}`}>
      <h1 className={`${typography.mediumHeader} ${typography.boldText} ${stylesCheckout.marginBottom32}`}>checkout</h1>
      <form id='checkoutForm' onSubmit={handleSubmit(onSubmit)}>
        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${stylesCheckout.marginBottom16}`}>
          billing details
        </h4>
        <div className={stylesCheckout.gridWrapper}>
          <div className={stylesCheckout.labelInputWrapper}>
            <label 
              htmlFor='name' 
              className={`${typography.bold12px} ${errors.name && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}`}
            >
              Name
            </label>
            <input 
              id='name' type='text' placeholder='Enter your full name' 
              className={`borderRadius ${stylesCheckout.formInput} ${errors.name && stylesCheckout.errorInput}`}
              {...register('name', {required: true})}
            />
          </div>
          <div className={stylesCheckout.labelInputWrapper}>
            <label 
              htmlFor='email' 
              className={`
                ${typography.bold12px} 
                ${(errors.email && errors.email.type === 'pattern') && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLabelFormat}`}
                ${(errors.email && errors.email.type === 'required') && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}
              `}
            >
              Email address
            </label>
            <input 
              id='email' type='email' placeholder='Enter your email' 
              className={`borderRadius ${stylesCheckout.formInput} ${errors.email && stylesCheckout.errorInput}`}
              {...register('email', {required: true, pattern: /^\w{1,}\@{1}[a-z]{1,}\.[a-z]{1,}$/})}
            />
          </div>
          <div className={stylesCheckout.labelInputWrapper}>
            <label 
              htmlFor='phone' 
              className={`
              ${typography.bold12px} 
              ${(errors.phone && errors.phone.type === 'pattern') && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLabelFormat}`}
              ${(errors.phone && errors.phone.type === 'required') && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}
            `}
            >
              Phone number
            </label>
            <input 
              id='phone' type='tel' placeholder='e.g.: +1 123-456-7890' 
              className={`borderRadius ${stylesCheckout.formInput} ${errors.phone && stylesCheckout.errorInput}`}
              {...register('phone', {required: true, pattern: /^\+[0-9]{1,} [0-9]{3}-[0-9]{3}-[0-9]{4}$/})}
            />
          </div>
        </div>

        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${stylesCheckout.marginBottom16}`}>
          shipping info
        </h4>
        <div className={stylesCheckout.gridWrapper}>
          <div className={`${stylesCheckout.labelInputWrapper} ${stylesCheckout.gridInnerFullWidth}`}>
            <label 
              htmlFor='address' 
              className={`${typography.bold12px} ${errors.address && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}`}
            >
              Your Address
            </label>
            <input 
              id='address' type='text' placeholder='Enter your address' 
              className={`borderRadius ${stylesCheckout.formInput} ${errors.address && stylesCheckout.errorInput}`}
              {...register('address', {required: true})}
            />
          </div>
          <div className={stylesCheckout.labelInputWrapper}>
            <label 
              htmlFor='zipCode' 
              className={`${typography.bold12px} ${errors.zipCode && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}`}
            >
              ZIP Code
            </label>
            <input 
              id='zipCode' type='number' placeholder='Enter your ZIP code' 
              className={`borderRadius ${stylesCheckout.formInput} ${errors.zipCode && stylesCheckout.errorInput}`}
              {...register('zipCode', {required: true})}
            />
          </div>
          <div className={stylesCheckout.labelInputWrapper}>
            <label 
              htmlFor='city' 
              className={`${typography.bold12px} ${errors.city && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}`}
            >
              City
            </label>
            <input 
              id='city' type='text' placeholder='Enter your city' 
              className={`borderRadius ${stylesCheckout.formInput} ${errors.city && stylesCheckout.errorInput}`}
              {...register('city', {required: true})}
            />
          </div>
          <div className={stylesCheckout.labelInputWrapper}>
            <label 
              htmlFor='country' 
              className={`${typography.bold12px} ${errors.country && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}`}
            >
              Country
            </label>
            <input 
              id='country' type='text' placeholder='Enter your country'  
              className={`borderRadius ${stylesCheckout.formInput} ${errors.country && stylesCheckout.errorInput}`}
              {...register('country', {required: true})}
            />
          </div>
        </div>

        <h4 className={`${typography.upperCaseBold13px} ${typography.highlightText} ${stylesCheckout.marginBottom16}`}>
          payment details
        </h4>
        <div className={stylesCheckout.gridWrapper}>
          <p className={`${typography.bold12px} ${stylesCheckout.marginBottom16}`}>Payment Method</p>
          <div>
            <input 
              id='eMoney' type='radio' className={stylesCheckout.inputRadio}
              {...register('paymentMethod', {required: true, onChange: cashPayToggler})} 
              value='eMoney' 
            />
            <div className={`borderRadius ${stylesCheckout.inputRadioWrapper}`}>
              <label htmlFor='eMoney' className={`${typography.bold12px} ${stylesCheckout.inputRadioLabel}`}>
                e-Money
              </label>
            </div>
            <input 
              id='cash' type='radio' className={stylesCheckout.inputRadio} 
              {...register('paymentMethod', {required: true, onChange: cashPayToggler})} 
              value='cash'
            />
            <div className={`borderRadius ${stylesCheckout.inputRadioWrapper}`}>
              <label htmlFor='cash' className={`${typography.bold12px} ${stylesCheckout.inputRadioLabel}`}>
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        {
          isCashPay 
            ? <div className={stylesCheckout.flexContainer}>
                <Image src='/assets/icons/checkout/icon-cash-on-delivery.svg' width={48} height={48} alt='' />
                <p className={typography.baseText}>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery 
                  courier arrives at your residence. Just make sure your address is correct so that your 
                  order will not be cancelled.
                </p>
              </div>
            : <div className={stylesCheckout.gridWrapper}>
                <div className={stylesCheckout.labelInputWrapper}>
                  <label 
                    htmlFor='eMoneyNumber' 
                    className={`${typography.bold12px} ${errors.eMoneyNumber && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}`}
                  >
                    e-Money Number
                  </label>
                  <input 
                    id='eMoneyNumber' type='number' placeholder='Enter e-Money Number' 
                    className={`borderRadius ${stylesCheckout.formInput} ${errors.eMoneyNumber && stylesCheckout.errorInput}`}
                    {...register('eMoneyNumber', {required: true})}
                  />
                </div>
                <div className={stylesCheckout.labelInputWrapper}>
                  <label 
                    htmlFor='eMoneyPin' 
                    className={`${typography.bold12px} ${errors.eMoneyPin && `${stylesCheckout.errorLabel} ${stylesCheckout.errorLaberEmpty}`}`}
                  >
                    e-Money PIN
                  </label>
                  <input 
                    id='eMoneyPin' type='number' placeholder='Enter e-Money PIN' 
                    className={`borderRadius ${stylesCheckout.formInput} ${errors.eMoneyPin && stylesCheckout.errorInput}`}
                    {...register('eMoneyPin', {required: true})}
                  />
                </div>
              </div> 
        }
      </form>
    </section>
  );
};

export default CheckoutForm;
