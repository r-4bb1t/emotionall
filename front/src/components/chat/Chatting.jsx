import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { io } from "socket.io-client";
import MessageForm from "./MessageForm";
import MessageBody from "./MessageBody";
import useTextAreaAutosize from "@/hooks/useTextareaAutosize";
import { useUser } from "@/contexts/userContext";

const socket = io("http://192.168.8.85:80");
// const socket = io("http://localhost:80");

const Chatting = () => {
  const router = useRouter();
  const textAreaRef = useRef(null);
  const messageBodyRef = useRef(null);

  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(!message);
  const { userId } = useUser();
  const room_id = router.query.id;
  useTextAreaAutosize(textAreaRef.current, message);

  useEffect(() => {
    const handleReceiveMessage = (chat) => {
      console.log(chat);
      setChats((prevChats) => [...prevChats, chat]);
    };

    socket.on("connect_error", function (err) {
      console.log("client connect_error: ", err);
    });
    socket.on("message", (chat) => {
      console.log(chat);
      setChats((prevChats) => [...prevChats, chat.message]);
    });
    return () => {
      socket.off("message", handleReceiveMessage);
      // socket.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToBottom(false);
  }, [chats.length]);

  const handleSendMessage = useCallback(() => {
    socket.emit(
      "message",
      {
        room_id: room_id,
        message: {
          member_id: userId,
          text: message,
          time: new Date().toISOString(),
        },
      },
      (res) => console.log("Well emitted!", res.message.text)
    );
    setMessage("");
    setDisabled(true);
  });

  const scrollToBottom = (doAnimation = false) => {
    if (!messageBodyRef.current) return;

    const scrollTop = messageBodyRef.current.scrollHeight;
    if (doAnimation) {
      messageBodyRef.current.scroll({
        behavior: "smooth",
        top: scrollTop,
      });
    } else {
      messageBodyRef.current.scrollTop = scrollTop;
    }
  };

  return (
    <>
      <div
        ref={messageBodyRef}
        className="h-full overflow-scroll relative px-6 py-2.5"
      >
        <MessageBody chats={chats} />
      </div>
      <MessageForm
        ref={textAreaRef}
        message={message}
        disabled={disabled}
        setDisabled={setDisabled}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </>
  );
};

export default Chatting;
