import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from './image/feature_1.jpg';
import featureimage1 from './image/feature_2.jpg';
import featureimage2 from './image/feature_3.jpg';
function Feature() {
  
  return (
    <div id='features'>
    <div className='a-container'>
      <FeatureBox image={featureimage} title='High accuracy'/>
      <FeatureBox image={featureimage1} title='Instant Results'/>
      <FeatureBox image={featureimage2} title='High uptime'/>
      </div>
    </div>
  )
}

export default Feature;