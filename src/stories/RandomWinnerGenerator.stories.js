import { RandomWinnerGenerator } from "./RandomWinnerGenerator";

export default {
  title: "Tools/Random Winner Generator",
  component: RandomWinnerGenerator,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Import a CSV or Excel entrant list, randomly select winners without replacement, and download separate CSV files for winners and remaining entrants. Excel imports use the first worksheet.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Random Winner Generator",
    description: "Select winners fairly from your entrant list in just a few clicks.",
  },
};
