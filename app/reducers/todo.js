

const initialState={
        noteArray:[],
        noteText:'',
}


const todo = (state=initialState,action)=>{
    console.log("actionsss", action.payload);
    switch (action.type){
        case 'ADD_NEW_TASK':
            // console.log("jbghbghbghhghgbfff1111")
            // console.log("notetextsssssssss",noteText)
            return {
                ...state,
                noteArray: [
                    ...state.noteArray,action.data
                ]
            }
        case 'DELETE_TASK': 
            return state;
        default:
            return state;
    }       
}
export default todo