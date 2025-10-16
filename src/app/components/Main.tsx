"use client";

import {useEffect, useState} from "react";

export default function Main() {
  const [isDelete, setIsDelete] = useState(true);
  const [textIdx, setTextIdx] = useState(true);
  const [displayText, setDisplayText] = useState(true);
  const [hasDeleted, setHasDeleted] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {}, []);
  return <div></div>;
}
