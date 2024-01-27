import React from "react";
import { Check } from "lucide-react";
import { HelpCircle } from "lucide-react";

function Carts() {
    return (
        <div className="flex flex-wrap justify-center gap-6 mt-20">
            <div className="max-w-[370px] flex flex-col justify-between shadow-md border    bg-white min-h-[554px] w-full px-8 py-8">
                <div>
                    <div className="border-b ">
                        <h4 className="text-customBlack font-semibold text-lg">Bronze</h4>
                        <p className="text-gray-400">Perfect for Individuals</p>
                        <p className="mb-6 mt-3 ">
                            <b className="text-4xl">$34</b>
                            <span className="text-gray-400">/month</span>
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3 mt-6">
                        <li className="flex gap-5">
                            <Check color="#737373" />{" "}
                            <span className="text-customSilver">
                                Instantly accept payment globally
                            </span>
                        </li>
                        <li className="flex gap-5">
                            <Check color="#737373" />{" "}
                            <span className="text-customSilver">
                                Automated sales compliance
                            </span>
                        </li>
                        <li className="flex gap-5">
                            <Check color="#737373" />{" "}
                            <span className="text-customSilver">
                                Access to existing features
                            </span>
                        </li>
                    </ul>
                </div>

                <button className="bg-primary rounded-full py-3 text-white font-semibold">
                    Get Started
                </button>
            </div>
            <div className="max-w-[370px] relative flex flex-col justify-between shadow-md border text-gray-400 bg-customBlue  min-h-[554px] w-full px-8 py-8">
                <div className="max-w-[109px] right-[25px] w-full justify-center rotate-[8deg] absolute -top-[7px] bg-primary rounded-full text-customBlue font-medium flex py-[7px]">
                    <span className="text-xs">🔥 Most Popular</span>
                </div>
                <div>
                    <div className="border-b ">
                        <h4 className="text-white font-semibold text-lg">Bronze</h4>
                        <p className="text-gray-400">Perfect for Individuals</p>
                        <p className="mb-6 mt-3 ">
                            <b className="text-4xl text-white">$34</b>
                            <span className="text-gray-400">/month</span>
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3 mt-6">
                        <li className="flex gap-5">
                            <Check />{" "}
                            <span className="truncate max-w-[200px]">
                                Instantly accept payment globally
                            </span>
                            <HelpCircle />
                        </li>
                        <li className="flex gap-5">
                            <Check />{" "}
                            <span className="truncate max-w-[200px]">
                                Recurring & billing
                            </span>
                        </li>
                        <li className="flex gap-5">
                            <Check />{" "}
                            <span className="truncate max-w-[200px]">
                                Sell digital downloads
                            </span>
                        </li>
                    </ul>
                </div>

                <button className="bg-primary rounded-full py-3 text-white font-semibold">
                    Get Started
                </button>
            </div>
            <div className="max-w-[370px] flex flex-col justify-between shadow-md border    bg-white min-h-[554px] w-full px-8 py-8">
                <div>
                    <div className="border-b ">
                        <h4 className="text-customBlack font-semibold text-lg">Gold</h4>
                        <p className="text-gray-400">Perfect for ...</p>
                        <p className="mb-6 mt-3 ">
                            <b className="text-4xl">Talk to Us!</b>
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3 mt-6">
                        <li className="flex gap-[6px]">
                            <span className="text-customSilver flex gap-5">
                                <Check color="#737373" /> Instantly accept payment globally
                            </span>
                            <HelpCircle color="#737373" />
                        </li>
                        <li className="flex gap-5">
                            <Check color="#737373" />{" "}
                            <span className="text-customSilver">
                                Automated sales compliance
                            </span>
                        </li>
                        <li className="flex gap-5">
                            <Check color="#737373" />{" "}
                            <span className="text-customSilver">
                                Access to existing features
                            </span>
                        </li>
                        <li className="flex gap-5">
                            <Check color="#737373" />{" "}
                            <span className="text-customSilver">
                                Support major payment methods
                            </span>
                        </li>
                    </ul>
                </div>

                <button className="text-customBlack border border-gray-200 rounded-full py-3  font-semibold">
                    Contact Us
                </button>
            </div>
        </div>
    );
}

export default Carts;
