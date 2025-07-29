import { useState, useEffect } from "react";

function EntryForm({ onSave, editData }) {
  const [text, setText] = useState("");
	const [date, setDate] = useState("");

	useEffect(() => {
		if (editData) {
			setText(editData.text);
			setDate(editData.date);
		}
	}, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !date) return;
    onSave({ text, date });
    setText("");
    setDate("");
  };

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-xl mt-6">
			<input
			type="date"
			value={date}
			onChange={(e) => setDate(e.target.value)}
			className="w-full p-2 border rounded mb-2"
			required
			/>
			<textarea
			placeholder="Escribe tu entrada..."
			value={text}
			onChange={(e) => setText(e.target.value)}
			className="w-full p-2 border rounded h-32 resize-none"
			required
			/>
			<button
			type="submit"
			className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-950"
			>
				{editData ? "Actualizar Entrada" : "Guardar Entrada"}
			</button>
		</form>
	);
}

export default EntryForm;