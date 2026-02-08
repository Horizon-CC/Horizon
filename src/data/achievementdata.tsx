import { DevTeam } from "./images";

export const Achievementdata = DevTeam.map((img, index) => ({
  src: img,
  alt: `Achievement ${index + 1}`,
  title: "Achievement Title",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elementum nunc, sit amet ultrices justo. Vivamus id ex et eros malesuada convallis. Quisque tincidunt, lorem in vehicula vehicula, nisl mauris viverra ex, non porttitor libero sem at eros.",
  badge1: "Test Badge 1",
  badge2: "Test Badge 2",
}));