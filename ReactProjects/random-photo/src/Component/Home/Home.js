
// import Dropdown from "../../../shared/dropdown-field/Dropdown";
import DashboardTiles from "./DashboardTiles";

const Home = () => {
  // const options = ["option1", "option2", "option3"];
  const data = [
    {
      heading: "PREP",
      subheading: "Prepare materials for the meeting",
    },
    {
      heading: "MTG",
      subheading: "join a scheduled meeting",
    },
    {
      heading: "LOG",
      subheading: "View recordings of past meetings",
    },
    {
       heading: "MTG",
      subheading: "join a scheduled meeting",
    },
    {
      heading: "TUTORIAL",
      subheading: "Experience operation using the Kansai branch model",
    },
    {
      heading: "CONF",
      subheading: "Various settings",
    },
  ];

  
  const handleStartMeeting = () => {
    // Handle the start meeting action
  };

  return (
    <>
      <div>
        <h1>Home</h1>
       
      </div>
      <div>
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-sm-4" key={index}>
                <DashboardTiles
                  heading={item.heading}
                  subheading={item.subheading}
                  onClick={handleStartMeeting}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;