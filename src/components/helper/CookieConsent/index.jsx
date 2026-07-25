import { getCookie, setCookie } from "cookies-next/client";
import { useEffect, useState } from "react";

const COOKIE_NAME = "favick-cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedPreference = getCookie(COOKIE_NAME);
    setIsVisible(!savedPreference);
  }, []);

  const handleConsent = (value) => {
    setCookie(COOKIE_NAME, value, {
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      path: "/",
    });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  
  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-[28px] border border-[#d7cfbf] bg-[#fffaf0] p-5 text-[#2a2218] shadow-[0_20px_60px_rgba(33,24,12,0.18)] sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div className="max-w-3xl">
          <p className="playfair text-xl text-[#4f3921] sm:text-2xl">Cookies on Favick Clinic</p>
          <p className="monte mt-2 text-sm leading-6 text-[#5f5141] sm:text-[15px]">
            We use cookies to remember your preference and keep the site working smoothly. You can accept or reject non-essential cookies, and we will store your choice for a while.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:min-w-[260px] sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => handleConsent("rejected")}
            className="monte rounded-full border border-[#8a7656] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5f4a2f] transition hover:border-[#5f4a2f] hover:text-[#3d2e1c]"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => handleConsent("accepted")}
            className="monte rounded-full bg-[#0d1b34] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#16294b]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}