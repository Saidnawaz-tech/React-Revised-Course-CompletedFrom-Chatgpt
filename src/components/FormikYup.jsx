// npm install formik yup

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function formikk() {
    const schema = Yup.object({
        name: Yup.string().min(4, 'Enter correct name').required('Required Field'),
        email: Yup.string().email('Enter correct email').required('must be entered'),
        password: Yup.string().min(6, 'Must be 6 character').required('required'),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"),null], 'Password must match').required('confirm password is must')
    })
    return(
        <Formik initialValues={{name: "", email: "", password: "", confirmPassword: ""}} validationSchema={schema} onSubmit={(values)=>{
            console.log("form data", values)
            alert('Successfully signup')
        }}>
            {()=>(
                <Form style={{ maxWidth: '300px', margin: '20px auto'}}>
                    <h2>Signup Form</h2>
                    <div>
                        <label>Name: </label>
                        <Field type='name' name='name'/>
                        <ErrorMessage name='name' component='div' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <Field type='email' name='email'/>
                        <ErrorMessage name='email' component='div' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <Field type='password' name='password'/>
                        <ErrorMessage name='password' component='div' style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <Field type='password' name='confirmPassword'/>
                        <ErrorMessage name='confirmPassword' component='div' style={{color: 'red'}}/>
                    </div>
                    <button type="submit" style={{ marginTop: '10px'}}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}
//    const schema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validationSchema={schema}
//       onSubmit={(values) => {
//         console.log(values);  // prints form data
//         alert("Form submitted!");
//       }}
//     >
//       {() => (
//         <Form>
//           <div>
//             <label>Email: </label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" style={{ color: "red" }} />
//           </div>

//           <div>
//             <label>Password: </label>
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" style={{ color: "red" }} />
//           </div>

//           <button type="submit">Login</button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
//   const schema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string().min(6, "At least 6 chars").required("Required"),
// });

// return (
//     <Formik
//     initialValues={{ email: "", password: "" }}
//     validationSchema={schema}
//     onSubmit={(values) => {
//         alert(JSON.stringify(values, null, 2));
//       }}
//       >
//       {() => (
//           <Form>
//           <div>
//             <label>Email: </label>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" style={{color:"red"}} />
//           </div>

//           <div>
//             <label>Password: </label>
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" style={{color:"red"}} />
//           </div>

//           <button type="submit">Login</button>
//         </Form>
//       )}
//     </Formik>
//   );
// }
export default formikk;
