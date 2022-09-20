import React from "react";
import PriceSlider from "../Slider/PriceSlider";

const LaptopFinderBody = ({ nextStep, prevStep }) => {
  return (
    <div className="relative flex flex-row px-24 mb-5 mt-8">
      <div className="w-4/6 bg-pb-container-bg rounded-l-3xl">
        <button onClick={prevStep} className="flex gap-1 mt-3 mb-5">
          <span className="text-pb-dark-gray pl-7">Back</span>
        </button>
        <div className="">
          <h1 className="text-pb-text text-4xl mb-10 text-center">
            What do you mainly use your laptop for?
          </h1>
        </div>
        <div className="mx-auto text-pb-dark-blue text-2xl leading-relaxed flex flex-col w-full gap-4">
          <div className="flex flex-center w-full gap-6 mb-6 pl-48">
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange shadow-2xl">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM413.3 480H34.66C33.2 480 32 478.8 32 477.3C32 399.4 95.4 336 173.3 336h101.3C352.6 336 416 399.4 416 477.3C416 478.8 414.8 480 413.3 480z" />
                </svg>
              </span>
              <h3>Personal</h3>
            </button>
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange shadow-2xl">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M617.8 136.7l-286.3-102.7C324 31.33 315.9 31.36 308.5 33.98L22.22 136.7C8.719 141.5 0 153.8 0 167.1s8.719 26.47 22.22 31.31L48 208.6v113.1l-31.59 138.8c-1.094 4.75 .0469 9.719 3.078 13.53S27.13 480 32.01 480h63.98c4.859 0 9.461-2.219 12.49-6c3.047-3.781 4.188-8.75 3.125-13.5L80 319.6V220l228.5 81.99c3.703 1.313 7.578 1.938 11.47 1.938c3.906 0 7.812-.6563 11.56-1.969l286.2-102.7C631.3 194.5 640 182.2 640 167.1S631.3 141.5 617.8 136.7zM52.08 447.1l12.09-52.75l11.84 52.75H52.08zM319.3 271.9L129.5 203.8l195.2-60.5c8.438-2.625 13.2-11.55 10.57-20.02c-2.609-8.407-11.49-13.23-20.01-10.55L79.4 185.8L32 168l288.7-103.9L608 168L319.3 271.9zM482.3 288.1c-8.766 1.156-14.94 9.188-13.78 17.97l11.36 86.63c1.156 8.907-4.656 17.66-14.8 22.34c-43.91 20.31-93.56 31.72-143.2 32.94H318.5c-50.02-1.219-99.67-12.63-143.6-32.94c-10.14-4.688-15.95-13.44-14.8-22.31L171.5 306.1c1.156-8.782-5.016-16.81-13.78-17.97C148.8 286.9 140.9 293.2 139.8 301.9l-11.36 86.69c-3.016 23.03 9.969 44.85 33.08 55.53C209.4 466.2 263.4 478.7 318.1 480h4.141c54.36-1.344 108.4-13.75 156.2-35.88c23.11-10.69 36.09-32.5 33.08-55.56l-11.36-86.66C499.1 293.2 491.1 286.9 482.3 288.1z" />
                </svg>
              </span>
              <h3>Education</h3>
            </button>
          </div>
          <div className="flex flex-around w-full gap-6 mb-24 pl-48">
            <button
              onClick={nextStep}
              className="bg-white w-56 h-40 rounded-lg fill-pb-orange shadow-2xl"
            >
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M448 96h-64V48C384 21.53 362.5 0 336 0h-160C149.5 0 128 21.53 128 48V96H64C28.65 96 0 124.7 0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM160 48C160 39.17 167.2 32 176 32h160C344.8 32 352 39.17 352 48V96H160V48zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V288h144v64c0 8.844 7.156 16 16 16h128c8.844 0 16-7.156 16-16V288H480V416zM208 336V288h96v48H208zM480 256H32V160c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32V256z" />
                </svg>
              </span>
              <h3>Work</h3>
            </button>
            <button className="bg-white w-56 h-40 rounded-lg fill-pb-orange shadow-2xl">
              <span>
                <svg
                  className="h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M638.6 368.2l-33.38-211.6c-4.422-25.12-16.52-47.82-34.05-65.77s-40.5-31.18-66.62-37.36c-25.12-5.93-58.4-11.3-91.79-15.19S345.8 32 319.1 32C294.2 32 260.6 34.41 227.2 38.29S160.6 47.56 135.5 53.48C109.3 59.66 86.36 72.88 68.83 90.83S39.2 131.5 34.78 156.6l-33.38 211.6c-5.156 29.26 4.195 57.21 22.67 77.84c18.48 20.63 46.08 33.95 77.42 33.95c24.84 0 48.29-7.512 67.49-20.6c19.2-13.09 34.15-31.75 42.01-54.04l7.5-21.36h203l7.5 21.36c7.859 22.29 22.81 40.95 42.01 54.04c19.2 13.09 42.64 20.6 67.49 20.6c31.34 0 58.95-13.31 77.42-33.95C634.4 425.4 643.8 397.5 638.6 368.2zM592.1 424.7C578.8 439.5 559.3 448 538.5 448c-17.92 0-35.03-5.203-49.46-15.04c-14.1-9.615-24.43-22.84-29.84-38.2l-7.5-21.36c-4.502-12.82-16.61-21.4-30.19-21.4h-203c-13.59 0-25.69 8.58-30.19 21.4l-7.486 21.32c-5.43 15.4-15.76 28.62-29.86 38.24C136.5 442.8 119.4 448 101.5 448c-20.79 0-40.32-8.49-53.58-23.3c-12.92-14.42-18.24-32.51-14.9-51.5l33.28-211C69.52 143.9 78.31 126.9 91.72 113.2c13.69-14.02 31.37-23.9 51.13-28.56C165.1 79.17 197.3 74 230.9 70.08C264.6 66.16 296.2 64 320 64c23.75 0 55.38 2.16 89.05 6.08c33.67 3.922 64.96 9.088 88.1 14.55c.2656 .0625 .5352 .123 .8047 .1777c19.42 4.738 36.8 14.54 50.31 28.39c13.42 13.75 22.21 30.68 25.34 48.41l33.47 212.2C610.3 392.2 605 410.3 592.1 424.7zM432 248c-6.627 0-12.63 2.684-16.97 7.029c-4.344 4.344-7.029 10.35-7.029 16.97s2.685 12.62 7.029 16.96c4.344 4.346 10.34 7.038 16.97 7.038c6.629 0 12.63-2.692 16.97-7.038c4.344-4.344 7.029-10.34 7.029-16.96s-2.686-12.63-7.029-16.97C444.6 250.7 438.6 248 432 248zM496 152c-6.627 0-12.63 2.685-16.97 7.031c-4.344 4.344-7.029 10.35-7.029 16.97s2.685 12.62 7.029 16.96c4.344 4.346 10.34 7.036 16.97 7.036c6.629 0 12.63-2.69 16.97-7.036c4.344-4.344 7.029-10.34 7.029-16.96s-2.686-12.63-7.029-16.97C508.6 154.7 502.6 152 496 152zM256 208H208V160c0-8.844-7.18-16-16.02-16S176 151.2 176 160v48H128C119.2 208 111.1 215.2 111.1 224S119.2 240 128 240h48V288c0 8.844 7.132 16 15.98 16S208 296.8 208 288V240H256c8.844 0 15.98-7.156 15.98-16S264.8 208 256 208z" />
                </svg>
              </span>
              <h3>Gaming</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/6 bg-pb-light-gray rounded-r-3xl">
        <h2 className="text-pb-text text-3xl mt-8 mx-auto mb-3 text-center">
          Most popular laptops
        </h2>
        <h3 className="text-pb-orange text-xl ml-[92px]">
          We found 15 products for you!
        </h3>
        <PriceSlider />
      </div>
    </div>
  );
};

export default LaptopFinderBody;
