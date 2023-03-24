import React from "react";
import { Chatbot } from "react-chatbot-kit";
// const { Chatbot } = await import('react-chatbot-kit')

// @ts-ignore
// const Chatbot =  CB.default ?? CB;

import "react-chatbot-kit/build/main.css";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

const Chat = () => {
  return (
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  );
};

export default Chat;
