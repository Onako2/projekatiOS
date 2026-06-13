import Image from "next/image";
import Window from "./ui/window";
import DesktopIcon from "./ui/desktopIcon";

export default function Home() {
  return (
    <div>
      <DesktopIcon name="MegaSkins" icon="https://avatars.githubusercontent.com/u/79749977?v=4" id="megaskins"></DesktopIcon>
      <Window name="MegaSkins" icon="https://avatars.githubusercontent.com/u/79749977?v=4" id="megaskins" url="https://nuc.de.majic.rs/megaskins" autoShow={true}></Window>
      <DesktopIcon name="Blåhaj Music" icon="/projekatios/shork.png" id="blahaj-music"></DesktopIcon>
      <Window name="Blåhaj Music" icon="/projekatios/shork.png" id="blahaj-music" url="https://www.youtube.com/embed/z9D9WFJcv_U" autoShow={false}></Window>
    </div>
  );
}
