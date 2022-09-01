import { useState } from "react"
import "./LoginForm.css"


const LoginForm = ({onSuccess} ) => {

    //Hooks - States
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isActiveAlumno, setActiveAlumno] = useState(false);
    const [isActiveProfesor, setActiveProfesor] = useState(false);

    //Funciones o Eventos
    const handleClickSignIn = ()=> { //Al dal "ingresar", chequeamos la activación de los botones y así las credenciales que correspondan
        if (isActiveAlumno) {
            checkAlumno()
        } else if (isActiveProfesor) {
            checkProfesor()
        } else {
            alert("Falta activar botón Alumno o Profesor")
        }
    }

    const checkAlumno = () => { // chequeo de validación Alumno. Se ejecuta en el botón sign in
        if (email === "nico@nico.com" && password === "1985") {
            window.localStorage.setItem('isLogged', true)
            setError('')
            onSuccess()
            return
        } else {
            window.localStorage.setItem('isLogged', false)
            setError("Datos alumno incorrecto")
        }
    }

    const checkProfesor = () => { //Chequeo validación Profesor. Se ejecuta en el botón sign in
        if (email === "agus@agus.com" && password === "2022") {
            window.localStorage.setItem('isLogged', true)
            setError('')
            onSuccess()
            return
        } else {
            window.localStorage.setItem('isLogged', false)
            setError("Datos profesor incorrecto")
        }
    }
      
    const handleClickAlumno = ()=>{ //Activar botón Alumno
        setActiveAlumno(!isActiveAlumno)
    }
    
    const handleClickProfesor = ()=>{ //Activar botón Profesor
        setActiveProfesor(!isActiveProfesor)
    }
    const handleEmailChange = (event)=> { //Tomar los datos del campo "email"
        setEmail(event.target.value)
        // console.log(email)
    }

    const handlePasswordChange = (event)=>{ //Tomar los datos del campo "password"
        setPassword(event.target.value)
        console.log(password)
    }
    /*Datdos válidos para loguearse:
        Profesor:
            email: agus@agus.com
            password: 2022
        Alumno:
            email: nico@nico.com
            password: 1985*/

    return(
        <main className="totalContainer">
            <section className="loginContainer">
                <h3>Please fill in your unique admin login details below</h3>
                <div className="buttonsContainer">
                    <button  onClick={handleClickAlumno} className = {isActiveAlumno? "buttonAlumnoActivo" : null}>Alumno </button>
                    <button onClick={handleClickProfesor} className = {isActiveProfesor? "buttonProfesorActivo" : null}>Profesor</button>
                </div>
                <div className="fieldsContainer">
                    <label htmlFor="email">Email</label>
                    <input className="input" id="email" type="text" value={email} onChange={handleEmailChange}/>
                    <label htmlFor="password">Password</label>
                    <input className="input" id="password" type="password" value={password} onChange={handlePasswordChange} />
                    <label className="labelForgorPass">forgot password?</label>
                    <button className="buttonLogin" onClick={handleClickSignIn}>Sign In</button>
                    {error.length > 0 ? (<div className="LoginFormError"> {error} </div>) : null}
                </div>

            </section>
        </main>
    )
}

export default LoginForm;