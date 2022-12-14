import React from "react";
import LaptopChoicesBody from "../Body/LaptopChoicesBody";
import LaptopFinderHeader from "../Header/LaptopFinderHeader";
import LaptopFinderNavBar from "../NavBar/LaptopFinderNavBar";

const LaptopChoices = ({value, setValue, laptopsArray, setStep, step, closeModal, prevStep, nextStep, restartModal }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-screen-2xl">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <LaptopFinderHeader closeModal={closeModal} />
            {/*nav*/}
            <LaptopFinderNavBar step={step} setStep={setStep}/>
            {/*body*/}
            <LaptopChoicesBody
              laptopsArray={laptopsArray}
              restartModal={restartModal}
              prevStep={prevStep}
              nextStep={nextStep}
              value={value} setValue={setValue}
            />
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default LaptopChoices;
