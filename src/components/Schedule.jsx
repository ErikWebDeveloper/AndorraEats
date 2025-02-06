const Schedule = ({ restaurant }) => {
  return (
    <>
      <section className="container py-4 mb-5">
        <h3 className="display-4">Horarios</h3>
        {/**Si hay platos de sugerencia */}
        {restaurant?.schedule && restaurant.schedule !== "" ? (
          <>
            <ScheduleTable schedule={restaurant.schedule} />
          </>
        ) : (
          <p className="text-muted">No hay información disponible ...</p>
        )}
      </section>
    </>
  );
};

const ScheduleTable = ({ schedule }) => {
  const parsedSchedule = JSON.parse(`[${schedule}]`);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {parsedSchedule.map((day, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <strong>{day.day}</strong>
              <span>{day.hours.join(", ")}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
