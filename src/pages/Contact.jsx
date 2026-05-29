function Contact() {
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
export default Contact;