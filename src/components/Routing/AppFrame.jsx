import { Frame } from "@shopify/polaris";

import AppRoutes from "./AppRoutes";
import NavigationMarkup from "../NavigationMarkup/NavigationMarkup";
import AppTopBar from "../TopBar/AppTopBar";

import React, { useState, useCallback } from "react";

function AppFrame() {
  // Track the open state of the mobile navigation
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    url: "/",
    accessibilityLabel: "Jaded Pixel",
  };

  return (
    <Frame
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      topBar={
        <AppTopBar
          onToggleMobileNavigationActive={toggleMobileNavigationActive}
        />
      }
      logo={logo}
      navigation={<NavigationMarkup />}
    >
      <AppRoutes />
    </Frame>
  );
}

export default AppFrame;
