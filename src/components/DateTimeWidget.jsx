import React, { useState, useEffect } from "react"
import "./DateTimeWidget.scss"

const DateTimeWidget = () => {
  const [hour, setHour] = useState("")
  const [minutes, setMinutes] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      const hours = now.getHours()
      const hour12 = hours % 12 || 12
      const mins = now.getMinutes()
      
      setHour(String(hour12).padStart(2, '0'))
      setMinutes(String(mins).padStart(2, '0'))
      
      const month = now.toLocaleString("en-US", { month: "long" }).toUpperCase()
      const weekday = now.toLocaleString("en-US", { weekday: "long" }).toUpperCase()
      setDate(`${month}-${weekday}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="date-time-widget">
      <div className="widget-numbers">
        <div className="number-large">{hour}</div>
        <div className="number-large">{minutes}</div>
      </div>
      <div className="widget-info">
        <div className="date-text">{date}</div>
      </div>
    </div>
  )
}

export default DateTimeWidget
