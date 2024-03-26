import { useLoaderData, useParams } from "react-router-dom";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";
import { LuSubtitles } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiAddressBookFill } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {

    const jobs = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have applied successfully');
    }
    return (
        <div className="mb-8">
            <h2 className="font-bold mt-6 text-center">Job Details of: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4 mt-5">
            
                <div className="border md:col-span-3 p-3">
    
                    <div className="flex gap-2 mt-2">
                        <h2 className="font-bold"> Description: </h2>
                        <p>{job.job_description}</p>
                    </div>
                    <p className="flex gap-2 mt-2"><h2 className="font-bold">Responsibility:</h2>{job.job_responsibility}</p>
                    <p><h2 className="font-bold mt-2">Educational Requirements:</h2>{job.educational_requirements}</p>
                    <p className="mt-2"><h2 className="font-bold">Experience:</h2>{job. experiences}</p>
                </div>
                <div className="border p-3">
                    <h2 className="font-bold mb-2">Job Details:</h2>
                    
                    <hr />
                    
                    <p className="flex mt-2 gap-2">
                    <PiCurrencyCircleDollarDuotone className=" text-2xl"></PiCurrencyCircleDollarDuotone> 
                   <h2 className="font-semibold">Salary: </h2> {job.salary} (Per month)</p>
                    

                   <p className="flex mt-2 gap-2">
                    <LuSubtitles className="text-xl"></LuSubtitles>
                   <h2 className="font-semibold">Job Title : </h2> {job.job_title}</p>

                   <h2 className="font-bold mt-3 mb-1">Contact Information</h2>

                   <hr />

                
                   <p className="flex gap-2 mt-2">
                    <MdOutlineLocalPhone className="text-lg "></MdOutlineLocalPhone>
                    <h2 className="font-semibold">Phone:</h2>{job.contact_information.phone}</p>

                    <p className="flex gap-2 mt-2">
                    <MdEmail className="text-xl"></MdEmail>
                    <h2 className="font-semibold">Email:</h2>{job.contact_information.email}</p>

                    <p className="flex gap-2 mt-2">
                    <PiAddressBookFill className="text-2xl"></PiAddressBookFill>
                    <h2 className="font-semibold">Address:</h2>{job.contact_information.address}</p>

                     <button onClick={handleApplyJob} className="btn bg-blue-500 text-white hover:bg-purple-500 font-bold mt-4">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;