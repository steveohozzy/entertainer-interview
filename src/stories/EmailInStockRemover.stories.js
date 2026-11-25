import { EmailInStockRemover } from "./EmailInStockRemover";

export default {
  title: "Tools/Email Me When In Stock Remover",
  component: EmailInStockRemover,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Enter a list of product SKUs and generate a Google Tag Manager Custom HTML tag that removes the Email me when in stock button for matching products.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    initialSkus: {
      control: "text",
      description: "Optional starting SKU list. Separate SKUs with commas, spaces or new lines.",
    },
  },
};

export const Default = {
  args: {
    title: "Email Me When In Stock Remover",
    description: "Generate a GTM tag to hide the email notification button for selected products.",
    initialSkus: "537767",
  },
};
