'use client';

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormikProps } from "formik";

interface FormValues {
  promotionCode: string;
}

interface FormDetailsProps {
  formik: FormikProps<FormValues>;
}

export default function FormDetails({ formik }: FormDetailsProps) {
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  const [isPromotionCodeVisible, setIsPromotionCodeVisible] = useState(false);

  const handleAddPromotionCodeClick = () => {
    setIsPromotionCodeVisible(true);
  };

  const handleBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsPromotionCodeVisible(false);
    }
  };

  return (
    <div className="flex w-full h-full lg:h-screen justify-center lg:justify-end bg-[#02101E] py-12 p-4 lg:pr-20">
      <div className="flex flex-col w-[100%] md:w-[60%]">
        <div className="mt-8 mb-4">
          <p className="text-[16px] text-gray-400 font-semibold">
            Subscribe to Professional
          </p>
          <div className="flex items-center gap-2">
            <p className="text-white text-[35px] font-semibold">
              $10.00
            </p>
            <span className="text-[13px] text-gray-400">per<br />month</span>
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between">
            <p className="text-white">Professional</p>
            <p className="text-white">$10.00</p>
          </div>
          <p className="text-[#FFFFFF80] text-[12px]">Billed monthly</p>
          <div className="my-3 border border-gray-800"></div>
          <div className="flex w-full justify-between">
            <p className="text-white">Subtotal</p>
            <p className="text-white">$10.00</p>
          </div>
          <div className="flex w-full justify-between items-center mt-3 relative">
            {!isPromotionCodeVisible
              ? <Button
                className="text-white bg-[#161b20] hover:bg-[#161b20]"
                onClick={() => handleAddPromotionCodeClick()}
              >
                Add promotion code
              </Button>
              : (
                <div className="flex w-full items-center relative">
                  <Input
                    type="text"
                    name="promotionCode"
                    value={values.promotionCode}
                    onChange={handleChange}
                    onBlur={handleBlurInput}
                    className="bg-white border-[4px] w-full h-10 rounded-l-md border-gray-600 relative"
                    placeholder="Add promotion code"
                  />
                  {values.promotionCode && (
                    <button
                      type="button"
                      className="text-blue-600 text-[15px] font-medium bg-transparent ml-2 rounded-r-md h-10 absolute right-2"
                      onClick={() => handleSubmit()}
                    >
                      Apply
                    </button>
                  )}
                </div>
              )
            }
            {errors.promotionCode && touched.promotionCode && (
              <div className="absolute -bottom-5 text-red-500 text-[13px]">{errors.promotionCode}</div>
            )}
          </div>
          <div className="my-6 border border-gray-800"></div>
          <div className="flex w-full justify-between">
            <p className="text-white">Total due today</p>
            <p className="text-white">$10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}