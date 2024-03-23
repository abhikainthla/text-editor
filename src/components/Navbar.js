import React from 'react'

function Navbar(props) {
  return (
    <div>
        <div className='navbar'>
            <div>
                <h1>TextEditor</h1>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <span><input type="checkbox" name="" class="checkbox" onChange={props.change} value={props.value} /> Enable {props.name} Mode</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar