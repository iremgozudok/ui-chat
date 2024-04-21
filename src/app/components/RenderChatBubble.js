const RenderChatBubble = ({ message }) => {
  const { timestamp } = message;
  let hour = timestamp.getHours();
  let minute = timestamp.getMinutes();
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  const hourAndMinute = `${hour}:${minute}`;

  return (
    <div
      className={`flex flex-row ${
        message.isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex pt-2 py-1 pl-3 pr-2 m-2 rounded-lg  text-white text-sm max-w-[70%] relative ${
          message.isUser
            ? "bg-teal-600 rounded-tr-none"
            : "bg-gray-600 rounded-tl-none"
        }`}
      >
        <div
          className={`absolute w-0 h-0 top-0 border-t-[0px] border-t-transparent border-b-[10px] border-b-transparent ${
            message.isUser
              ? "border-l-teal-600 right-[-9px] border-l-[9px]"
              : "border-r-gray-600 left-[-9px] border-r-[9px]"
          }`}
        />

        <p>{message.message}</p>
        <p
          className={`text-[10px] mt-3 ml-2 ${
            message.isUser ? "text-right" : "text-left"
          }`}
        >
          {hourAndMinute}
        </p>
      </div>
    </div>
  );
};

export default RenderChatBubble;
