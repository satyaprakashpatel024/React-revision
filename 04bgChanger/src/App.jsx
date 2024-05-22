import { useState } from 'react';

function App() {
	const [color, setColor] = useState('olive');
  const changeColor = (e)=>{
    let text= e.target.innerText;
    setColor(text);
  }
	return (
		<>
			<div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
				<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-3xl'>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Green</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Blue</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Yellow</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Pink</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Grey</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Black</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>white</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Orange</button>
            <button onClick={changeColor} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Violet</button>
          </div>
        </div>
			</div>
		</>
	);
}

export default App;
