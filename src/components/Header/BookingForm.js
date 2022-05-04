import React from "react";

class BookingForm extends React.Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
        data-aos="fade-up"
        data-aos-delay={450}
        id="bookingDiv"
      >
        <form>
          <div className="form-group">
            <div id="formdiv">
              <div className="form-row">
                <div className="col-md-8 offset-md-1">
                  <p className="booking_headings">
                    <strong>Location</strong>
                  </p>
                </div>
                <div
                  className="col-md-10 offset-md-1"
                  style={{
                    paddingTop: "-16px"
                  }}
                >
                  <select
                    className="form-control form-control-sm"
                    style={{
                      fontFamily: "Roboto, sans-serif"
                    }}
                    name="location"
                  >
                    <option value="Islamabad" selected>
                      Islamabad
                    </option>
                    <option value="Chitral">Chitral</option>
                    <option value="Hunza">Hunza</option>
                    <option value="Murree">Murree</option>
                    <option value="Nathia Gali">Nathia Gali</option>
                    <option value="Naran">Naran</option>
                    <option value="Swat">Swat</option>
                  </select>
                </div>
              </div>
              <div
                className="form-row"
                style={{
                  paddingTop: "10px"
                }}
              >
                <div className="col-md-8 offset-md-1">
                  <p className="booking_headings">
                    <strong>Start & End Date</strong>
                  </p>
                </div>
                <div className="col-md-10 offset-md-1">
                  <input
                    className="form-control form-control-sm"
                    style={{
                      fontFamily: "Roboto, sans-serif"
                    }}
                    name="startDate"
                    type="date"
                  />
                </div>
                <div
                  className="col-md-10 offset-md-1"
                  style={{
                    marginTop: "10px"
                  }}
                >
                  <input
                    className="form-control form-control-sm"
                    style={{
                      fontFamily: "Roboto, sans-serif"
                    }}
                    name="endDate"
                    type="date"
                  />
                </div>
              </div>
              <div
                className="form-row"
                style={{
                  paddingTop: "10px"
                }}
              >
                <div className="col-md-8 offset-md-1">
                  <p className="booking_headings">
                    <strong>Number of Rooms</strong>
                  </p>
                </div>
                <div className="col-md-10 offset-md-1">
                  <input
                    className="form-control form-control-sm"
                    type="number"
                    placeholder={1}
                    min={1}
                    max={5}
                  />
                </div>
              </div>
              <div className="form-row">
                <div
                  className="col d-flex justify-content-center col-md-10 offset-md-1"
                  id="searchBtnCol"
                  style={{
                    paddingTop: "18px"
                  }}
                >
                  <a
                    className="btn btn-lg text-white border-white shadow-lg"
                    id="searchBtn"
                    type="button"
                    href="SearchRooms"
                  >
                    Search Availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
