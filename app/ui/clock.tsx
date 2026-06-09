"use client"

import { useEffect } from "react"

function updateTime() {
      const currentTime = new Date().toLocaleString();
      const timeText = document.querySelector("#timeElement");
      if (timeText != null) {
        timeText.innerHTML = currentTime;
      }
}

export default function Clock() {
  useEffect(() => {

    updateTime()

    setInterval(updateTime, 1000);

    return () => {
    }
  }, [])

  return (
    <p className="mr-16" id="timeElement">loading..</p>
  )
}