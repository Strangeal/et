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
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <div>{renderContent(windowSize)}</div>
}

export default WindowSizeTracker
