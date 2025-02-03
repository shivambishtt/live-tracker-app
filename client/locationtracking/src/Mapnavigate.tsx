import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet';


function Mapnavigate({ coords }: { coords: [number, number] }) {
    const map = useMap()


    useEffect(() => {
        map.flyTo(coords, 14)
    }, [coords, map])

    return (
        <>
        </>
    )
}

export default Mapnavigate
