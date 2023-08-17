import React from "react";
import telegram from "../../assets/images/icons/telegram.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import aparat from "../../assets/images/icons/aparat.svg";
import footerlogo from "../../assets/images/logo/footerlogo.svg";

export default function Footer() {
  return (
    <footer className="relative bg-white w-full h-59 py-8">
      <div className="max-w-6.5xl m-auto">
        <div className="flex justify-between items-center">
          <div className="flex-col">
            <div className="pb-6">
              <p className="text-right text-sm font-normal leading-5">
                لیا را در شبکه‌های اجتماعی دنبال کنید
              </p>
            </div>
            <div className="flex justify-between items-center">
              <img src={instagram} height="24px" alt="logo" />
              <img src={telegram} height="24px" alt="logo" />
              <img src={aparat} height="24px" alt="logo" />
            </div>
          </div>
          <div className="max-w-xxs">
            <p className="text-right text-sm font-normal leading-5">
              تمامی حقوق این وب‌سایت متعلق به شرکت آرمان تدبیر اطلس 1398-1400
              می‌باشد
            </p>
          </div>
          <div className="">
            <img src={footerlogo} height="99px" alt="logo" />
          </div>
        </div>
        <div className="bg-gray-300 w-full border my-5"></div>
        <div className="flex justify-between items-center">
          <p className="text-right text-sm font-normal leading-5">
            شماره واحد بازرسی و نظارت بر واحد بازاریابی شبکه‌ای : 26421289-021 و
            26421197-021
          </p>
          <p className="text-right text-sm font-normal leading-5">
            این شرکت هیچگونه وابستگی به ارگانها و نهادهای دولتی ، غیر دولتی و.
            امنیتی ندارد
          </p>
        </div>
      </div>
    </footer>
  );
}
