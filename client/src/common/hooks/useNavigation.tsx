import { useState } from "react";

type Return = {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

export const useNavigation = (): Return => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return {
    isDrawerOpen,
    handleDrawerClose,
    handleDrawerOpen,
  };
};
