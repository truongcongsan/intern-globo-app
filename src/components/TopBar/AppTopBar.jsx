import { TopBar, VisuallyHidden, Icon, Button } from "@shopify/polaris";
import {
  ArrowLeftMinor,
  NotificationMajor,
  CaretDownMinor,
} from "@shopify/polaris-icons";

import React, { useState, useCallback } from "react";

function AppTopBar(props) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const userMenuMarkup = (
    <div className="use-menu-markup">
      <TopBar.UserMenu
        actions={[
          {
            items: [{ content: "Back to Shopify", icon: ArrowLeftMinor }],
          },
          {
            items: [{ content: "Community forums" }],
          },
        ]}
        name="Truong"
        detail="Trinh Nam"
        initials="T"
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
      />
      <Button plain>
        <Icon source={CaretDownMinor} color="base" />
      </Button>
    </div>
  );

  const secondaryMenuMarkup = (
    <div
      className="secondary-menu-markup"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button onClick={() => {}}>Submit a new task</Button>
      <TopBar.Menu
        activatorContent={
          <span>
            <Icon source={NotificationMajor} />
            <VisuallyHidden>Secondary menu</VisuallyHidden>
          </span>
        }
        open={isSecondaryMenuOpen}
        onOpen={toggleIsSecondaryMenuOpen}
        onClose={toggleIsSecondaryMenuOpen}
        actions={[
          {
            items: [{ content: "Notification" }],
          },
        ]}
      />
    </div>
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onNavigationToggle={props.onToggleMobileNavigationActive}
    />
  );
}

export default AppTopBar;
