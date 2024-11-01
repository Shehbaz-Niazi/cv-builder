import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"

interface PersonalInfoProps {
  cv: any
  updateCV: (section: string, data: any) => void
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ cv, updateCV }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border p-4 rounded-lg space-y-2 bg-indigo-50 shadow-md"
    >
      <Input
        placeholder="Full Name"
        value={cv.personalInfo.name}
        onChange={(e) => updateCV('personalInfo', { ...cv.personalInfo, name: e.target.value })}
      />
      <Input
        placeholder="Email"
        type="email"
        value={cv.personalInfo.email}
        onChange={(e) => updateCV('personalInfo', { ...cv.personalInfo, email: e.target.value })}
      />
      <Input
        placeholder="Phone"
        type="tel"
        value={cv.personalInfo.phone}
        onChange={(e) => updateCV('personalInfo', { ...cv.personalInfo, phone: e.target.value })}
      />
      <Input
        placeholder="Current Address"
        value={cv.personalInfo.currentAddress}
        onChange={(e) => updateCV('personalInfo', { ...cv.personalInfo, currentAddress: e.target.value })}
      />
      <Input
        placeholder="Permanent Address"
        value={cv.personalInfo.permanentAddress}
        onChange={(e) => updateCV('personalInfo', { ...cv.personalInfo, permanentAddress: e.target.value })}
      />
    </motion.div>
  )
}

export default PersonalInfo
