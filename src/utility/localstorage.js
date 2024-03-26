const getStoreJobApplication = () => {
    const storeJobApplication = localStorage.getItem('job-applications');
    if(storeJobApplication){
        return JSON.parse(storeJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storeJobApplications = getStoreJobApplication();
    const exists = storeJobApplications.find(jobId => jobId === id);
    if(!exists){
        storeJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storeJobApplications))
    }
}

export {getStoreJobApplication ,saveJobApplication}