"use client";

import { useState } from "react";

import Button from "./components/button";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>React Counter Button</h1>
      {/* Artık her düğmenin ( ) ebeveyn bileşeninde durumumuza sahip olduğumuza
      göre , bu durumu props aracılığıyla bileşene Homeaktarabiliriz . Hem olay
      işleyicisini hem de görüntülemek istediğimiz değişkeni aktarmak
      isteyeceğiz :ButtonhandleClickcount */}
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
  
    </main>
  );
}
