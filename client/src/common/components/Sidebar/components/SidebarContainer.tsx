import { Drawer } from "@mui/material";
import { ReactNode } from "react";

import { DRAWER_WIDTH } from "@common/constants";

type Props = { children: ReactNode };

export const SidebarContainer = ({ children }: Props) => (
  <Drawer
    sx={{
      width: DRAWER_WIDTH,
      boxShadow: "0px 6px 8px rgba(94, 129, 170, 0.08)",
      borderRadius: 3,
      mt: "73px",
      py: 3,
      backgroundColor: "#ffffff",
    }}>
    {children}
  </Drawer>
);
