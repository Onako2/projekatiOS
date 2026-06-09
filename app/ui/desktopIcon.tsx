"use client"

import { useEffect } from "react"


type AppProps = {
  name: string,
  icon: string,
  id: string
}

export default function DesktopIcon({ name, icon, id }: AppProps) {
  const openId = `${id}open`;
  useEffect(() => {

    return () => {
    }
  }, [])

  return (
    <div id="desktopApps">
      <div className="desktopIconBox" id={openId}>
        <img src={icon} className="desktopIcon"></img>
        <p className="m-0 text-white">{name}</p>
      </div>
    </div>
  )
}