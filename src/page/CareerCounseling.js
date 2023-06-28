import React from "react";
import "../style/CareerCounseling.css";

const CareerCounseling = () => {
  return (
    <div className="careerCounseling-page">
      <div className="container5">
        <h1 className="mainHead">CAREER </h1>
        <h1 className="mainHead">COUNSELING</h1>

        <h4 className="textHead">
          Selecting a good career opportunity. After class 12th is a challenging
          task. The carrier choosen should be of each one's areas of interest,
          and it should also fetch a good salary. Students pursue their Higher
          Secondary classes in various streams like Commerce science and
          Humanities based on the career fields that influence them the most.
          However, it is essential to do complete research and career options
          after the completion of schooling available in the domains that align
          with the students interest as well.
        </h4>

        <h4 className="textHead">
          There is a list of various career options available in various streams
          to pursue a bright start to the career. Students can take carrier
          guidance after 12th and explore their career opportunitie, according
          to the marks scored in their board results. So they need to plan and
          apply for admission, to go challenges and institutes based on
          their board results.
        </h4>

        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          class="btn contact-button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Know the Best in You
        </button>

        {/* <!-- Modal --> */}
        <div
          class="modal fade "
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1
                  class="modal-title fs-2 form-heading"
                  id="exampleModalLabel"
                >
                  Career guidance after 12th- Register with us
                </h1>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control custom-placeholder"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control custom-placeholder"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email-Id"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control custom-placeholder"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Mobile"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="mb-3 col-6 ">
                      <select
                        className="form-control "
                        id="subjectSelect"
                        aria-describedby="emailHelp"
                        required
                      >
                        <option disabled selected value="">
                          Choose Subject
                        </option>
                        <option value="subject1">Subject 1</option>
                        <option value="subject2">Subject 2</option>
                        <option value="subject3">Subject 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <div className="mb-3 col-5.75">
                      <input
                        type="email"
                        className="form-control custom-placeholder"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Percentage"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <select
                      className="form-control"
                      id="careerSelect"
                      aria-describedby="emailHelp"
                      required
                    >
                      <option disabled selected value="">
                        Choose career option
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>

                  <button type="submit" class=" register-button">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounseling;
