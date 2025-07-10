import { MdOutlineAdd } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import en from "../../i18/en.json";
import he from "../../i18/he.json";

const LandingFooter = ({ language }) => {
    const t = language === "he" ? he.footer : en.footer;
    return (
        <footer className="bg-[#0b0b0b] text-white pt-10 pb-4 px-8 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
                {/* Left: Logo & Description */}
                <div className="flex-1 min-w-[220px]">
                    <div className="flex items-center gap-2 md:gap-4 mb-5">
                        <span className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold icon-button relative group">
                            <MdOutlineAdd className="text-white text-xl md:text-2xl" />
                        </span>
                        <span className={`text-lg md:text-[24px] font-semibold text-white transition-opacity duration-300`}>
                            {t.brandName}
                        </span>
                    </div>
                    <p className="text-gray-500 text-[16px] mb-4">
                        {t.description}
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-pink-400 transition md:w-[24px] w-[24px] md:h-[24px] h-[24px]" /></a>
                        <a href="#" aria-label="LinkedIn"><IoLogoLinkedin className="hover:text-blue-400 transition md:w-[24px] w-[24px] md:h-[24px] h-[24px]" /></a>
                        <a href="#" aria-label="Instagram"><PiInstagramLogoFill className="hover:text-pink-500 transition md:w-[24px] w-[24px] md:h-[24px] h-[24px]" /></a>
                        <a href="#" aria-label="X"><FaXTwitter className="hover:text-gray-300 transition md:w-[24px] w-[24px] md:h-[24px] h-[24px]" /></a>
                    </div>
                </div>

                {/* Center: Product Links */}
                <div className="flex-1 min-w-[180px]">
                    <h4 className="font-semibold mb-3 text-[18px">{t.product}</h4>
                    <ul className="space-y-2 text-gray-500 text-[16px]">
                        {t.productLinks.map((item, idx) => (
                            <li key={idx}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Right: Support Links */}
                <div className="flex-1 min-w-[200px]">
                    <h4 className="font-semibold mb-3 text-[18px">{t.support}</h4>
                    <ul className="space-y-2 text-gray-500 text-[16px]">
                        {t.supportLinks.map((item, idx) => (
                            <li key={idx}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 my-6"></div>

            {/* Bottom: Copyright & Policies */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[16px] text-gray-500 gap-2">
                <div>{t.copyright}</div>
                <div className="flex gap-4">
                    {t.policies.map((item, idx) => (
                        <a key={idx} href={item.href} className="text-[14px] text-gray-500">{item.label}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
