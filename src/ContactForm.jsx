import React from 'react'
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function ContactForm(props) {
//   const [name, setName] = useState('')
//   const [subject, setSubject] = useState('')
//   const [message, setMessage] = useState('')
//   const [url, setUrl] = useState('')
  const mobileNumber = 254706165412
  const url = 'https://api.whatsapp.com/send?phone='+mobileNumber+'&text=%20'

//   const handleSubmit = () => {
//     setUrl(
//       'https://api.whatsapp.com/send?phone=' +
//         mobileNumber +
//         '&text=%20' +
//         message,
//     )
//     alert(`${url}`)
//   }

  return (
    <div className="contacts">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Contact
      </h3>
      <p>Lets get in touch and talk about your next project. Click prefered channel below</p>
      <a href="https://mail.google.com/mail/u/0/?ogbl#inbox">
        <h6>
          <SiGmail />
          <p>paulchesa1@gmail.com</p>
        </h6>
      </a>
      <a href={url}>
        <h6>
        <FaWhatsapp/>
          <p>+254706165412</p>
        </h6>
         
      </a>
      <a href="https://www.linkedin.com/in/paulchesa/">
        <h6>
          <FaLinkedin />
          <p> @paulchesa</p>
        </h6>
      </a>
//       <a href="https://twitter.com/pchessah">
//         <h6>
//           <FaTwitter />
//           <p> @pchessah</p>
//         </h6>
//       </a>
      <br />
      {/* <form onSubmit={handleSubmit}>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Name"
          required
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Subject"
          required
          name="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Message"
          required
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <a href={url}>
          <button
            className="w3-button w3-black w3-section"
            type="submit"
            onClick={handleSubmit}
          >
            <i className="fa fa-paper-plane"></i> Send Message
          </button>
        </a>
      </form> */}
    </div>
  )
}

export default ContactForm
