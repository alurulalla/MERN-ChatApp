import { Box } from "@chakra-ui/react";
import ChatBox from "../Components/miscellaneous/ChatBox";
import MyChats from "../Components/miscellaneous/MyChats";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
