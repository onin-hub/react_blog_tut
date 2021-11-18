/**
 * @param useState hooks reactive state
 */
import { useState } from 'react'

const Home = () => {


    /**
     * call the @param setName to rerender the value to the browser
     */
    const [name, setName] = useState('ONIN TUVERA')
    const [age, setAge] = useState(25)

    const handleClickChangeName = () => {
        setName("Onin Tuvs")
        setAge(30)
    }

    const handleClick = (e) => {
        console.log("Click me click!", e);
    }

    const handleClickAgain = (name, e) => {
        console.log("Click me again click " + name, e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age}</p>

            <button onClick={handleClickChangeName}>Change Name</button>
            <button onClick={handleClick}>Click me</button>
            {/* /* anonymous function */}
            <button onClick={(e) => handleClickAgain("ronin", e)}>Click me again</button>
        </div >
    );
}

export default Home;