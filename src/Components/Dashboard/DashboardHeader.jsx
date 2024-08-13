import React from "react";
import { useNavigate } from "react-router-dom";
const DashboardHeader = ({
  title,
  subtitle,
  primaryButtonLabel,
  secondaryButtonLabel,
  primaryButtonIcon,
  secondaryButtonLink,
}) => {
  const navigate = useNavigate();
  const handleSecondaryButtonClick = () => {
    if (secondaryButtonLink) {
      navigate(secondaryButtonLink);
    }
  };
  return (
    <div>
      <div className="wrapper flex justify-between my-4 py-4 items-center	">
        <div>
          <h2 className="pb-0.5 text-22">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="py-3 px-4 rounded-lg bg-slate-300	mr-2 hover:bg-blue-500 hover:text-white transition duration:400 ease-in-out flex items-center gap-1">
            {primaryButtonIcon}
            {primaryButtonLabel}
          </button>
          <button
            type="button"
            className="py-3 px-4 rounded-lg bg-blue-500 text-white hover:bg-slate-300 hover:text-black transition duration:400 ease-in-out"
            onClick={handleSecondaryButtonClick}>
            {secondaryButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
