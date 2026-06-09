import Image from "next/image";
import Window from "./ui/window";
import DesktopIcon from "./ui/desktopIcon";

export default function Home() {
  return (
    <div>
      <DesktopIcon name="MegaSkins" icon="https://avatars.githubusercontent.com/u/79749977?v=4" id="megaskins"></DesktopIcon>
      <Window name="MegaSkins" icon="https://avatars.githubusercontent.com/u/79749977?v=4" id="megaskins"></Window>
    </div>
  );
}
