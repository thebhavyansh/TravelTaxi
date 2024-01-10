"use client"
import Booking from '@/components/Booking/Booking'
import MapBoxMap from '@/components/Map/MapBoxMap'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { userLocationContext } from '@/context/UserLocationContext';
export default function Home() {
  const [userLocation,setUserLocation] = useState<any>();
  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation =() => {
    navigator.geolocation.getCurrentPosition(function(pos){
     setUserLocation({
      lat:pos.coords.latitude,
      lng:pos.coords.longitude
     })
    })
  }
  return (
  
    <div>
      <userLocationContext.Provider value={{userLocation,setUserLocation}}>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=""><Booking /></div>
        <div className="col-span-2 ">
          <MapBoxMap />
        </div>
      </div>
      </userLocationContext.Provider>
      
    
    </div>
  )
}
