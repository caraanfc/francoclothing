import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formfields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formfields;
    
    

    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    };

    const signInWithGoogle = async () => {
       await signInWithGooglePopup();
      
       
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();      
        try {
            await signInAuthUserWithEmailAndPassword(email,password);   
            resetFormFields();
        } catch(error) {
            if(error.code === "auth/wrong-password" || error.code === "auth/user-not-found"){
                alert("Incorrect password or email!");
            }
            console.log(error);
        } 
    }; 

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formfields, [name]: value});
    };

    return(
        <div className="sign-up-container">
            <h2>Have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label ="Email" type="email" required onChange={handleChange} name="email" value={email} />
       
                <FormInput label ="Password"type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                <Button buttonType ='inverted' type="submit">Sign In</Button>
                <Button type='button' buttonType ='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;
