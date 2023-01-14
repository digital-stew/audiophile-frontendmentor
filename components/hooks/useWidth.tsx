import React, { useEffect, useState } from "react";

export interface IWidth {
  desktop: boolean;
  tablet: boolean;
  mobile: boolean;
}

function useWidth(): IWidth {
  const [width, setWidth] = useState<number | undefined>(undefined);
  function handleResize() {
    const width = window.innerWidth;
    setWidth(width);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let mobile = false,
    desktop = false,
    tablet = false;
  if (width === undefined) return { desktop, mobile, tablet };
  if (width < 481) mobile = true;
  if (width > 481 && width < 769) tablet = true;
  if (width > 769) desktop = true;
  return { desktop, mobile, tablet };
}

export default useWidth;
