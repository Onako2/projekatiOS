"use client"

import { useEffect } from "react"

function closeWindow(element: HTMLElement) {
  element.style.display = "none"
}
function openWindow(element: HTMLElement) {
  element.style.display = "block"
}

export default function Window() {
  useEffect(() => {
    console.log("Spawning a new window!")
    // Make the DIV element draggable:
    let screen = document.getElementById("welcome");
    dragElement(screen);

    let welcomeScreenClose = document.querySelector("#welcomeclose")

    let welcomeScreenOpen = document.querySelector("#welcomeopen")

    welcomeScreenClose.addEventListener("click", function() {
      closeWindow(screen);
    });

    welcomeScreenOpen.addEventListener("click", function() {
      openWindow(screen);
    });


    // Step 1: Define a function called `dragElement` that makes an HTML element draggable.
    function dragElement(element: HTMLElement | null) {
      // Step 2: Set up variables to keep track of the element's position.
      let initialX = 0;
      let initialY = 0;
      let currentX = 0;
      let currentY = 0;

      if (element == null) {
        console.error("Element is null, whaat?")
        return
      }
      // Step 3: Check if there is a special header element associated with the draggable element.
      if (document.getElementById(element.id + "header")) {
        // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
        // This allows you to drag the window around by its header.
        document.getElementById(element.id + "header").onmousedown = startDragging;
        console.log("a header!")
      } else {
        // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
        // This allows you to drag the window by holding down anywhere on the window.
        element.onmousedown = startDragging;
        console.error("No header")
      }

      // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
      function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        // Step 7: Get the mouse cursor position at startup.
        initialX = e.clientX;
        initialY = e.clientY;
        // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
      }

      // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
      function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        // Step 10: Calculate the new cursor position.
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
      }

      // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
      function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    return () => {
    }
  }, [])

  return (
    <div className="border-2 border-solid window w-128 absolute" id="welcome">
      <div className="flex justify-between w-full">
        <p className="cursor-pointer mb-8 mt-0" id="welcomeclose">Close</p>
        <p className="" id="welcomeheader"> mooover</p>
      </div>
      <div className="" id="content">
        <p className="p-16">Hello, World!</p>
      </div>
    </div>
  )
}