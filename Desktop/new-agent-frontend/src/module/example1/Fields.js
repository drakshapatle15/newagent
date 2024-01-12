import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  FormGroup,
  Radio,
  MenuItem,
  Select,
  Checkbox,
  TextField,
  RadioGroup,
} from "@mui/material";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import {
  textFieldVariant,
  view,
  selectedColor,
  normalColor,
  density,
} from "./app.config";

const Fields = ({ data, setData, error }) => {
  //to handle change in input box
  const handleChange = (e, index) => {
    const { value } = e.target;
    const list = [...data];
    list[index].fieldValue = value;
    setData(list);
  };

  const handleDateTimeChange = (newValue, index) => {
    const list = [...data];
    list[index].fieldValue = newValue;
    setData(list);
  };

  //handle the change in checkboxs
  const handleCheck = (e, index) => {
    const list = [...data];
    list[index].isChecked = e.target.checked;
    setData(list);
  };

  console.log(data, "datadata");

  return (
    <>
      {!data.length > 0 ? (
        <div className="loading">loading...</div>
      ) : (
        data.map(({ name, type, mandatory, options, fieldValue }, index) => {
          return (
            <section key={name}>
              {(type === "text" ||
                type === "email" ||
                type === "number" ||
                type === "textarea") && (
                <>
                  <div>
                    <TextField
                      size={view}
                      type={type}
                      label={name}
                      margin={density}
                      variant={textFieldVariant}
                      onChange={(e) => handleChange(e, index)}
                      multiline={type === "textarea"}
                      rows={2}
                      error={error[name] ? true : false}
                      helperText={error[name]}
                      fullWidth
                    />
                  </div>
                </>
              )}
              {/* for dropdown select menu */}
              {type === "dropdown" && (
                <div>
                  <FormControl
                    fullWidth
                    size={view}
                    error={error.dropdown ? true : false}
                    variant={textFieldVariant}
                  >
                    <InputLabel id="demo-simple-select-label">
                      {name}
                    </InputLabel>
                    <Select
                      labelId="dropdown"
                      id="drop-down"
                      margin="dense"
                      label={name}
                      value={fieldValue}
                      onChange={(e) => handleChange(e, index)}
                    >
                      {options.map(({ text }) => (
                        <MenuItem key={text} value={text}>
                          {text}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormHelperText sx={{ color: "red" }}>
                    {error.dropdown}
                  </FormHelperText>
                </div>
              )}
              {/* for checkbox */}
              {type === "checkbox" && (
                <>
                  <div>
                    <FormControl
                      required
                      error={error.checkBox ? true : false}
                      component="fieldset"
                    >
                      <FormLabel component="legend">{name}</FormLabel>
                      <FormGroup>
                        {options.map(({ text }) => (
                          <FormControlLabel
                            key={text}
                            control={
                              <Checkbox
                                size={view}
                                sx={{
                                  color: normalColor,
                                  "&.Mui-checked": {
                                    color: selectedColor,
                                  },
                                }}
                                onChange={(e) => handleCheck(e, index)}
                                name={text}
                              />
                            }
                            label={text}
                          />
                        ))}
                      </FormGroup>
                      {error && (
                        <FormHelperText>{error.checkBox}</FormHelperText>
                      )}
                    </FormControl>
                  </div>
                </>
              )}
              {/* for radio buttons */}
              {type === "radio" && (
                <div>
                  <FormControl error={error[name] ? true : false}>
                    <FormLabel component="legend">{name}</FormLabel>
                    <RadioGroup>
                      {options.map(({ text }) => (
                        <FormControlLabel
                          key={text}
                          value={text}
                          onChange={(e) => handleChange(e, index)}
                          control={
                            <Radio
                              size={view}
                              sx={{
                                color: normalColor,
                                "&.Mui-checked": {
                                  color: selectedColor,
                                },
                              }}
                            />
                          }
                          label={text}
                          labelPlacement="end"
                        />
                      ))}
                    </RadioGroup>
                    {error && (
                      <FormHelperText sx={{ color: "red" }}>
                        {error[name]}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>
              )}
              {/* for date field */}
              {type === "date" && (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label={name}
                    value={fieldValue}
                    onChange={(newValue) =>
                      handleDateTimeChange(newValue, index)
                    }
                    renderInput={(params) => (
                      <TextField
                        size={view}
                        variant={textFieldVariant}
                        {...params}
                        error={error[name] ? true : false}
                        helperText={error[name]}
                        fullWidth
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
              {/* for date-time local field */}
              {type === "datetime" && (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateTimePicker
                    renderInput={(props) => (
                      <TextField
                        size={view}
                        {...props}
                        variant={textFieldVariant}
                        error={error[name] ? true : false}
                        helperText={error[name]}
                        fullWidth
                      />
                    )}
                    label={name}
                    value={fieldValue}
                    onChange={(newValue) =>
                      handleDateTimeChange(newValue, index)
                    }
                  />
                </LocalizationProvider>
              )}
            </section>
          );
        })
      )}
    </>
  );
};

export default Fields;
