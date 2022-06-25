import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { CheckIcon, FilterIcon } from "@heroicons/react/solid";
import FilterContext from "../../../contexts/FilterContext";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useGetEventCategorieNamesQuery } from "../../../GraphQl/graphql";

type Anchor = "top" | "left" | "bottom" | "right";

const SideBar: React.FC = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [tempCategory, setTempCategory] = useState<string>("");
  const [tempDates, setTempDates] = useState<any>({
    tempStartDate: "",
    tempEndDate: "",
  });

  const { setCategory, setDates } = React.useContext(FilterContext);

  const handleCategory = (event: SelectChangeEvent) => {
    setTempCategory(event.target.value);
  };
  const eventCategories = useGetEventCategorieNamesQuery();
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const applyFilter = () => {
    setState({
      ...state,
      right: false,
    });

    tempCategory && setCategory(tempCategory);
    tempCategory &&
      setDates({
        startDate: tempDates.tempStartDate,
        endDate: tempDates.tempEndDate,
      });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="relative flex items-center justify-between bg-yellow-400 h-28 px-7 ">
        <p className="text-2xl">Filter</p>
        <CheckIcon className="w-10" onClick={applyFilter} />
      </div>

      <FormControl sx={{ m: 3, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Kategorie</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={tempCategory}
          label="Age"
          onChange={handleCategory}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          {eventCategories.data?.getEventCategories?.result?.map((cat: any) => {
            return (
              <MenuItem key={cat.id} value={cat}>
                {cat.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 3 }}>
        <DatePicker
          disablePast
          label="Start Date"
          value={tempDates.tempStartDate}
          onChange={(newValue) => {
            setTempDates({ ...tempDates, tempStartDate: newValue });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>
      <FormControl sx={{ m: 3 }}>
        <DatePicker
          disablePast
          label="endDate"
          value={tempDates.tempEndDate}
          onChange={(newValue) => {
            setTempDates({ ...tempDates, tempEndDate: newValue });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <span
          onClick={toggleDrawer("right", true)}
          className="flex items-center justify-center w-8 h-8 mr-2 bg-red-800 rounded-full md:bg-primary md:mr-10"
        >
          {" "}
          <FilterIcon className="w-6 text-white" />
        </span>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default SideBar;
