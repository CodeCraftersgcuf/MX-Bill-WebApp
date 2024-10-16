export const DUMMY_NOTIFICATIONS = [
    {
      id: 1,
      type: "success",
      title: "Success",
      message: "Your profile has been updated successfully!",
      autoDismiss: true,
      autoDismissTime: 3000
    },
    {
      id: 2,
      type: "error",
      title: "Error",
      message: "Failed to save your changes. Please try again.",
      autoDismiss: false // Will not auto-dismiss
    },
    {
      id: 3,
      type: "warning",
      title: "Warning",
      message: "Your session will expire in 5 minutes.",
      autoDismiss: true,
      autoDismissTime: 5000
    },
    {
      id: 4,
      type: "info",
      title: "Information",
      message: "Your new message will appear shortly.",
      autoDismiss: true,
      autoDismissTime: 2000
    },
    {
      id: 5,
      type: "success",
      title: "Payment Successful",
      message: "Your payment of $50 has been processed.",
      autoDismiss: true,
      autoDismissTime: 4000
    },
    {
      id: 6,
      type: "error",
      title: "Login Failed",
      message: "Incorrect username or password. Please try again.",
      autoDismiss: true,
      autoDismissTime: 3000
    }
  ];
  