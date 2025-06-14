import React, {useEffect, useState} from "react";
import './ReportsLayout.css';

const ReportsLayout = () => {
    const [doctors, setDoctors] = useState([]);

    const getDoctors = () => {
    fetch('https://api.npoint.io/9a5543d36f1460da2f63')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
      });
    };

    const openPdf = () => {
    // Opens the PDF in a new tab
        window.open('/patient_report.pdf', '_blank');
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/patient_report.pdf';       // Path relative to the public folder
        link.download = 'patient_report.pdf';    // The filename users will get
        link.click();
    };

    useEffect(() => {
      getDoctors();
    }, []);

    return (
    <div className='report-container'>
        <div className='report-grid'>
            <div className='report-text'>
              <h1>Reports</h1>
            </div>
            <div className='report-table'>
            <table>
                <thead>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>View Report</th>
                    <th>Download Report</th>
                </tr>
                </thead>
                <tbody>
                {doctors.map((doctor, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.speciality}</td>
                    <td><button onClick={openPdf}>View Report</button></td>
                    <td><button onClick={handleDownload}>Download Report</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
    );
};

export default ReportsLayout