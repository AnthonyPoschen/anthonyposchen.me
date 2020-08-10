export interface Theme {
  // default text color
  Foreground: string
  // generic background color for the page
  Background: string
  // Primary 1 standout hero
  P1: string
  // Primary 2, less important
  P2: string
  // Primary 3 is super unimportant stuff
  P3: string
}
export const Dark:Theme = {
  Foreground: "white",
  Background: "#333333",
  P1: "#403FC0",
  P2: "#6665CD",
  P3: "",
}
export const Light:Theme = {
  Foreground: "#333333",
  Background: "white",
  P1: "#403FC0",
  P2: "#6665CD",
  P3: "",
}
