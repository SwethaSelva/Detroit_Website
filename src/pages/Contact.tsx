import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return; // Add this null check
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(() => alert("Message sent!"))
      .catch((err) => alert("Failed: " + err.text));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-4 mt-16 max-w-xl mx-auto">
      <input type="text" name="name" placeholder="Your Name" required className="w-full mb-2 p-2 border" />
      <input type="text" name="subject" placeholder="Subject" required className="w-full mb-2 p-2 border" />
      <textarea name="message" placeholder="Message" required className="w-full mb-2 p-2 border" />
      <input type="file" name="file" className="w-full mb-2" />
      <input type="email" name="email" placeholder="Your Email" required className="w-full mb-2 p-2 border" />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit</button>
    </form>
  );
}