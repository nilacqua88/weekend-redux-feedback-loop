import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';


function ReviewFeedback(){
    const addFeeling = useSelector(store => store.feelingFeedback)
    const history = useHistory();
    const reviewFeedback = {
        feeling: addFeeling.feeling
    }

    const submitFeedback = ()=> {
        axios({
            method:'POST',
            url:'/review',
            data: reviewFeedback
        }).then((response)=>{
            console.log('in POST Review', response);
        }).catch((error)=>{
            console.log(error);
        })
        history.push('/')
    }


    return(
        <div>
            <button onClick={submitFeedback}>Submit</button>
        </div>

    )
}

export default ReviewFeedback