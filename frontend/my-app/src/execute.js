import React, { useState } from "react";

const Compile = () => {
	const [output, setOutput] = useState("");
	
	const execute = async () => {
		const language = document.getElementById("lan").value;
		const code = document.getElementById("code").value;
		await fetch("http://localhost:5000/run", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				language,
				code,
			}),
		}).then(resp => resp.json()).then(data =>setOutput(JSON.parse(format(JSON.stringify(data.output)))))
		
	}

	const format = (output) => {
		return output.replace(/(?:\\[rn])+/g, "<br>")
	}
	
	return (
		<div className="app">
			<div>
				<select id="lan" className="dropdown">
					<option>cpp</option>
					<option>Python</option>
				</select>
			</div>
			
				<div class="cmd">
					<div className="title-bar">Code Editor</div>
					<textarea className="textarea" id="code">
						Enter your code here
					</textarea>
				</div>
			
			<button className="button" onClick={execute}>
				Submit
			</button>
			<iframe className='output' title='output' srcDoc={output} id="output"></iframe>
		</div>
	);
};

export default Compile;
