import { useState } from "react"
import toggleModal from "./App"

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)
  const toggleValue: () => void = () => setValue(!value)
  return [value, toggleValue] as const
}

export default useToggle