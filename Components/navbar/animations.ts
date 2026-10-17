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
    closed: { opacity: 0, x: "100%" },
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
  },
  listItem: {
    closed: { y: 12, opacity: 0 },
    opened: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  },
};