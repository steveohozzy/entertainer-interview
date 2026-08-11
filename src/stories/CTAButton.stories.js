import { CTAButton } from "./CTAButton";

export default {
  title: "Modules/CTA Button",
  component: CTAButton,
  argTypes: {
    buttonStyle: {
      control: "radio",
      options: [
        "shop-now",
        "pre-order-now",
        "store-events",
        "store-locator",
        "enter",
        "download",
        "read",
        "sign-up",
      ],
    },
    href: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    buttonStyle: "shop-now",
    href: "https://www.thetoyshop.com",
  },
};