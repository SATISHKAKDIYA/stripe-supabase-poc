'use client';

import { FormikProps } from "formik";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { IoCardSharp } from "react-icons/io5";

interface StripeFormValues {
  email: string;
  cardInfo: string;
  cardHolderName: string;
  expirationDate: string;
  cvc: string;
}

interface StripeFormProps {
  formik: FormikProps<StripeFormValues>;
}

export default function StripeForm({ formik }: StripeFormProps) {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.slice(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    formik.setFieldValue('cardInfo', value);
  };

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
    }
    formik.setFieldValue('expirationDate', value);
  };

  return (
    <div className="flex flex-start justify-center lg:justify-start w-full h-full py-12 bg-white p-4 lg:pl-20">
      <div className="flex flex-col w-[100%] md:w-[60%]">
        <div>
          <Label className="text-[#1A1A1AB2] text-[13px] font-semibold">
            Email
          </Label>
          <Input
            className="h-11"
            type="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>
        <h3 className="text-[15px] font-semibold text-[#1A1A1AE6] mt-[12px] py-2">
          Payment method
        </h3>
        <div className="flex flex-col border border-gray-200 rounded-md p-4">
          <div className="flex gap-3 items-center pb-3">
            <IoCardSharp />
            <h4 className="text-[15px] font-semibold">Card</h4>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Label className="text-[#1A1A1AB2] text-[13px] font-semibold">
                Card information
              </Label>
              <Input
                name="cardInfo"
                type="text"
                value={values.cardInfo}
                onChange={handleCardInfoChange}
                onBlur={handleBlur}
                className="flex rounded-t-md rounded-b-none"
                placeholder="1234 1234 1234 1234"
              />
              <div className="flex">
                <Input
                  name="expirationDate"
                  value={values.expirationDate}
                  onChange={handleExpirationDateChange}
                  onBlur={handleBlur}
                  type="text"
                  className={`flex rounded-bl-md rounded-t-none rounded-br-none
                    ${errors.expirationDate && touched.expirationDate ? 'border-red-500 border-t-1 border-t-red-500' : 'border-t-0 '}
                    `}
                  placeholder="MM / YY"
                />
                <Input
                  name="cvc"
                  value={values.cvc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  className={`flex rounded-br-md rounded-t-none rounded-bl-none border-l-0
                      ${errors.cvc && touched.cvc ? 'border-red-500 border-t-1 border-l-1 border-t-red-500' : 'border-t-0'}
                    `}
                  placeholder="CVC"
                />
              </div>
              {errors.cardInfo && touched.cardInfo && (
                <div className="text-red-500 text-[13px]">{errors.cardInfo}</div>
              )}
            </div>
            <div>
              <Label className="text-[#1A1A1AB2] text-[13px] font-semibold">
                Cardholder name
              </Label>
              <Input
                name="cardHolderName"
                type="text"
                value={values.cardHolderName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="flex rounded-t-md"
                placeholder="Full name on card"
              />
              {errors.cardHolderName && touched.cardHolderName && (
                <div className="text-red-500 text-[13px]">{errors.cardHolderName}</div>
              )}
            </div>
          </div>
        </div>
        <Button
          className="mt-5 bg-[#0074D4] text-white font-medium hover:bg-[#0074D4]"
          onClick={() => handleSubmit()}
        >
          Subscribe
        </Button>
      </div>
    </div>
  )
};