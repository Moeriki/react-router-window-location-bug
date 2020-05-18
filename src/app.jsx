import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export function App() {
  const routerLocation = useLocation();
  const [windowLocation, setWindowLocation] = useState();

  useEffect(() => {
    setWindowLocation(window.location);
  }, []);

  return (
    <>
      <div>Router: {routerLocation?.search}</div>
      <div>Window: {windowLocation?.search}</div>
    </>
  );
}
