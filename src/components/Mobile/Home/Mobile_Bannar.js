import React from 'react';
const Mobile_Bannar = () => {
    return (
        <div className="mx-2">
            <div className="bg-[#246FD5] rounded-t-xl mb-4 bannar">
                <div className="py-7">
                    <p className="text-gray-300 text-center tracking-wide text-lg">Total Earning</p>
                    <h2 className="text-white text-center text-3xl font-[700] tracking-wide mt-2 mb-5">BDT 10,000.00</h2>
                    <div className="w-44 mx-auto">
                        <button type='button' className="border border-gray-100 w-44 py-2 rounded-full text-white text-lg font-semibold tracking-wide">Withdraw</button>
                    </div>
                </div>
            </div>
            <div className="mx-2">
                <div className=" bg-[#fbddd7] rounded-full py-4 relative">
                    <h2 className="text-red-700 pl-10 text-lg font-semibold">Referral Commission</h2>
                    <img src="https://i.ibb.co/dpkR0xz/coin.png" alt="Award" className="w-16 h-16 absolute right-6 bottom-0" />
                </div>
            </div>
        </div>
    );
};

export default Mobile_Bannar;