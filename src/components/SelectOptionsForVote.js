import { useState } from "react";

function SelectOptionsForVote({selectOptions, funcSetVoteFor}){
    
  
    const [voteFor, setVoteFor] = useState("Select Options"); 

 
    // useEffect(() => {  //without button

    //     funcSetVoteFor(voteFor); 
        
    //   }, [voteFor , funcSetVoteFor]);
 

    function sendVote(e){
        e.preventDefault(); 
        funcSetVoteFor(voteFor); 
    }



    return(
        <form className="selectOptionsForm">
            <span>Options for this Vote Ticket: </span>
            
            <select value={voteFor} 
                onChange={e => setVoteFor(e.target.value)}
                className="form-control">
                {
                    selectOptions ? 
                            selectOptions.map((option) => (
                            <option value={option}>{option}</option>
                            ))
                    :null
                }        
            </select>

            <button onClick={sendVote}>Update Vote</button>    

        </form>  



    )

}

export default SelectOptionsForVote; 