import React, { useState } from "react";
import "../styles/Booking.css";

function Booking() {
    const [notes, setNotes] = useState([{ text: "Meeting with Suhani" }]);
    const [newNote, setNewNote] = useState("");
    const [selectedMonth, setSelectedMonth] = useState(9); // Default: September
    const [selectedDay, setSelectedDay] = useState(12); // Default: 12th
    const [selectedYear, setSelectedYear] = useState(2024); // Default: 2013

    const handleAddNote = () => {
        if (newNote.trim()) {
            setNotes([...notes, { text: newNote }]);
            setNewNote("");
        }
    };

    const handleRemoveNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const days = Array.from({ length: 31 }, (_, i) => i + 1); // Days 1-31
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <div className="booking-calendar">
            <div className="booking-left-column">
                <div className="booking-left-content">
                    <h1 className="booking-date">
                        {weekdays[(selectedDay % 7) - 1] || "Fri"}{" "}
                        <span className="booking-date-detail">
                            {months[selectedMonth - 1]} {selectedDay}th
                        </span>
                    </h1>
                    <div className="booking-notes">
                        <p className="booking-notes-input-container">
                            <input
                                className="booking-notes-input"
                                type="text"
                                value={newNote}
                                placeholder="new note"
                                onChange={(e) => setNewNote(e.target.value)}
                            />
                            <button
                                onClick={handleAddNote}
                                title="Add note"
                                className="booking-add-note"
                            >
                                +
                            </button>
                        </p>
                        <ul className="booking-notes-list">
                            {notes.map((note, index) => (
                                <li key={index} className="booking-note-item">
                                    {note.text}
                                    <button
                                        onClick={() => handleRemoveNote(index)}
                                        title="Remove note"
                                        className="booking-remove-note"
                                    >
                                        x
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="booking-right-column">
                <div className="booking-right-content">
                    <h2 className="booking-year">{selectedYear}</h2>
                    <ul className="booking-months">
                        {months.map((month, index) => (
                            <li key={index} className="booking-month-item">
                                <button
                                    title={month}
                                    data-value={index + 1}
                                    className={`booking-month-button ${
                                        selectedMonth === index + 1 ? "booking-selected" : ""
                                    }`}
                                    onClick={() => setSelectedMonth(index + 1)}
                                >
                                    {month}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="booking-weekdays">
                        {weekdays.map((day, index) => (
                            <li key={index} className="booking-weekday-item">
                                <button className="booking-weekday-button" title={day} data-value={index + 1}>
                                    {day}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="clearfix"></div>
                    <ul className="booking-days">
                        {days.map((day) => {
                            let className = "booking-day-button";
                            if (day === selectedDay) className += " booking-selected";
                            if ([8, 10, 27].includes(day)) className += " booking-event";

                            return (
                                <li key={day} className="booking-day-item">
                                    <button
                                        title={day}
                                        data-value={day}
                                        className={className}
                                        onClick={() => setSelectedDay(day)}
                                    >
                                        {day}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}

export default Booking;