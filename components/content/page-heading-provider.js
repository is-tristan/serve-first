"use client";

// React
import { createContext, useContext } from "react";

// Next
import { usePathname } from "next/navigation";

const PageHeadingContext = createContext({});

export default function PageHeadingProvider({ headings = [], children }) {

    const headingMap = Object.fromEntries((headings || []).map((item) => [item.path, item.h1]));

    return (

        <PageHeadingContext.Provider value={headingMap}>

            {children}

        </PageHeadingContext.Provider>

    );

}

export function usePageHeading() {

    const pathname = usePathname();
    const headingMap = useContext(PageHeadingContext);

    return headingMap[pathname] || null;

}
