import { BaseTheme } from "../lib/examples";

declare module "@emotion/react" {
  interface Theme extends BaseTheme {}
}
