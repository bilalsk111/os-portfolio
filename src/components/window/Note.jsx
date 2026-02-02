import React, { useEffect, useState } from 'react'
import Window from './Window';
import Markdown from 'react-markdown';
import './Note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({ state, setWindows }) => {
    const [markdown,setMarkdown] = useState(null);
    useEffect(()=>{
        fetch('/note.txt')
            .then(res => res.text())
            .then(text => setMarkdown(text))
    },[])
  return (
    <Window title='note' state={state}
      setWindows={setWindows}>
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language="typescript" style={a11yDark}>{markdown}</SyntaxHighlighter> : <p>Loading....</p>}
        </div>
    </Window>
  )
}

export default Note
