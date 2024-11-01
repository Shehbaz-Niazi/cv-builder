import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SkillsProps {
  cv: any
  updateCV: (section: string, data: any) => void
}

const Skills: React.FC<SkillsProps> = ({ cv, updateCV }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-4 rounded-lg bg-indigo-50 shadow-md my-5"
    >
      <Input
        placeholder="Skills (comma separated)"
        value={cv.skills.join(', ')}
        onChange={(e) => updateCV('skills', e.target.value.split(',').map(skill => skill.trim()))}
      />
    </motion.div>
  )
}

export default Skills
