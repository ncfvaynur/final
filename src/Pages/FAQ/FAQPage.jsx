import React, { useState } from "react";
import MainSection from "../../Components/Main/MainSection";
import Button from "../../Components/Button/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./style.css";

const faqItems = [
    {
      question: "Is it possible to pay for an order with Visa and MasterCard payment cards?",
      answer:
        "Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis..",
    },
    {
      question: "Is it possible to pay by credit card?",
      answer:
        "If you need more help, feel free to reach out to our support team. We are here to assist you. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, ",
    },
    {
        question: "How do I use a promotional code?",
        answer:
          "Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis..",
      },
      {
        question: "Can I return the product after purchase?",
        answer:
          "If you need more help, feel free to reach out to our support team. We are here to assist you. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, ",
      },
      {
        question: "What is the validity period of the gift certificate?",
        answer:
          "Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis..",
      },
      {
        question: "What if the prepaid goods are not delivered?",
        answer:
          "If you need more help, feel free to reach out to our support team. We are here to assist you. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, ",
      },
      {
        question: "Where and how can I exchange or refund?",
        answer:
          "Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis..",
      },
      {
        question: "Is it possible to pay for an order with Visa and MasterCard payment cards?",
        answer:
          "If you need more help, feel free to reach out to our support team. We are here to assist you. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, ",
      },
      {
        question: "Is it possible to pay by credit card?",
        answer:
          "If you need more help, feel free to reach out to our support team. We are here to assist you. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, ",
      },
      {
          question: "How do I use a promotional code?",
          answer:
            "Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, at venenatis libero. Suspendisse viverra placerat eros in venenatis..",
        },
        {
          question: "Can I return the product after purchase?",
          answer:
            "If you need more help, feel free to reach out to our support team. We are here to assist you. Sed tincidunt lacus risus, eget suscipit sapien feugiat ac. Maecenas vitae accumsan odio, ",
        },
  ];

const FAQPage = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : null);
    };
    
  return (
    <div>
      <MainSection className="faqMain" title="FAQ" />
      <div className="content">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="header">
                <h5>Every day help for our customers</h5>
              </div>
              <p>
                Phasellus porta turpis a lectus dapibus aliquet. Maecenas arcu
                est, consectetur eget ipsum ut, vulputate laoreet purus. Proin
                facilisis sem non turpis vulputate semper. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <ul className="disc pb-5">
                <li>Managment</li>
                <li>Analytics</li>
                <li>Consultation</li>
                <li>Engineering</li>
              </ul>
              <div className="header">
                <h5>If you need more help</h5>
              </div>
              <p>
                Maecenas arcu est, consectetur eget ipsum ut, vulputate. Proin
                facilisis sem non turpis vulputate semper. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <Button className="faqBtn" title="Read more" />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="accordion">
                {faqItems.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                  >
                    <AccordionSummary
                      expandIcon={
                        <span>
                          {expanded === `panel${index}` ? (
                            <RemoveIcon />
                          ) : (
                            <AddIcon />
                          )}
                        </span>
                      }
                    >
                      <Typography>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
