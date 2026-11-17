
import { WheelOfFortune } from "./WheelOfFortune";

export default {
  title: "Dynamic Components/Wheel Of Fortune",
  component: WheelOfFortune,
  parameters: {
    layout: "fullscreen",
    html: {
      root: ".storybook-wheel-of-fortune-export",
    },
  },
  argTypes: {
    wheelTitle: {
      control: "text",
      description: "Main heading above the wheel",
    },
    wheelSubtitle: {
      control: "text",
      description: "Supporting text below the heading",
    },
    spinButtonText: {
      control: "text",
      description: "Main spin button label",
    },
    resultHeading: {
      control: "text",
      description: "Heading shown in the result modal",
    },
    replayButtonText: {
      control: "text",
      description: "Replay button label",
    },
    closeButtonText: {
      control: "text",
      description: "Close modal button label",
    },
    numberOfSections: {
      control: { type: "number", min: 2, max: 12, step: 1 },
      description: "Number of configured prize sections",
    },
    spinDuration: {
      control: { type: "range", min: 3, max: 15, step: 1 },
      description: "Wheel spin duration in seconds",
    },
    soundEnabled: {
      control: "boolean",
      description: "Enable generated sound effects",
    },
    showReplayButton: {
      control: "boolean",
      description: "Show the replay button in the result modal",
    },
    enableDangerZone: {
      control: "boolean",
      description: "Add an OH NO! LOSE ALL PRIZES section",
    },
    enableJackpotStreak: {
      control: "boolean",
      description: "Track consecutive wins and reset on a loss",
    },
    enableDoubleOrNothing: {
      control: "boolean",
      description: "Add losing slices as each risk is taken",
    },
    modulebackgroundcolor: {
      control: "color",
      description: "Wheel module background colour",
    },
    accentColor: {
      control: "color",
      description: "Accent and button colour",
    },
    section1IsLosing: {
      control: "boolean",
      description: "Treat section 1 as a losing section",
    },
    section2IsLosing: {
      control: "boolean",
      description: "Treat section 2 as a losing section",
    },
    section3IsLosing: {
      control: "boolean",
      description: "Treat section 3 as a losing section",
    },
    section4IsLosing: {
      control: "boolean",
      description: "Treat section 4 as a losing section",
    },
    section5IsLosing: {
      control: "boolean",
      description: "Treat section 5 as a losing section",
    },
    section6IsLosing: {
      control: "boolean",
      description: "Treat section 6 as a losing section",
    },
    section7IsLosing: {
      control: "boolean",
      description: "Treat section 7 as a losing section",
    },
    section8IsLosing: {
      control: "boolean",
      description: "Treat section 8 as a losing section",
    },
    section9IsLosing: {
      control: "boolean",
      description: "Treat section 9 as a losing section",
    },
    section10IsLosing: {
      control: "boolean",
      description: "Treat section 10 as a losing section",
    },
    section11IsLosing: {
      control: "boolean",
      description: "Treat section 11 as a losing section",
    },
    section12IsLosing: {
      control: "boolean",
      description: "Treat section 12 as a losing section",
    },
  },
  args: {
    wheelTitle: "Spin to Win!",
    wheelSubtitle: "Give it a spin for a chance to win!",
    spinButtonText: "SPIN THE WHEEL",
    resultHeading: "YOU WON!",
    replayButtonText: "SPIN AGAIN",
    closeButtonText: "CONTINUE",
    numberOfSections: 8,
    spinDuration: 8,
    soundEnabled: true,
    showReplayButton: true,
    enableDangerZone: false,
    enableJackpotStreak: false,
    enableDoubleOrNothing: false,
    modulebackgroundcolor: "#11172A",
    accentColor: "#F6C85F",
    section1Text: "FREE TOY",
    section1Color: "#E31B23",
    section1IsLosing: false,
    section2Text: "TRY AGAIN",
    section2Color: "#2563EB",
    section2IsLosing: false,
    section3Text: "£5 OFF",
    section3Color: "#16A34A",
    section3IsLosing: false,
    section4Text: "BONUS PRIZE",
    section4Color: "#9333EA",
    section4IsLosing: false,
    section5Text: "WIN A PRIZE",
    section5Color: "#F59E0B",
    section5IsLosing: false,
    section6Text: "10% OFF",
    section6Color: "#0891B2",
    section6IsLosing: false,
    section7Text: "MYSTERY GIFT",
    section7Color: "#EC4899",
    section7IsLosing: false,
    section8Text: "WIN BIG",
    section8Color: "#EA580C",
    section8IsLosing: false,
    section9Text: "EXTRA PRIZE",
    section9Color: "#7C3AED",
    section9IsLosing: false,
    section10Text: "LUCKY WIN",
    section10Color: "#DB2777",
    section10IsLosing: false,
    section11Text: "BONUS GIFT",
    section11Color: "#0D9488",
    section11IsLosing: false,
    section12Text: "JACKPOT",
    section12Color: "#CA8A04",
    section12IsLosing: false,
  },
};

export const Default = {
  render: (args) => <WheelOfFortune {...args} />,
};

export const FourSections = {
  args: {
    numberOfSections: 4,
    section1Text: "WIN",
    section2Text: "TRY AGAIN",
    section3Text: "FREE GIFT",
    section4Text: "BONUS",
  },
  render: (args) => <WheelOfFortune {...args} />,
};

export const DangerZone = {
  args: {
    enableDangerZone: true,
  },
  render: (args) => <WheelOfFortune {...args} />,
};

export const JackpotStreak = {
  args: {
    enableJackpotStreak: true,
  },
  render: (args) => <WheelOfFortune {...args} />,
};

export const DoubleOrNothing = {
  args: {
    enableDangerZone: true,
    enableDoubleOrNothing: true,
  },
  render: (args) => <WheelOfFortune {...args} />,
};

export const AllFeatures = {
  args: {
    enableDangerZone: true,
    enableJackpotStreak: true,
    enableDoubleOrNothing: true,
  },
  render: (args) => <WheelOfFortune {...args} />,
};

export const SilentWheel = {
  args: {
    soundEnabled: false,
  },
  render: (args) => <WheelOfFortune {...args} />,
};
