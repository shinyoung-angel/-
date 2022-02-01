import axios from 'axios'

const drinking = {
    namespaced: true,
    state: {
        
    },
    mutations: {
        
    },
    actions: {
        addDrinking: (drinkingInfo) => {
            console.log(drinkingInfo)
            axios({
                method: 'post',
                url: `${process.env.VUE_APP_API_URL}/drinking/`,
                headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
                data: drinkingInfo
            })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
    }
}

export default drinking