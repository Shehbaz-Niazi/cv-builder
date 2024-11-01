'use client'
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import PersonalInfo from "@/components/CVSection/PersonalInfo";
import WorkExperience from "@/components/CVSection/WorkExperience";
import Education from "@/components/CVSection/Education";
import Skills from "@/components/CVSection/Skills";
import Hobbies from "@/components/CVSection/Hobbies";
import AdditionalInfo from "@/components/CVSection/AdditionalInfo";
import References from "@/components/CVSection/References";
import CVPreview from "@/components/CVSection/CVPreview";
import { jsPDF } from 'jspdf';
import html2canvas from "html2canvas";

const App: React.FC = () => {
  const [cv, setCV] = useState({
    personalInfo: { name: '', email: '', phone: '', currentAddress: '', permanentAddress: '' },
    workExperience: [],
    education: [],
    skills: [],
    hobbies: [],
    additionalInfo: '',
    references: [],
  });

  const updateCV = (section: string, data: any) => {
    setCV((prev) => ({ ...prev, [section]: data }));
  };

  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const element = cvRef.current;
    if (element) {
      // Set scale to improve quality and use scroll width for full content width
      const canvas = await html2canvas(element, {
        scale: 2, 
        useCORS: true,
        windowWidth: element.scrollWidth, 
      });

      // Get canvas image data and dimensions
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add image to PDF and save
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("cv.pdf");
    }
  };

  return (
    <div className="container mx-auto p-5 max-w-4xl">
      <h1 className="text-3xl  font-bold text-indigo-500 mb-2">CV Builder</h1>
      <PersonalInfo cv={cv} updateCV={updateCV} />
      <WorkExperience cv={cv} updateCV={updateCV} />
      <Education cv={cv} updateCV={updateCV} />
      <Skills cv={cv} updateCV={updateCV} />
      <Hobbies cv={cv} updateCV={updateCV} />
      <AdditionalInfo cv={cv} updateCV={updateCV} />
      <References cv={cv} updateCV={updateCV} />
      <Button onClick={handleDownload} className="mt-4">
        Download CV as PDF
      </Button>
      <div ref={cvRef} className="bg-white p-4 shadow-md mt-4">
        <CVPreview cv={cv} />
      </div>
    </div>
  );
};

export default App;
