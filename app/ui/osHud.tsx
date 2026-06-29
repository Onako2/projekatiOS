import Clock from "./clock";

export default function OsHud() {
  return (
    <div className="flex justify-between w-full">
          <p className="ml-16">projektiOS</p>
          <Clock></Clock>
        </div>
  )
}