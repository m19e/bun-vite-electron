import { useState } from "react";

// TODO fontconfigでtofu対応
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen min-w-screen gap-4 bg-gray-100 text-2xl gothic">
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<div className="bg-base-200 flex items-center justify-center">
				<button type="button" className="btn btn-primary btn-lg mincho">
					縦書きエディタテンプレ
				</button>
			</div>
		</div>
	);
}

export default App;
