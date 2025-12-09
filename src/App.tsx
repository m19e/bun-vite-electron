import { useState } from "react";
import { DaisyUI } from "./components/DaisyUI";

// TODO fontconfigでtofu対応
// TODO biomeでclassNameソートできるか試す
// TODO daisyuiのコンポーネント並べてみる
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="gothic flex min-h-screen min-w-screen flex-col items-center justify-center gap-2 text-2xl">
			<h1>Vite + React</h1>
			<div className="flex flex-col items-center">
				<button
					type="button"
					className="btn btn-primary btn-sm"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="flex items-center justify-center bg-base-200">
				<button type="button" className="btn btn-primary btn-lg mincho">
					縦書きエディタ
				</button>
			</div>

			<DaisyUI />
		</div>
	);
}

export default App;
