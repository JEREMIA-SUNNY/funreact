import { useState } from "react";

const Numbers = (props) => {
    const clas = {

    }
   
   


    /***************************************************/




    return (


        <div className={props.isheld?"numbers-main2":"numbers-main"}
        onClick={props.click}
        >
            {props.value}
        </div>
    );
}

export default Numbers;