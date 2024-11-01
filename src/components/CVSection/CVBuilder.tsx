'use client';

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import PersonalInfo from './PersonalInfo';
import WorkExperienceComponent from './WorkExperience'; // Renamed import
import EducationComponent from './Education'; // Renamed import
import Skills from './Skills';
import Hobbies from './Hobbies';
import AdditionalInfo from './AdditionalInfo';
import References from './References';
import CVPreview from './CVPreview';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  currentAddress: string;
  permanentAddress: string;
}

// Renamed interface to avoid conflict
interface WorkExperienceData {
  company: string;
  position: string;
  duration: string;
}

// Renamed interface to avoid conflict
interface EducationData {
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
  workExperience: WorkExperienceData[];
  education: EducationData[];
  skills: string[];
  hobbies: string[];
  additionalInfo: string;
  references: Reference[];
}

export default function CVBuilder() {
  const [cv, setCV] = useState<CV>({
    personalInfo: { name: '', email: '', phone: '', currentAddress: '', permanentAddress: '' },
    workExperience: [],
    education: [],
    skills: [],
    hobbies: [],
    additionalInfo: '',
    references: []
  });

  const previewRef = useRef<HTMLDivElement | null>(null);

  const updateCV = (section: string, data: any) => {
    setCV(prev => ({ ...prev, [section]: data }));
  };

  const downloadCV = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('my_professional_cv.pdf');
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">CV Builder</h1>
      <PersonalInfo cv={cv} updateCV={updateCV} />
      <WorkExperienceComponent cv={cv} updateCV={updateCV} /> {/* Renamed usage */}
      <EducationComponent cv={cv} updateCV={updateCV} /> {/* Renamed usage */}
      <Skills cv={cv} updateCV={updateCV} />
      <Hobbies cv={cv} updateCV={updateCV} />
      <AdditionalInfo cv={cv} updateCV={updateCV} />
      <References cv={cv} updateCV={updateCV} />
      <CVPreview cv={cv} ref={previewRef} />

      <div className="flex justify-end mt-6">
        <Button onClick={downloadCV} className="bg-indigo-600 hover:bg-indigo-700 text-white">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </div>
    </div>
  );
}
