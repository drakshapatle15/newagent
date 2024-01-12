import React from "react";
import { FaHome, FaUser, FaEnvelope, FaCog, FaBars } from "react-icons/fa";
import { TbHistory } from "react-icons/tb";
import { BsFileEarmarkText } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";

const AdminNavbar = () => {
  return (
    <nav className="bg-white-800 p-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      {/* Left side - Logo */}
      <div className="flex items-center">
        {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-white ml-2 font-bold text-lg">Your Logo</span> */}
        <svg
          width="168"
          height="35"
          viewBox="0 0 168 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M133.458 18.4133C132.653 17.885 131.771 17.6208 130.81 17.6208C129.765 17.6208 128.835 18.0951 128.018 19.0438C127.214 19.9924 126.811 21.1511 126.811 22.5201V33.5073H122.308V14.2166H126.811V15.9817C128.072 14.5648 129.747 13.8563 131.837 13.8563C133.374 13.8563 134.55 14.0905 135.367 14.5588L133.458 18.4133Z"
            fill="#122F4E"
          />
          <path
            d="M113.374 31.58C112.966 32.2525 112.251 32.8049 111.231 33.2371C110.222 33.6574 109.165 33.8676 108.061 33.8676C105.983 33.8676 104.35 33.3512 103.161 32.3185C101.973 31.2738 101.378 29.7969 101.378 27.8876C101.378 25.6541 102.213 23.907 103.882 22.6461C105.563 21.3853 107.947 20.7549 111.033 20.7549C111.561 20.7549 112.185 20.8449 112.906 21.0251C112.906 18.7556 111.471 17.6208 108.601 17.6208C106.908 17.6208 105.491 17.903 104.35 18.4674L103.377 14.9731C104.927 14.2286 106.77 13.8563 108.907 13.8563C111.849 13.8563 114.005 14.5288 115.373 15.8737C116.742 17.2065 117.427 19.7402 117.427 23.4747V27.5994C117.427 30.1691 117.943 31.7842 118.976 32.4446C118.604 33.093 118.189 33.4893 117.733 33.6334C117.277 33.7895 116.754 33.8676 116.166 33.8676C115.518 33.8676 114.935 33.6274 114.419 33.1471C113.902 32.6668 113.554 32.1444 113.374 31.58ZM112.942 24.4293C112.173 24.2732 111.597 24.1952 111.213 24.1952C107.658 24.1952 105.881 25.3599 105.881 27.6895C105.881 29.4186 106.884 30.2832 108.889 30.2832C111.591 30.2832 112.942 28.9323 112.942 26.2305V24.4293Z"
            fill="#122F4E"
          />
          <path
            d="M98.6406 25.2399H84.8615C84.9456 26.7769 85.4739 27.9717 86.4466 28.8242C87.4192 29.6768 88.7281 30.1031 90.3732 30.1031C92.4265 30.1031 93.9875 29.5687 95.0563 28.5L96.8034 31.9403C95.2184 33.2251 92.8528 33.8676 89.7067 33.8676C86.7648 33.8676 84.4352 33.009 82.7181 31.2919C81.013 29.5627 80.1604 27.1551 80.1604 24.0691C80.1604 21.0311 81.097 18.5694 82.9703 16.6842C84.8555 14.7989 87.113 13.8563 89.7427 13.8563C92.5406 13.8563 94.7861 14.6909 96.4792 16.36C98.1723 18.0291 99.0189 20.1545 99.0189 22.7362C99.0189 23.2886 98.8928 24.1231 98.6406 25.2399ZM85.0236 21.8536H94.4979C94.1857 19.0317 92.6246 17.6208 89.8148 17.6208C87.2451 17.6208 85.648 19.0317 85.0236 21.8536Z"
            fill="#122F4E"
          />
          <path
            d="M71.0464 33.8676H69.1191L63.3553 17.2246L57.7536 33.8676H55.8263L47.1626 7.11987H52.0438L56.9971 23.0424L62.3466 7.11987H64.4L69.7675 23.0424L74.7028 7.11987H79.584L71.0464 33.8676Z"
            fill="#122F4E"
          />
          <path
            d="M165.109 6.74161C165.83 6.74161 166.442 6.99978 166.946 7.51612C167.463 8.02045 167.721 8.63286 167.721 9.35334C167.721 10.0738 167.463 10.6922 166.946 11.2086C166.442 11.7129 165.83 11.9651 165.109 11.9651C164.389 11.9651 163.77 11.7129 163.254 11.2086C162.75 10.6922 162.498 10.0738 162.498 9.35334C162.498 8.63286 162.75 8.02045 163.254 7.51612C163.77 6.99978 164.389 6.74161 165.109 6.74161ZM162.786 33.5073V17.909H160.318V14.2166H167.343V33.5073H162.786Z"
            fill="#2CC185"
          />
          <path
            d="M165.109 6.74161C165.83 6.74161 166.442 6.99978 166.946 7.51612C167.463 8.02045 167.721 8.63286 167.721 9.35334C167.721 10.0738 167.463 10.6922 166.946 11.2086C166.442 11.7129 165.83 11.9651 165.109 11.9651C164.389 11.9651 163.77 11.7129 163.254 11.2086C162.75 10.6922 162.498 10.0738 162.498 9.35334C162.498 8.63286 162.75 8.02045 163.254 7.51612C163.77 6.99978 164.389 6.74161 165.109 6.74161ZM162.786 33.5073V17.909H160.318V14.2166H167.343V33.5073H162.786Z"
            fill="#2CC185"
          />
          <path
            d="M153.87 33.5074L151.943 28.1579H142.901L141.064 33.5074H135.858L146.377 6.75974H148.43L159.039 33.5074H153.87ZM147.404 14.8291L144.234 24.5735H150.574L147.404 14.8291Z"
            fill="#2CC185"
          />
          <path
            d="M153.87 33.5074L151.943 28.1579H142.901L141.064 33.5074H135.858L146.377 6.75974H148.43L159.039 33.5074H153.87ZM147.404 14.8291L144.234 24.5735H150.574L147.404 14.8291Z"
            fill="#2CC185"
          />
          <path
            d="M14.4176 14.6387C13.2347 12.6699 13.8717 10.1148 15.8405 8.93186L19.8564 6.51889L34.7905 31.3734L29.3487 34.6432C28.1674 35.353 26.6344 34.9708 25.9246 33.7895L14.4176 14.6387Z"
            fill="#2CC185"
          />
          <path
            d="M14.4176 14.6387C13.2347 12.6699 13.8717 10.1148 15.8405 8.93186L19.8564 6.51889L34.7905 31.3734L29.3487 34.6432C28.1674 35.353 26.6344 34.9708 25.9246 33.7895L14.4176 14.6387Z"
            fill="url(#paint0_linear_34_2739)"
          />
          <path
            d="M14.4176 14.6387C13.2347 12.6699 13.8717 10.1148 15.8405 8.93186L19.8564 6.51889L34.7905 31.3734L29.3487 34.6432C28.1674 35.353 26.6344 34.9708 25.9246 33.7895L14.4176 14.6387Z"
            fill="#2CC185"
          />
          <path
            d="M31.8614 20.693L28.5424 14.5371L24.8707 8.58477C24.3376 7.66146 25.115 6.46465 26.2532 6.47756L40.0524 6.58275C40.2936 6.58401 40.5264 6.64405 40.7291 6.75727C40.9317 6.87049 41.0977 7.03323 41.2115 7.23034C41.3253 7.42745 41.3832 7.65253 41.38 7.88465C41.3767 8.11677 41.3123 8.34838 41.1928 8.55794L34.3775 20.5493C34.2524 20.7735 34.0689 20.9653 33.8462 21.1043C33.6235 21.2433 33.3699 21.3245 33.1123 21.3392C32.8546 21.3539 32.6024 21.3016 32.3822 21.1879C32.1621 21.0742 31.9821 20.9032 31.8614 20.693Z"
            fill="#122F4E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.01753 8.93186C0.0487099 10.1148 -0.588336 12.6699 0.594652 14.6387L2.51707 17.8382H12.7254L12.8057 17.7899L6.03339 6.51889L2.01753 8.93186Z"
            fill="#122F4E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.92798 21.851L12.1013 33.7895C12.8111 34.9708 14.3441 35.353 15.5254 34.6432L20.9672 31.3735L15.2456 21.851H4.92798Z"
            fill="#2CC185"
          />
          <defs>
            <linearGradient
              id="paint0_linear_34_2739"
              x1="30.1139"
              y1="34.7605"
              x2="36.7602"
              y2="32.0626"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.272266" stop-color="#00B59C" />
              <stop offset="1" stop-color="#86FB99" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Center - Tabs with Icons */}
      <div className="flex items-center space-x-8 text-gray-500 text-l">
        <NavItem icon={<BiSolidDashboard />} label="Dashboard" />
        <NavItem icon={<FaUser />} label="Agent Mangement" />
        <NavItem icon={<TbHistory />} label="USer Management" />
        <NavItem icon={<BsFileEarmarkText />} label="Billing" />
        <NavItem icon={<BsFileEarmarkText />} label="Report" />{" "}
        <NavItem icon={<BsFileEarmarkText />} label="Admin" />
      </div>

      {/* Right side - User Info and Navigation Icon */}
      <div className="flex items-center space-x-4">
        <div className="text-black">
          <p className="font-semibold">John Doe</p>
          <p className="text-gray-500 text-sm">john.doe@example.com</p>
        </div>
        <div className="flex items-center">
          <div className="rounded-full bg-emerald-500 h-12 w-12 flex items-center justify-center">
            {/* User profile icon (you can use an image or another icon) */}
            <span className="text-white">JD</span>
          </div>
          <FaBars className="ml-2 cursor-pointer text-white" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center cursor-pointer">
      {icon}
      <span className="ml-2">{label}</span>
    </div>
  );
};

export default AdminNavbar;
