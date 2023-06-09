import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.css";
import { Checkbox, Grid } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import CourseInfoSection from "./CourseInfoSection";
import CoursePreviewDialog from "../Dialog/CoursePreviewDialog";

export default function CourseInfoAccordion(props) {
  const coursePreviewModel = React.useRef();

  const previewUnit = (src) => {
    console.log(src);
    coursePreviewModel.current.handleClickOpen(src);
  };
  return (
    <>
      <div className="accordion">
        {props.curriculum.map((section, index) => {
          return (
            <CourseInfoSection title={section.name} key={index} sectionNum={index + 1} totalUnits={section.units.length} sectionDuration={"15 min"} units={section.units} previewUnit={previewUnit} />
          );
        })}
      </div>
      <CoursePreviewDialog ref={coursePreviewModel} />
    </>
  );
}
