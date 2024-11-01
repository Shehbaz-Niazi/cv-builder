import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash2 } from 'lucide-react';

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
}

interface CV {
  workExperience: WorkExperience[];
  // Include other properties as needed
}

interface WorkExperienceProps {
  cv: CV;
  updateCV: (section: keyof CV, data: any) => void;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ cv, updateCV }) => {
  const addWorkExperience = () => {
    updateCV('workExperience', [...cv.workExperience, { company: '', position: '', duration: '' }]);
  };

  const removeWorkExperience = (index: number) => {
    updateCV('workExperience', cv.workExperience.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-4 rounded-lg bg-indigo-50 shadow-md my-5"
    >
      {cv.workExperience.map((job: WorkExperience, index: number) => (
        <div key={index} className="space-y-2 p-4 my-5 bg-indigo-100 rounded-lg relative shadow-sm">
          <Input
            placeholder="Company"
            value={job.company}
            onChange={(e) => {
              const newWorkExperience = [...cv.workExperience];
              newWorkExperience[index].company = e.target.value;
              updateCV('workExperience', newWorkExperience);
            }}
          />
          <Input
            placeholder="Position"
            value={job.position}
            onChange={(e) => {
              const newWorkExperience = [...cv.workExperience];
              newWorkExperience[index].position = e.target.value;
              updateCV('workExperience', newWorkExperience);
            }}
          />
          <Input
            placeholder="Duration"
            value={job.duration}
            onChange={(e) => {
              const newWorkExperience = [...cv.workExperience];
              newWorkExperience[index].duration = e.target.value;
              updateCV('workExperience', newWorkExperience);
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-indigo-600 hover:text-indigo-800"
            onClick={() => removeWorkExperience(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button onClick={addWorkExperience} className="w-full mt-2">
        <PlusCircle className="mr-2 h-4 w-4" /> Add Work Experience
      </Button>
    </motion.div>
  );
};

export default WorkExperience;
