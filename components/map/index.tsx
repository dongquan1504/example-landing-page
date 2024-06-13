import React, { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

function index() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: '' as string,
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary

      const position = { lat: 0, lng: 0 }
      const mapOptions = { center: position, zoom: 18, mapId: 'map' }
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
      const marker = new Marker({ position, map })
    }

    initializeMap()
    // const google = await loader.load()
  }, [])
  return (
    <div style={{ height: "600px" }} ref={mapRef} />
  )
}

export default index