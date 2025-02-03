import { FC } from "react";

interface SuccessScreenProps {
  // Callback function to restart the form.
  onRestart: () => void;
}

/**
 * SuccessScreen Component
 * -------------------------
 * This component is shown when the form is successfully completed.
 * It displays a success message, an icon, and a button to restart the form.
 */
const SuccessScreen: FC<SuccessScreenProps> = ({ onRestart }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      {/* Success Icon */}
      <div className="w-[120px] h-[120px] mb-6">
        <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M79.5427 43.2324L51.3105 71.4648L38.957 59.1162C38.9451 59.1043 38.9332 59.0924 38.921 59.0805C37.935 58.1143 36.3524 58.1302 35.3862 59.1162C34.4197 60.1025 34.4359 61.6852 35.4219 62.6514L49.543 76.7676C50.0111 77.2372 50.6474 77.5009 51.3105 77.5C51.9737 77.5006 52.6097 77.2372 53.0778 76.7676L83.0778 46.7676C83.0897 46.7557 83.1016 46.7441 83.1135 46.7319C84.0797 45.7458 84.0638 44.1632 83.0778 43.197C82.0918 42.2305 80.5092 42.2467 79.5427 43.2324ZM60.5 10C32.8859 10 10.5 32.3859 10.5 60C10.5 87.6141 32.8859 110 60.5 110C88.1007 109.968 110.468 87.6007 110.5 60C110.5 32.3859 88.1141 10 60.5 10ZM60.5 105C35.6471 105 15.5 84.8529 15.5 60C15.5 35.1471 35.6471 15 60.5 15C85.3416 15.0272 105.473 35.1584 105.5 60C105.5 84.8529 85.3529 105 60.5 105Z"
            fill="#0D71C9"
          />
        </svg>
      </div>

      {/* Success Message */}
      <h1 className="text-2xl font-bold font-heading text-black">Congratulations</h1>
      <p className="text-gray-600 mt-2">Welcome to your very own 25</p>

      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="mt-6 text-[#0D71C9] font-semibold text-lg hover:underline"
      >
        Back to start
      </button>
    </div>
  );
};

export default SuccessScreen;
