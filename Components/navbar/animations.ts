// Animation variants for navbar components
export const menuAnimations = {
  top: {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  },
  center: {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  },
  bottom: {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  },
  list: {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
  listItem: {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  },
};