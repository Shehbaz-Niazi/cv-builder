import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  currentAddress: string;
  permanentAddress: string;
}

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface Reference {
  name: string;
  company: string;
  position: string;
  email: string;
}

interface CV {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  hobbies: string[];
  additionalInfo: string;
  references: Reference[];
}

interface CVPreviewProps {
  cv: CV;
}

const CVPreview = forwardRef<HTMLDivElement, CVPreviewProps>(({ cv }, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="bg-white p-8 mt-5 overflow-hidden rounded-lg shadow-lg mx-auto border"
    >
      <div className="border-b-2 border-indigo-600 pb-4 mb-4">
        <h2 className="text-4xl font-bold text-indigo-700">{cv.personalInfo.name}</h2>
        <div className="flex justify-between items-center mt-2">
          <p className="text-indigo-600">{cv.personalInfo.email}</p>
          <p className="text-indigo-600">{cv.personalInfo.phone}</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-600"><strong>Current Address:</strong> {cv.personalInfo.currentAddress}</p>
          <p className="text-gray-600"><strong>Permanent Address:</strong> {cv.personalInfo.permanentAddress}</p>
        </div>
      </div>

      <div className="grid  grid-cols-3  gap-8">
        <div className="col-span-2">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Work Experience</h3>
          {cv.workExperience.length === 0 ? (
            <p>No work experience added yet.</p>
          ) : (
            cv.workExperience.map((job, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                <h4 className="text-xl font-bold">{job.position} at {job.company}</h4>
                <p className="text-gray-500">{job.duration}</p>
              </div>
            ))
          )}
        </div>

        <div className='mr-2'>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4 ">Education</h3>
          {cv.education.length === 0 ? (
            <p>No education added yet.</p>
          ) : (
            cv.education.map((edu, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                <h4 className="text-xl font-bold">{edu.degree} from {edu.institution}</h4>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-indigo-600">Skills</h3>
        <p>{cv.skills.length > 0 ? cv.skills.join(', ') : 'No skills added yet.'}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-indigo-600">Hobbies</h3>
        <p>{cv.hobbies.length > 0 ? cv.hobbies.join(', ') : 'No hobbies added yet.'}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-indigo-600">Additional Information</h3>
        <p>{cv.additionalInfo || 'No additional information added yet.'}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-indigo-600">References</h3>
        {cv.references.length === 0 ? (
          <p>No references added yet.</p>
        ) : (
          cv.references.map((ref, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 mb-4">
              <h4 className="text-xl font-bold">{ref.name}</h4>
              <p className="text-gray-500">{ref.position} at {ref.company}</p>
              <p className="text-gray-500">{ref.email}</p>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
});

export default CVPreview;
