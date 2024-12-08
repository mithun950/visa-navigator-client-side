import { Link, useLoaderData } from "react-router-dom";
import VisaCards from "./VisaCards";


const LatestVisa = () => {

    const visa = useLoaderData();

    const latestVisa = visa.slice(0,6);

    return (
        <>
        <div className="dark:bg-black mt-20">
        <h2 className="mt-16 text-center font-bold text-3xl dark:text-white">Latest Visa</h2>
        <div className="w-11/12 mx-auto mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            latestVisa.map(visaData => <VisaCards key={visaData._id} visaData={visaData} ></VisaCards>)
        }
        </div>

        <div className="text-center mb-16">
            <Link to= "/all-visas" className="btn bg-blue-500 text-white mt-8">See all visas</Link>
        </div>
        </div>
        </>
    );
};

export default LatestVisa;