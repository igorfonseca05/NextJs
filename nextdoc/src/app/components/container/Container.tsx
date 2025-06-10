import { ReactNode } from "react";


export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-[1280px] md:w-[85%] mx-auto px-5 lg:px-0">
            {children}
        </div>
    );
};