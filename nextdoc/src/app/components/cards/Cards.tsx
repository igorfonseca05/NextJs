
interface CardProps {
    tag: string
    title: string
    description: string
}


export default function Cards({ tag, title, description }: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img src="https://via.placeholder.com/400x250/FF8C00/FFFFFF?text=Article+Image+3" alt="Article Thumbnail" className="w-full h-40 object-cover" />
            <div className="p-4">
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{tag}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>
                <a href="#" className="text-orange-500 font-medium text-sm hover:underline">Learn More &gt;</a>
            </div>
        </div>
    );
};