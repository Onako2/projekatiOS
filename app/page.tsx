import Window from "./ui/window";
import DesktopIcon from "./ui/desktopIcon";
import OsHud from "./ui/osHud";

export default function Home() {
  return (
    <div>
      <OsHud></OsHud>
      <DesktopIcon name="MegaSkins" icon="https://avatars.githubusercontent.com/u/79749977?v=4" id="megaskins"></DesktopIcon>
      <Window name="MegaSkins" icon="https://avatars.githubusercontent.com/u/79749977?v=4" id="megaskins" url="https://nuc.de.majic.rs/megaskins" autoShow={true}></Window>
      <DesktopIcon name="Blåhaj Music" icon="/projekatios/shork.png" id="blahaj-music"></DesktopIcon>
      <Window name="Blåhaj Music" icon="/projekatios/shork.png" id="blahaj-music" url="https://www.youtube.com/embed/z9D9WFJcv_U" autoShow={false}></Window>
      <DesktopIcon name="Scratch" icon="/projekatios/turbowarp.png" id="scratch"></DesktopIcon>
      <Window name="Scratch" icon="/projekatios/turbowarp.png" id="scratch" url="projekatios/scratch" autoShow={false}></Window>
      <DesktopIcon name="Custom" icon="/projekatios/globe.svg" id="custom"></DesktopIcon>
      <Window name="Custom" icon="/projekatios/globe.svg" id="custom" url="projekatios/custom" autoShow={false}></Window>
      <DesktopIcon name="Front Page" icon="/projekatios/window.svg" id="nuc"></DesktopIcon>
      <Window name="Front Page" icon="/projekatios/window.svg" id="nuc" url="/" autoShow={false}></Window>
    </div>
  );
}
