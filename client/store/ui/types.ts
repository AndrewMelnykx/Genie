type Theme = "light" | "dark";

interface UIInitialState {
  isProModalVisible: boolean;
  stripePaymentData: "";
  subscriptionData: boolean;
  theme: Theme;
  error?: string;
}

export type { UIInitialState };
