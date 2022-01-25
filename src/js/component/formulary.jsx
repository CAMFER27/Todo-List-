import React, { useState, useEffect } from "react";
import CreatingUserList from "./creatinguserlist.jsx";
const Formulary = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setlist] = useState([]);
	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		console.log("escrito usuario: " + inputValue);
		console.log(list);
	});
	const handleKeepDown = e => {
		if (e.key === "Enter") {
			console.log("presiona la tecla enter");
			setlist([...list, inputValue]);
			setInputValue("");
		}
		//  console.log("tecla: " + e.key);
	};
	const handleonChange = e => {
		setInputValue(e.target.value);
	};
	return (
		<div className="box">
			<input
				type="text"
				onKeyDown={handleKeepDown}
				onChange={handleonChange}
				value={inputValue}
				placeholder="Write your things..."
			/>
			<CreatingUserList lista={list} setlist={setlist} />
		</div>
	);
};
/*usuario debe apretar Enter
const node = document.getElementById('co');
node.addEventListener('keydown', function onEvent(event) {
    if (e.key === "Enter") {
        console.log("presion la tecla enter");
    }
});*/
export default Formulary;
