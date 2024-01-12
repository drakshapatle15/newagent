import { useState } from "react";
import { Button, Paper, ThemeProvider } from "@mui/material";

import customTheme from "./Theme";
import Fields from "./Fields";

const Main = () => {
  const [data, setData] = useState([
    {
      name: "full name",
      type: "text",
      fieldValue: "john doe",
      mandatory: "true",
      options: [{ text: "" }],
      errorHelperText: "This field is required.",
    },
    {
      name: "email",
      type: "email",
      fieldValue: "john@doe.com",
      mandatory: "true",
      options: [{ text: "" }],
      errorHelperText: "This field is required.",
    },
    {
      name: "occupation",
      type: "dropdown",
      fieldValue: "occupation",
      mandatory: "true",
      options: [
        { text: "Option 1" },
        { text: "Option 2" },
        { text: "Option 3" },
      ],
      errorHelperText: "This field is required.",
    },
    {
      name: "DOB",
      type: "date",
      fieldValue: "date of birth",
      mandatory: "true",
      options: [],
      errorHelperText: "This field is required.",
    },
    {
      name: "Occupation Beginning",
      type: "datetime",
      fieldValue: "Occupation Beginning",
      mandatory: "true",
      options: [],
      errorHelperText: "This field is required.",
    },
    {
      name: "are you alive?",
      type: "radio",
      fieldValue: "are you alive",
      mandatory: "true",
      options: [{ text: "yes" }, { text: "maybe" }],
      errorHelperText: "This field is required.",
    },
    {
      name: "annual income?",
      type: "checkbox",
      fieldValue: "annual income",
      mandatory: "true",
      options: [{ text: "unemployeed" }, { text: "10₹ de turture" }],
      errorHelperText: "This field is required.",
    },
  ]);
  const [error, setError] = useState("");

  // function for form validation
  const validateForm = () => {
    const tempError = {};
    data.map(
      ({ type, name, mandatory, errorHelperText, fieldValue, isChecked }) => {
        if (
          (type === "text" ||
            type === "textarea" ||
            type === "radio" ||
            type === "number" ||
            type === "date" ||
            type === "datetime") &&
          mandatory
        ) {
          tempError[name] = fieldValue ? "" : errorHelperText;
        }

        if (type === "email" && mandatory) {
          tempError[name] = fieldValue
            ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/gi.test(fieldValue)
              ? ""
              : "please enter valid email"
            : errorHelperText;
        }

        if (type === "checkbox" && mandatory) {
          tempError.checkBox = isChecked ? "" : errorHelperText;
        }

        if (type === "dropdown" && mandatory) {
          tempError.dropdown = fieldValue ? "" : errorHelperText;
        }
        return tempError;
      }
    );
    setError({ ...tempError });
    return Object.values(tempError).every((item) => item === "");
  };

  //   const getData = async () => {
  //     const data = await fetch("http://localhost:4000/api/v1");
  //     const fields = await data.json();
  //     setData(fields.data);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("done");
    } else {
      console.log("not valid");
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: "15px",
        }}
      >
        <form className="form">
          <section className="fields">
            <Fields data={data} setData={setData} error={error} />
          </section>
          <Button
            size={"medium"}
            onClick={handleSubmit}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default Main;
