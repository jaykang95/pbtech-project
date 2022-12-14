import React, { useState } from "react";
import LaptopChoices from "./LaptopChoices";
import LaptopFeatures from "./LaptopFeatures";
import LaptopFinderActivities from "./LaptopFinderActivities";
import LaptopFinderHome from "./LaptopFinderHome";

// go back to previous step

export default function LaptopFinder({ value, setValue, laptopsArray, restartModal, setStep, step, prevStep, nextStep, closeModal }) {
  const conditionalComponent = () => {
    switch (step) {
      case 1:
        return <LaptopFinderHome value={value} setValue={setValue} laptopsArray={laptopsArray} setStep={setStep} step={step} closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 2:
        return <LaptopFinderActivities value={value} setValue={setValue} laptopsArray={laptopsArray} setStep={setStep} step={step} closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 3:
        return <LaptopFeatures value={value} setValue={setValue} laptopsArray={laptopsArray} setStep={setStep} step={step} closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      case 4:
        return <LaptopChoices value={value} setValue={setValue} laptopsArray={laptopsArray} setStep={setStep} restartModal={restartModal} closeModal={closeModal} prevStep={prevStep} nextStep={nextStep} />;
      default:
        return null;
    }
  };
  return <>{conditionalComponent()}</>;
}
