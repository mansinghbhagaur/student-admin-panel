import { Dashboard, ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router-dom";

const CollapsableListItem = ({ link }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ListItem key={link.label} disablePadding divider>
        <ListItemButton
          onClick={() =>
            link.children ? setIsOpen(!isOpen) : navigate(link.route)
          }
        >
          <ListItemIcon>{link.icon}</ListItemIcon>
          <ListItemText primary={link.label} />
          {link.children && (isOpen ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </ListItem>
      {link.children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {link.children.map((child, index) => (
              <ListItemButton key={index} onClick={() => navigate(child.route)}>
                <ListItemIcon>{child.icon}</ListItemIcon>
                <ListItemText primary={child.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export function Sidebar() {
  const NavLinks = [
    {
      label: "Dashboard",
      route: "/dashboard",
      icon: <Dashboard />,
    },
    {
      label: "Student",
      icon: <GroupIcon />,
      children: [
        {
          label: "Student List",
          route: "/student",
          icon: <GroupIcon />,
        },
      ],
    },
  ];

  return (
    <List>
      {NavLinks.map((link, index) => (
        <CollapsableListItem link={link} key={index} />
      ))}
    </List>
  );
}
