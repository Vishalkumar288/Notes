import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { primaryBackground } from "../../shared/theme/GlobalTheme";
import moment from "moment";
import InputArea from "../../shared/utils/InputArea";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { formKeys } from "../../constants/form-keys";
import { useFetchNotesQuery } from "../../query-hooks/useFetchNotes";
import useMutateNotes from "../../query-hooks/useMutateNotes";

const validationSchema = yup.object({
  [formKeys.notes]: yup.string().required(`Don't Leave me Empty`),
});

const StyledButton = styled(Button)(() => ({
  width: "100%",
  padding: 12,
  fontFamily: "Lovers Quarrel",
  fontSize: 34,
}));

const LandingPage = () => {
  const [showNote, setShowNote] = useState(true);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { data, isLoading } = useFetchNotesQuery();
  const { mutate } = useMutateNotes();
  // console.log(data);

  const today = new Date();
  const currentDay = today.getDay();
  const daysToSunday = (7 - currentDay) % 7;
  const nextSunday = new Date(
    today.getTime() + daysToSunday * 24 * 60 * 60 * 1000
  );

  const onSubmit = (data) => {
    console.log(data);
    mutate(
      { data },
      {
        onSuccess: () => {
          setShowNote(false);
        },
      }
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "20px 20px",
      }}
    >
      {showNote ? (
        <Accordion sx={{ bgcolor: primaryBackground }}>
          <AccordionSummary>{`Date : ${moment(nextSunday).format(
            "DD MMM, yyyy"
          )}`}</AccordionSummary>
          <AccordionDetails>
            <InputArea
              control={control}
              name={formKeys.notes}
              placeholder="write here my dear"
            />
            <StyledButton variant="link" onClick={handleSubmit(onSubmit)}>
              Save
            </StyledButton>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Typography>Meet me next week please</Typography>
      )}
    </Box>
  );
};

export default LandingPage;
