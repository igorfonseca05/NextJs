

export default function MainCards() {
    return (
        <>
            <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row border border-gray-200">
                <div className="lg:w-1/2">
                    <img src="https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Article+Image+1" alt="Article Thumbnail" className="w-full h-56 lg:h-full object-cover" />
                </div>
                <div className="p-6 lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">Documentation</span>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">Meet us at the new Stack: The documentation platform you know and love, reimagined.</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <a href="#" className="text-orange-500 font-medium text-sm hover:underline mt-4">Learn More &gt;</a>
                </div>
            </div>

            {/* Article Card 2 (Large - 2 colunas) */}
            <div className="md:col-span-1 lg:col-span-1 bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-gray-200"> {/* Este deve ocupar 1 coluna no grid */}
                <div className="lg:w-full">
                    <img src="https://via.placeholder.com/600x400/FF8C00/FFFFFF?text=Article+Image+2" alt="Article Thumbnail" className="w-full h-56 lg:h-64 object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">UX/UI</span>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">Using humanism to improve your website's UX: 5 ways to get started.</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <a href="#" className="text-orange-500 font-medium text-sm hover:underline mt-4">Learn More &gt;</a>
                </div>
            </div>
        </>
    );
};