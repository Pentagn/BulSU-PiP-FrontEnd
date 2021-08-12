import React from "react";
import { Typography } from "@material-ui/core";

import AdminNotification from "./AdminNotification";
import ClientNotification from "./ClientNotification";

function NotificationPage({user}) {
  switch (user.type) {
    case "Client":
      return <ClientNotification />;
    case "Admin":
      return <AdminNotification />;
    default:
      return <Typography component="h1">Invalid user type</Typography>;
  }
}

export default NotificationPage;