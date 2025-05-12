import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';


const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();

    const handleFocus = () => {
        setDoctorResultHidden(false);
    };

    const handleBlur = () => {
        setDoctorResultHidden(true);

    };

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <input
                    type="text"
                    placeholder="Search for a specialty"
                    value={searchDoctor}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => setSearchDoctor(e.target.value)}
                />
                {!doctorResultHidden && (
                    <ul className="specialties-list">
                        {specialities.map((speciality, index) => (
                            <li key={index} onClick={() => handleDoctorSelect(speciality)}>
                                {speciality}
                            </li>
                        ))}
                    </ul>
                )}
            </center>
        </div>
    );
}

export default FindDoctorSearch;