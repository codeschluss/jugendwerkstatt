import { useState } from "react";

interface ReturnToggleType {
  isToggled: boolean;
  handleToggle: () => void;
}

export const useToggle = (initialValue: boolean): ReturnToggleType => {
  const [isToggled, setIsToggled] = useState(initialValue);

  const handleToggle = () => setIsToggled(!isToggled);

  return { isToggled, handleToggle };
};
