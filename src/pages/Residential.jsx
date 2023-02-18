// export default function Residential() {
//   return (
//     <>
//       <section name='home' className='residentialImg'>
//       <div>
//         <div className='text-white'>Residential</div>
//       </div>
//       </section>
//       <div className='columns-3 pt-10'>
//         <div className='flex justify-center text-2xl'>
//           OUR SERVICES
//         </div>
//         <div>
//           <ul>
//             <li>Accessory Dwelling Units</li>
//             <li>Additions</li>
//             <li>Attic Restoration</li>
//             <li>Basement Remodeling</li>
//             <li>Bathroom Remodeling</li>
//             <li>Deck Building</li>
//             <li>Deck Repair</li>
//             <li>Dock Design & Construction</li>
//             <li>Consultations</li>
//             <li>Drawing Services</li>
//             <li>Finishing</li>
//             <li>Finishing Selections</li>
//             <li>Permitting</li>
//             <li>Product Selection & Sourcing</li>
//           </ul>
//         </div>
//       </div>
//
//     </>
//   )
// }

import React from 'react'

const Residential = () => {
  return (
<>
    <section name='home' className='residentialImg'>
            <div>
               <div className='text-white'>Residential</div>
             </div>
             </section>

    <div className="bg-lightblue py-20 px-4 mt-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
          Our Services
        </h2>
        <dl className="w-full md:w-2/3">
          <div>
            <ul>
              <li>Accessory Dwelling Units</li>
              <li>Additions</li>
              <li>Attic Restoration</li>
              <li>Basement Remodeling</li>
              <li>Bathroom Remodeling</li>
              <li>Deck Building</li>
              <li>Deck Repair</li>
              <li>Dock Design & Construction</li>
              <li>Consultations</li>
              <li>Drawing Services</li>
              <li>Finishing</li>
              <li>Finishing Selections</li>
              <li>Permitting</li>
              <li>Product Selection & Sourcing</li>
            </ul>
          </div>




        </dl>
      </div>
    </div>

</>

  )
}

export default Residential

