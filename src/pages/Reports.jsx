function Reports() {
  const reports = [
    {
      id: 1,
      type: "Theft",
      location: "Beirut",
      status: "Pending",
    },
    {
      id: 2,
      type: "Assault",
      location: "Tripoli",
      status: "Resolved",
    },
    {
      id: 3,
      type: "Vandalism",
      location: "Saida",
      status: "Under Investigation",
    },
  ];
  return (
    <div className="reports-container">
      {reports.map((report) => (
        <div className="card" key={report.id}>
          <h2>{report.type}</h2>
          <p>Location: {report.location}</p>
          <p>Status: {report.status}</p>
        </div>
      ))}
    </div>
  );
}
export default Reports;