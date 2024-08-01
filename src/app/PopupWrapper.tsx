'use client'

import React, { useState } from 'react'
import Popup from '@/components/ui/popup'
import { Button } from "@/components/ui/button"

export default function PopupWrapper() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Button className="px-2 py-1 w-3/5" onClick={() => setShowPopup(true)}>Get Notified</Button>
      {showPopup && <Popup handleShowModal={() => setShowPopup(false)} />}
    </>
  )
}