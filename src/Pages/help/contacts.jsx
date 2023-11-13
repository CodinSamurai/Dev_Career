import { Form, redirect, useActionData } from "react-router-dom"

const Contacts = () => {
  const data = useActionData();
  return (
    <div className="contact">
        <h3>Contact us</h3>
        <Form method="post" action="/help/Contact">
            <label>
                <span>Your email</span>
                <input type="email" name="email" id="" required/>
            </label>
            <label>
                <span>Enter your message</span>
                <textarea name="message" id="" required></textarea>
            </label>
            <button>Submit</button>
            {data && data.error && <p>{data.error}</p>}
        </Form>
    </div>
  )
}

export const ContactAct = async ({request}) => {
  console.log(request);
  const myData = await request.formData()

  const myMessage = {
    email: myData.get('email'),
    message: myData.get('message')
  }
  console.log(myMessage);
  //post to backend or db
  //check on front
  if(myMessage.message.length < 10){
    return {error: 'Type more character'}
  }


  //redirect
  return redirect('/')
}

export default Contacts