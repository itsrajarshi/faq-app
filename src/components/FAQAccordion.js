import React, { useState } from "react";
import styles from "./FAQAccordion.module.css";

const faqs = [
  {
    question: "What is the purpose of this FAQ?",
    answer:
      "This FAQ section provides answers to common questions about our services and features.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
  },
  {
    question: "Where can I find the user guide?",
    answer: "The user guide is available in the 'Help' section of the website.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support via the 'Contact Us' page or by emailing support@example.com.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => toggleAnswer(index)}
            aria-expanded={openIndex === index}
          >
            {faq.question}
          </button>
          <div
            className={`${styles.answer} ${
              openIndex === index ? styles.open : ""
            }`}
            aria-hidden={openIndex !== index}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
