import React from 'react';
import './Fruit.css';
const fruit = (props) => {
return(
<div>

    <table>
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.quantity}</td>
                <td><button onClick={props.click}>Delete</button></td>
            </tr>
        </tbody>
        
    </table>

</div>
)
};
export default fruit;