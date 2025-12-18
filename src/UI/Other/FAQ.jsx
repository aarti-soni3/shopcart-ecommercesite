import { alpha, styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1.5px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: alpha(theme.palette.info.dark,0.3),
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: alpha(theme.palette.primary.contrastText,1)
}));

const fAQData = [
  {
    id: "panel1",
    q: "What is your return policy?",
    a: "We offer 30-day returns on all items. If you're not happy, send it back for a full refund.",
  },
  {
    id: "panel2",
    q: "How long does shipping take?",
    a: "Standard shipping takes 5-7 business days. Express options available at checkout.",
  },
  {
    id: "panel3",
    q: "Are your products sustainable?",
    a: "Yes! We partner with eco-friendly manufacturers and use sustainable packaging.",
  },
  {
    id: "panel4",
    q: "Do you offer international shipping?",
    a: "We ship to 100+ countries. International shipping costs vary by location.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Stack sx={{ m: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            icon={
              <QuestionMarkOutlinedIcon
                sx={{ color: "info.dark" }}
                color="info.main"
              />
            }
            label="FAQ's"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Typography variant="h2" fontWeight={800}>
            Frequently Asked Questions
          </Typography>
        </Box>

        {fAQData.map((data) => {
          return (
            <Accordion
              key={data.id}
              expanded={expanded === data.id}
              onChange={handleChange(data.id)}
            >
              <AccordionSummary
                aria-controls={`${data.id}d-content`}
                id={`${data.id}d-header`}
              >
                <Typography component="span">{data.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ textAlign: "left" }}>{data.a}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Stack>
    </>
  );
}
