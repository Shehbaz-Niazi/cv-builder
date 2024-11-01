import { motion } from 'framer-motion'
import { Textarea } from "@/components/ui/textarea"

interface AdditionalInfoProps {
  cv: any
  updateCV: (section: string, data: any) => void
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ cv, updateCV }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-4 rounded-lg bg-indigo-50 shadow-md my-5"
    >
      <Textarea
        placeholder="Additional Information"
        value={cv.additionalInfo}
        onChange={(e) => updateCV('additionalInfo', e.target.value)}
      />
    </motion.div>
  )
}

export default AdditionalInfo
