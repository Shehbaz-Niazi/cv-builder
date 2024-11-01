import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash2 } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  year: string;
}

interface CV {
  education: Education[];
  // Include other properties as needed
}

interface EducationProps {
  cv: CV;
  updateCV: (section: keyof CV, data: any) => void;
}

const Education: React.FC<EducationProps> = ({ cv, updateCV }) => {
  const addEducation = () => {
    updateCV('education', [...cv.education, { institution: '', degree: '', year: '' }]);
  }

  const removeEducation = (index: number) => {
    updateCV('education', cv.education.filter((_, i) => i !== index));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-4 rounded-lg bg-indigo-50 shadow-md my-5"
    >
      {cv.education.map((edu: Education, index: number) => (
        <div key={index} className="space-y-2 p-4 my-5 bg-indigo-100 rounded-lg relative shadow-sm">
          <Input
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => {
              const newEducation = [...cv.education];
              newEducation[index].institution = e.target.value;
              updateCV('education', newEducation);
            }}
          />
          <Input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => {
              const newEducation = [...cv.education];
              newEducation[index].degree = e.target.value;
              updateCV('education', newEducation);
            }}
          />
          <Input
            placeholder="Year"
            value={edu.year}
            onChange={(e) => {
              const newEducation = [...cv.education];
              newEducation[index].year = e.target.value;
              updateCV('education', newEducation);
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-indigo-600 hover:text-indigo-800"
            onClick={() => removeEducation(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button onClick={addEducation} className="w-full mt-2">
        <PlusCircle className="mr-2 h-4 w-4" /> Add Education
      </Button>
    </motion.div>
  );
}

export default Education;
