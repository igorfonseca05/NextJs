
export default function LoadingFallback() {
    return (
        <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className="w-full h-24 rounded-xl bg-gray-200 relative overflow-hidden"
                >
                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                </div>
            ))}
            <style>{`
          .animate-shimmer {
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite linear;
          }
  
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}</style>
        </div>
    );
}
