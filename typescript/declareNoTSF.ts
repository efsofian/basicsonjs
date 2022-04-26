// @filename: global.d.ts
declare module "*.png" {
  const imgUrl: string;
  export default imgUrl;
}
// @filename: component.ts
import img from "./file.png";
