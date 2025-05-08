'use client'
import React, { useEffect, useState } from 'react'

interface WindowSize {
    width: number
    height: number
}

const WindowSizeTracker = ({
    renderContent,
}: {
    renderContent: (windowSize: WindowSize) => React.JSX.Element
}) => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0, // Default values for SSR
        height: 0,
    })

    useEffect(() => {
        // Access `window` only in the browser
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        // Set initial size
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <div>{renderContent(windowSize)}</div>
}

export default WindowSizeTracker
