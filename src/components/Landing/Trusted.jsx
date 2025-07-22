import React, { useEffect, useRef } from 'react'
import UserIcon from '../../assets/User.svg';
import DollarIcon from '../../assets/Doller.svg';
import FileCheckIcon from '../../assets/FileCheck.svg';
import VerifyIcon from '../../assets/VerifyIcon.svg';
import TrophyIcon from '../../assets/TrophyIcon.svg';
import FileIcon from '../../assets/FileIcon.svg';
import TM from '../../assets/logos/3m.svg';
import BS from '../../assets/logos/barstool-store.svg';
import BU from '../../assets/logos/budweiser.svg';
import BZ from '../../assets/logos/buzzfeed.svg';
import FR from '../../assets/logos/forbes.svg';
import MA from '../../assets/logos/macys.svg';
import ME from '../../assets/logos/menshealth.svg';
import MR from '../../assets/logos/mrbeast.svg';
import en from '../../i18/en.json';
import he from '../../i18/he.json';

const statIcons = [
  <img src={UserIcon} alt="User Icon" className="w-[64px] h-[64px]" />,
  <img src={DollarIcon} alt="Dollar Icon" className="w-[64px] h-[64px]" />,
  <img src={FileCheckIcon} alt="File Check Icon" className="w-[64px] h-[64px]" />,
];

const bottomIcons = [
  <img src={VerifyIcon} alt="Verify Icon" className="w-[24px] h-[24px] mr-2" />,
  <img src={TrophyIcon} alt="Trophy Icon" className="w-[24px] h-[24px] mr-2" />,
  <img src={FileIcon} alt="File Icon" className="w-[24px] h-[24px] mr-2" />,
];

function Trusted({ language }) {
  const t = language === 'he' ? he.trusted : en.trusted;
  const logosRef = useRef(null);

  useEffect(() => {
    // Handle left to right section
    if (logosRef.current) {
      const logosContainer = logosRef.current.parentNode;
      const existingCopies = logosContainer.querySelectorAll('.logos-slide-left');
      
      // Keep only the first one (original)
      for (let i = 1; i < existingCopies.length; i++) {
        existingCopies[i].remove();
      }
      
      // Add only one copy
      const copy = logosRef.current.cloneNode(true);
      logosContainer.appendChild(copy);
    }

    // Handle right to left section
    const rightSection = document.querySelector('.logos-slide-right');
    if (rightSection) {
      const logosContainer = rightSection.parentNode;
      const existingCopies = logosContainer.querySelectorAll('.logos-slide-right');
      
      // Keep only the first one (original)
      for (let i = 1; i < existingCopies.length; i++) {
        existingCopies[i].remove();
      }
      
      // Add only one copy
      const copy = rightSection.cloneNode(true);
      logosContainer.appendChild(copy);
    }
  }, []);

  return (
    <div>
      <section className="w-full bg-transparent flex flex-col items-center justify-center md:py-[64px] py-8 md:px-[80px] px-8">
        <div className='flex flex-col items-center justify-center gap-[64px]'>

          <div className='flex flex-col items-center justify-center gap-[16px]'>
            {/* Heading */}
            <h2 className="text-4xl md:text-48 font-extrabold text-customLightTextColor dark:text-white text-center tracking-tight font-testtiemposfine">{t.heading}</h2>
            <p className="text-lg md:text-20 text-customBoldTextColor dark:text-gray-300 text-center font-medium  max-w-[556px]">
              {t.subheading}
            </p>
          </div>


        </div>
      </section>
      <section className="w-full bg-transparent flex flex-col items-center justify-center md:pb-[64px] py-8 ">
      
      {/* Left to Right Section */}
      <div className="logos w-full bg-white flex items-center justify-center">
        <div className="logos-slide-left" ref={logosRef}>
          <img src={TM} alt="3M" />
          <img src={BS} alt="Barstool Store" />
          <img src={BU} alt="Budweiser" />
          <img src={BZ} alt="BuzzFeed" />
          <img src={FR} alt="Forbes" />
          <img src={MA} alt="Macy's" />
          <img src={ME} alt="Men's Health" />
          <img src={MR} alt="Mr Beast" />
        </div>
      </div>

      {/* Right to Left Section */}
      <div className="logos w-full bg-gray-50 flex items-center justify-center">
        <div className="logos-slide-right">
          <img src={MR} alt="Mr Beast" />
          <img src={ME} alt="Men's Health" />
          <img src={MA} alt="Macy's" />
          <img src={FR} alt="Forbes" />
          <img src={BZ} alt="BuzzFeed" />
          <img src={BU} alt="Budweiser" />
          <img src={BS} alt="Barstool Store" />
          <img src={TM} alt="3M" />
        </div>
      </div>
      </section>
    </div>
  )
}

export default Trusted
