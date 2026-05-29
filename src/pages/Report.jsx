function Report() {
  return (
    <div className="form-container">
      <h2>Report a Crime</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Location" />
        <select>
          <option>Select Crime Type</option>
          <option>Theft</option>
          <option>Assault</option>
          <option>Vandalism</option>
        </select>
        <textarea
          rows="5"
          placeholder="Describe the incident"
        ></textarea>
        <button type="submit">
          Submit Report
        </button>
      </form>
    </div>
  );
}
export default Report;