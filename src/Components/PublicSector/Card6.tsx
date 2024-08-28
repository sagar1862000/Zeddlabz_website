import React from 'react'
import img3 from '../../assets/LandingPage/img3.svg'
import img1 from '../../assets/LandingPage/img1.svg'
import img2 from '../../assets/LandingPage/img2.svg'
const Card6 = () => {
  return (
    <div className="bg-white">
    <div className="flex overflow-hidden flex-col w-11/12 mx-auto">
      <div className="w-full max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-6/12 h-full max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col grow max-md:max-w-full">
              <div className="flex relative bg-slate-500 flex-col">
                <img
                  loading="lazy"
                  srcSet={img1}
                  className="object-cover  inset-0 size-full"
                />
                {/* <div className="flex relative flex-col items-start pt-24 pr-20 pb-7 pl-6 max-md:px-5 max-md:pt-24 max-md:max-w-full">
                  <div className="text-sm font-semibold tracking-widest leading-none uppercase text-zinc-400">
                    Point of View
                  </div>
                  <div className="mt-5 text-2xl leading-none text-white">
                    Capitalizing on the Cloud
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-5 py-8  w-full font-semibold text-black h-6 bg-white">
              <div className="text-sm tracking-widest leading-none uppercase text-zinc-500">
                White paper
              </div>
              <img
                loading="lazy"
                srcSet={img3}
                className="object-contain self-stretch mt-3.5 w-full aspect-[1.42]"
              />
              <div className="mt-7 text-xl leading-7">
                Contact Center
                <br />
                Transformation
              </div>
              <div className="overflow-hidden p-3.5 mt-6 text-base font-black leading-none uppercase border border-black border-solid">
                Read more
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start py-8 pr-14 pl-5 w-full md:h-[1px] font-semibold text-white bg-fuchsia-400">
              <div className="text-sm tracking-widest leading-none uppercase">
                Point of View
              </div>
              <div className="self-stretch mt-16 text-xl leading-7 max-md:mt-10">
                Application Modernization
                Uncovered
              </div>
              <div className="overflow-hidden p-3.5 mt-28 text-base font-black leading-none uppercase border border-white border-solid max-md:mt-10">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start py-8 pr-14 pl-5 w-full text-black bg-stone-50 max-md:pr-5">
              <div className="text-sm font-extrabold tracking-widest leading-none uppercase text-zinc-500">
                Point of view
              </div>
              <div className="mt-28 text-xl font-semibold leading-7 max-md:mt-10">
                Business Process
                <br />
                Transformation-as-a-Service
              </div>
              <div className="overflow-hidden p-3.5 mt-20 text-base font-black leading-none uppercase border border-black border-solid max-md:mt-10">
                Read more
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12 max-md:ml-0 bg-[#FF3131] max-md:w-full">
            <div className="flex flex-col grow items-start py-8 pr-14 pl-5 w-full text-white bg-red-500 max-md:pr-5">
              <div className="text-sm font-extrabold tracking-widest leading-none uppercase">
                Research Report
              </div>
              <div className="mt-24 text-xl font-semibold leading-7 w-[248px] max-md:mt-10">
                Modernizing Banking in APAC
                <br />
                Financial Services Ecosystem
              </div>
              <div className="overflow-hidden p-3.5 mt-16 text-base font-black leading-none uppercase border border-white border-solid max-md:mt-10">
                Read more
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={img2}
              className="object-cover  inset-0 size-full"
            />
          </div>
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start py-8 pr-14 pl-5 w-full text-white bg-orange-500 max-md:pr-5">
              <div className="text-sm font-extrabold tracking-widest leading-none uppercase">
                Point of view
              </div>
              <div className="mt-28 text-xl font-semibold leading-7 w-[250px] max-md:mt-10">
                Creating a Value-Based Digital
                <br />
                Transformation Journey
              </div>
              <div className="overflow-hidden p-3.5 mt-20 text-base font-black leading-none uppercase border border-white border-solid max-md:mt-10">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card6