import React from 'react'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out These Epic Destinations</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem src="/images/img-9.jpg" 
                text="Explore deep hidden falls in amazon jungle"
                label="Adventure"
                path='./pages/Services'/>
                <CardItem src="/images/img-2.jpg" 
                text="Explore rare beach islands through cruise ships in hawai"
                label="Luxury"
                path='./pages/Services'/>
            </ul>
            <ul className='cards__items'>
                <CardItem src="/images/img-3.jpg" 
                text="Boating in the beautiful indian ocean"
                label="Adventure"
                path='./pages/Services'/>
                <CardItem src="/images/img-4.jpg" 
                text="Play in the world's unique island football arena"
                label="Adventure"
                path='./pages/Services'/>
                <CardItem src="/images/img-8.jpg" 
                text="Explore Thar desert and its natural habitants"
                label="Explore"
                path='./pages/Services'/>
            </ul>


        </div>



    </div>
    </div>
  )
}

export default Cards