import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';
import { Link } from 'react-router-dom';


function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces([...response.data,...response.data,...response.data,...response.data,...response.data,]);
    });
  }, []);
  return (
    <div className=' mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {places.length > 0 && places.map(place => (
        <Link to={'/place/'+place._id}>
          <div className=' rounded-2xl bg-gray-500 flex'>
            {place.photos?.[0] && (
              <img className=' rounded-2xl object-cover aspect-square' src={'https://wanderstay-backend.onrender.com/uploads/' + place.photos?.[0]} alt="" />
            )}
          </div>
          <h3 className=' font-bold'>{place.address}</h3>
          <h2 className=' text-sm text-gray-500'>{place.title}</h2>
          <div className=' mt-2'>
            <span className=' font-bold'>${place.price}</span> per night
          </div>
        </Link>
      ))}
    </div>
  )
}

export default IndexPage
