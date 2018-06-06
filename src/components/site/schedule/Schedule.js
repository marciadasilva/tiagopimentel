import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SlideMenu from "../SlideMenu";
import ScheduleComponent from "../home/Schedule";

class Schedule extends React.Component {
  componentDidMount() {
    document.title = "Tiago Pimentel - Contato";
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  componentWillUnmount() {
    document.title = "Tiago Pimentel";
  }
  render() {
    return (
      <div id="outer-container ">
        <SlideMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Header />
          <main className="schedule-page">
            <ScheduleComponent />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Schedule;
