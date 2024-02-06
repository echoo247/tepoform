import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import FileInput from "./file-input";

const url = 'https://script.google.com/macros/s/AKfycbzdyIRBEZ-bFfZMwPoW9ptrMaaH6huPEJF8eLEKBjsYSuIvVnI8ZY5vpLL-Elg6zZsD/exec'

const App = () => {
  const [files, setFiles] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const onSubmit = async (data) => {
        let formData = new FormData();
        /* formData.append('fullName', data.fullName);
         formData.append('personalAccount', data.personalAccount);
         formData.append('address', data.address);
         formData.append('phone', data.phone);
         formData.append('email', data.email);
         formData.append('appeal', data.appeal);*/
        // formData.append('files', JSON.stringify(files))
        formData.append('files', files)
        console.log("files", files)

        fetch(url, { method: 'POST', body: formData, mode: 'no-cors' })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message));

    }

    return (
      <div>
        <div title="Онлайн звернення" />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{display: 'grid'}}>fullName
                {/*<input
                name="fullName"
                type="text"
                {...register("fullName")}
                placeholder='fullName'

            />personalAccount
            <input
                name="personalAccount"
                type="text"
                {...register("personalAccount")}
                placeholder='personalAccount'
            />address
            <input
                name="address"
                type="text"
                {...register("address")}
                placeholder='address'

            />phone
            <input
                name="phone"
                type="tel"
                {...register("phone")}
                placeholder='phone'

            />email
            <input
                name="email"
                type="text"
                {...register("email")}
                placeholder='email'

            />appeal
            <input
                name="appeal"
                type="text"
                {...register("appeal")}
                placeholder='appeal'
            />*/}
                <FileInput files={files} setFiles={setFiles}/>
                <button> submit</button>
            </div>
        </form>
      </div>
  );
};

export default App;