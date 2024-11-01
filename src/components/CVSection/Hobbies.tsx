import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HobbiesProps {
  cv: any
  updateCV: (section: string, data: any) => void
}

const Hobbies: React.FC<HobbiesProps> = ({ cv, updateCV }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-4 rounded-lg bg-indigo-50 shadow-md my-5"
    >
      <Input
        placeholder="Hobbies (comma separated)"
        value={cv.hobbies.join(', ')}
        onChange={(e) => updateCV('hobbies', e.target.value.split(',').map(hobby => hobby.trim()))}
      />
    </motion.div>
  )
}

export default Hobbies
