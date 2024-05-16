import { useState } from "react";

function Square({value, onSquareClick}) {

	return (
		<button className="square text-4xl border-[1px] h-16 w-16 border-gray-500 font-semibold" onClick={onSquareClick} >{value}</button>
	);
}

export default Square;