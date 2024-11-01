import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash2 } from 'lucide-react';

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

interface ReferencesProps {
  cv: CV;
  updateCV: (section: keyof CV, data: any) => void;
}

const References: React.FC<ReferencesProps> = ({ cv, updateCV }) => {
  const addReference = () => {
    updateCV('references', [...cv.references, { name: '', company: '', position: '', email: '' }]);
  }

  const removeReference = (index: number) => {
    updateCV('references', cv.references.filter((_, i) => i !== index));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-4 rounded-lg bg-indigo-50 shadow-md my-5"
    >
      {cv.references.map((ref: Reference, index: number) => (
        <div key={index} className="space-y-2 p-4 bg-indigo-100 rounded-lg relative shadow-sm">
          <Input
            placeholder="Name"
            value={ref.name}
            onChange={(e) => {
              const newReferences = [...cv.references];
              newReferences[index].name = e.target.value;
              updateCV('references', newReferences);
            }}
          />
          <Input
            placeholder="Company"
            value={ref.company}
            onChange={(e) => {
              const newReferences = [...cv.references];
              newReferences[index].company = e.target.value;
              updateCV('references', newReferences);
            }}
          />
          <Input
            placeholder="Position"
            value={ref.position}
            onChange={(e) => {
              const newReferences = [...cv.references];
              newReferences[index].position = e.target.value;
              updateCV('references', newReferences);
            }}
          />
          <Input
            placeholder="Email"
            type="email"
            value={ref.email}
            onChange={(e) => {
              const newReferences = [...cv.references];
              newReferences[index].email = e.target.value;
              updateCV('references', newReferences);
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-indigo-600 hover:text-indigo-800"
            onClick={() => removeReference(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button onClick={addReference} className="w-full mt-2">
        <PlusCircle className="mr-2 h-4 w-4" /> Add Reference
      </Button>
    </motion.div>
  );
}

export default References;
