import React, { useState } from "react";
import { useContext } from "react";

const FeedbackContext = React.createContext({
    setFeedbackErr: (msg: string) => {},
  setFeedbackChat: (msg: string) => {},
  feedback: "",
});

export function useFeedback() {
  return useContext(FeedbackContext);
}

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState("");

  function setFeedbackChat(msg: string) {
    if (msg != "") setFeedback(msg + " 🙂");
    else setFeedback("");
  }

  function setFeedbackErr(msg: string) {
    if(msg == 'auth/popup-closed-by-user')
      return;
    if (msg != "") setFeedback(msg + " 😕");
    else setFeedback("");
  }

  return (
    <FeedbackContext.Provider value={{ setFeedbackErr, setFeedbackChat,feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}
