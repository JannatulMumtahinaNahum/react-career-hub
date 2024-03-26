import { MdLocationPin } from "react-icons/md";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
const Job = ({job}) => {

    const {id, logo , job_title , company_name , remote_or_onsite , location , job_type , salary } = job;
    return (
        <div className="card card-compact bg-slate-100 items-start">
        <figure className="mt-6 ml-4"><img src={logo}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-5 ">
            <button className="px-5 py-2 font-bold border rounded border-purple-700 text-purple-500">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-bold border rounded border-purple-700 text-purple-500">{job_type}</button>
          </div>
          <div className="flex mt-2 gap-4">
            <h2 className="flex gap-1"><MdLocationPin className="text-2xl"></MdLocationPin>{location}</h2>

            <h2 className="flex gap-1"><PiCurrencyCircleDollarDuotone className="text-xl"></PiCurrencyCircleDollarDuotone>Salary: {salary}</h2>

          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">View Details</button> 
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;