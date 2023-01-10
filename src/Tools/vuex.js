const msgSuccess= (commit, msg ='Thank you!!') => {
    return commit('notify/setToastMsg',{
        msg:msg,
        type:'success'
    },{ root: true});
}

const msgError = (commit, msg ='Oop, try again later') => {
    return commit('notify/setToastMsg',{
        msg:msg,
        type:'error'
    },{ root: true});
}

export {
    msgError,
    msgSuccess
}