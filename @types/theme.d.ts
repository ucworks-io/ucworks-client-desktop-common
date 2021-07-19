import { UcTheme } from "../src";

declare module "@emotion/react" {
  interface Theme extends UcTheme {}
}
