import React from "react";
import GeneralCard from "./GeneralCard";
import MediaCard from "./MediaCard";
import PricingCard from "./PricingCard";
import DashboardHeader from "../../Dashboard/DashboardHeader";
const GeneralSection = () => {
  return (
    <div className="flex flex-col gap-9">
      <GeneralCard />
      <MediaCard />
      <PricingCard />
      <DashboardHeader
        primaryButtonLabel="Cancel"
        secondaryButtonLabel="Save Changes"
        secondaryButtonLink="/productsList"
      />
    </div>
  );
};

export default GeneralSection;
