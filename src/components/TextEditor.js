import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Button from './Button'
function TextEditor() {
    const [text, setText] = useState('');
    const [words, setWords] = useState(0);
    const [charcters, setCharacters] = useState(0);
    const [readingTime, setReadingTime] = useState(0);
    const [modeName, setModeName] = useState('Dark')
    const [mode, setMode] = useState(false) // false means light mode and true is dark mode 
    const handleUppercase = useCallback(() => {
        setText(text.toUpperCase())
      }, [text])
      const handleLowerrcase = useCallback(() => {
        setText(text.toLowerCase())
      }, [text])
      const handleClearText = useCallback(() => {
        setText("")
      }, [text])
      const handleCopyText = useCallback(() => {
        window.navigator.clipboard.writeText(text);
      }, [text])
      const handleRemoveSpaces = useCallback(() => {
        const newText = text.split(' ').filter(word => word !== '').join(' ');
        setText(newText);
      }, [text])

      useEffect( ()=>{


        const tempWords = text.split(' ').filter(word => word !== '').length;
        const tempCharacters = text.replace(/\s/g, '').length;
        setWords(tempWords);
        setCharacters(tempCharacters);
          
          const wpm = 200;
          const minutes = tempWords /wpm ;
          setReadingTime(minutes + " min read");

      }, [text, charcters, words]);

      const handleDarkMode = () =>{
        setMode(prevMode => !prevMode);
        setModeName(prev => prev === 'Dark' ? 'Light' : 'Dark');
      }
  return (
    <div className={mode ? 'dark-mode' : 'light-mode'}>
        <Navbar change={handleDarkMode} value={mode} name={modeName}/>
        <div  className="container">
            <div className='heading'>
                <h1>TextEditor - Word Counter, Charecter Counter, Remove Extra Space</h1>
            </div>
            <div>
                <label>Enter Your Text Here: </label><br />
                <textarea id="editor" rows="8" value={text} onChange={(e)=> setText(e.target.value)} ></textarea><br /><br />
            </div>
            <div className='options'>
                <Button name={"Convert Uppercase"} color={"#5d9cf9"} onClick={handleUppercase}  />
                <Button name={"Convert Lowercase"} color={"#5d9cf9"} onClick={handleLowerrcase}/>
                <Button name={"Clear Text"} color={"#e37781"} onClick={handleClearText} />
                <Button name={"Copy To Clipboard"} color={"#64ac8b"} onClick={handleCopyText} />
                <Button name={"Remove Extra Spaces"} color={"#4099fe"} onClick={handleRemoveSpaces} />
            </div>
            <div className='results'>
                <h1>Summery Of Your Text</h1>
                <p>Number of words : {words} </p>
                <p>Number of characters : {charcters}</p>
                <p>Reading Time: {readingTime}</p>
            </div>
            <div className='preview-tab'>
                <h2>Preview Document</h2>
                <textarea id='preview'  disabled rows={6} value={text} ></textarea>
            </div>
        </div>
    </div>
  )
}

export default TextEditor