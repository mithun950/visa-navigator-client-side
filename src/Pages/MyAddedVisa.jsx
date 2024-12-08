import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MyVisaCard from './MyVisaCard';
import { div } from 'framer-motion/client';

const MyAddedVisa = () => {

    const {user} = useContext(AuthContext)
    const loadedData = useLoaderData();
    console.log(loadedData)

    const personalDatas = loadedData.filter(data=>data.email==user?.email)
    const [personalData,setPersonalData] = useState(personalDatas)

   
    
    console.log(personalData)
    console.log(personalDatas)
    return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto gap-5 h-screen'>
            {
                personalData.map(data =><MyVisaCard key={data._id} data={data} personalData={personalData} setPersonalData={setPersonalData}></MyVisaCard>)
            }
        </div>
        </div>
    );
};

export default MyAddedVisa;
