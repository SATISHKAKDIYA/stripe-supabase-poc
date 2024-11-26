'use client';

import FormDetails from "@/components/form-details";
import StripeForm from "@/components/stripe-form";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const formDetailsValidationSchema = Yup.object({
  promotionCode: Yup.string().min(5, 'Promotion code must be at least 5 characters').optional(),
});

const stripeFormValidationSchema = Yup.object({
  email: Yup.string().required('Email name is required'),
  cardInfo: Yup.string().min(2, 'Card number must be at least 2 characters').required('Card information is required'),
  cardHolderName: Yup.string().required('Cardholder name is required'),
  expirationDate: Yup.string().required('Expiration date is required'),
  cvc: Yup.string().required('CVC is required'),
});

export default function Home() {
  const formDetailsFormik = useFormik({
    initialValues: {
      promotionCode: '',
    },
    validationSchema: formDetailsValidationSchema,
    onSubmit: (values) => {
      console.log("FormDetails Submitted:", values);
    },
  });

  const stripeFormFormik = useFormik({
    initialValues: {
      email: '',
      cardInfo: '',
      cardHolderName: '',
      expirationDate: '',
      cvc: '',
    },
    validationSchema: stripeFormValidationSchema,
    onSubmit: (values) => {
      console.log("StripeForm Submitted:", values);
    },
  });

  return (
    <div className="flex flex-col w-full h-full lg:flex-row">
      <div className="flex flex-col w-[100%] lg:w-[50%]">
        <FormDetails formik={formDetailsFormik} />
      </div>
      <div className="flex flex-col w-[100%] lg:w-[50%]">
        <StripeForm formik={stripeFormFormik} />
      </div>
    </div>
  );
}
