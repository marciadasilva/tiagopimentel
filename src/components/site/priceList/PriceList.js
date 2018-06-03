import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SlideMenu from "../SlideMenu";
import PriceListComponent from "../home/PriceList";

class PriceList extends React.Component {
  componentDidMount() {
    document.title = "Tiago Pimentel - Preços";
    window.scrollTo(0, 0);
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
          <main className="price-list-page">
            <PriceListComponent />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default PriceList;
