try{
            const {data} = await API.post("/auth/login",{role,email,password});
            //store token
            if(data.success){
                localStorage.setItem('token', data.token);
                toast.success(data.message);
            }
        } catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            } else{
                return rejectWithValue(error.message);
            }
        }