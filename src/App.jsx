import { useState } from "react";
import swal from "sweetalert";

function App() {
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = {};

    if (!firstName.trim()) {
      errorMessage.firstName = "This field is required";
    }

    if (!lastName.trim()) {
      errorMessage.lastName = "This field is required";
    }

    if (!email.trim()) {
      errorMessage.email = "This field is required";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessage.email = "Please enter a valid email address";
    }

    if (!selectedOption) {
      errorMessage.queryType = "Please select a query type";
    }

    if (!message.trim()) {
      errorMessage.message = "This field is required";
    }

    if (!isChecked) {
      errorMessage.consent =
        "To submit this form, please consent to being contacted";
    }

    if (Object.keys(errorMessage).length) {
      setErrors(errorMessage);
    } else {
      swal(
        "Message Sent",
        "Thanks for completing the form. We'll be in touch soon!",
        "success"
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setSelectedOption("");
      setMessage("");
      setIsChecked(false);
      setErrors({});
    }
  };

  return (
    <div className="md:h-screen flex justify-center items-center">
      <div className="md:w-2/3 w-4/5 md:p-8 p-4 bg-white rounded-md">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="md:w-1/2">
              <label htmlFor="fName">
                First Name <span className="text-medium-green">*</span>
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`input ${
                  errors.firstName ? "border-red" : "border-light-green"
                }`}
              />
              {errors.firstName ? (
                <p className="text-red text-sm mt-2">{errors.firstName}</p>
              ) : null}
            </div>
            <div className="md:w-1/2">
              <label htmlFor="lName">
                Last Name <span className="text-medium-green">*</span>
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`input ${
                  errors.lastName ? "border-red" : "border-light-green"
                }`}
              />
              {errors.lastName ? (
                <p className="text-red text-sm mt-2">{errors.lastName}</p>
              ) : null}
            </div>
          </div>
          <div>
            <label htmlFor="email">
              Email Address <span className="text-medium-green">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input ${
                errors.email ? "border-red" : "border-light-green"
              }`}
            />
            {errors.email ? (
              <p className="text-red text-sm mt-2">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <p>
              Query Type <span className="text-medium-green">*</span>
            </p>
            <div className="flex md:flex-row flex-col gap-4 mt-1">
              <div className="md:w-1/2 flex items-center border border-light-green px-4 py-2 rounded-md">
                <label
                  htmlFor="option1"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id="option1"
                    name="option"
                    value="generalEnquiry"
                    checked={selectedOption === "generalEnquiry"}
                    onChange={handleOptionChange}
                    className="hidden peer"
                  />
                  <span
                    className={`w-4 h-4 inline-block mr-2 border rounded-full flex justify-center items-center ${
                      selectedOption === "generalEnquiry"
                        ? "border-medium-green"
                        : "border-light-green"
                    } relative`}
                  >
                    <span
                      className={`block w-2 h-2 bg-medium-green rounded-full ${
                        selectedOption === "generalEnquiry" ? "block" : "hidden"
                      }`}
                    ></span>
                  </span>
                  General Enquiry
                </label>
              </div>
              <div className="md:w-1/2 flex items-center border border-light-green px-4 py-2 rounded-md">
                <label
                  htmlFor="option2"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id="option2"
                    name="option"
                    value="supportRequest"
                    checked={selectedOption === "supportRequest"}
                    onChange={handleOptionChange}
                    className="hidden peer"
                  />
                  <span
                    className={`w-4 h-4 inline-block mr-2 border rounded-full flex justify-center items-center ${
                      selectedOption === "supportRequest"
                        ? "border-medium-green"
                        : "border-light-green"
                    } relative`}
                  >
                    <span
                      className={`block w-2 h-2 bg-medium-green rounded-full ${
                        selectedOption === "supportRequest" ? "block" : "hidden"
                      }`}
                    ></span>
                  </span>
                  Support Request
                </label>
              </div>
            </div>
            {errors.queryType ? (
              <p className="text-red text-sm mt-2">{errors.queryType}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="message">
              Message <span className="text-medium-green">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`input ${
                errors.message ? "border-red" : "border-light-green"
              }`}
            ></textarea>
            {errors.message ? (
              <p className="text-red text-sm mt-2">{errors.message}</p>
            ) : null}
          </div>
          <div className="flex flex-col justify-center mt-2">
            <label
              htmlFor="checkbox"
              className="block flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="hidden peer"
              />
              <span
                className={`w-4 h-4 inline-block mr-2 border flex items-center ${
                  isChecked
                    ? "bg-medium-green border-medium-green"
                    : "border-light-green"
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </span>
              I consent to being contacted by the team
              <span className="text-medium-green pl-1">*</span>
            </label>
            {errors.consent ? (
              <p className="text-red text-sm mt-2">{errors.consent}</p>
            ) : null}
          </div>
          <div>
            <button
              className="w-full py-2 hover:bg-medium-green border border-medium-green text-medium-green hover:text-white cursor-pointer rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
