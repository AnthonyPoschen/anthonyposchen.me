export interface Theme {
  // default text color
  Text: string
  // generic background color for the page
  Background: string
  // Primary 1 standout hero
  P1: string
  // Primary 2, less important
  P2: string
  // Primary 3 is super unimportant stuff
  P3: string
  // Secondary 1, good back drop for p1
  S1: string
  // Secondary 2, good back drop for p2
  S2: string
  // secondary 3, good back drop for p3
  S3: string
}
export const Dark:Theme = {
  Text: "white",
  Background: "#333333",
  P1: "yellow",
  P2: "",
  P3: "",
  S1: "",
  S2: "",
  S3: "",
}
export const Light:Theme = {
  Text: "black",
  Background: "white",
  P1: "",
  P2: "",
  P3: "",
  S1: "",
  S2: "",
  S3: "",
}
